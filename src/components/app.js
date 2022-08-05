import React from "react";
import axios from "axios";
import Map from "./Map/Map";
import ListShops from "./ListShops/ListShops";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            list: [],
            newlistShops: [],
            category: [],
            categoryTitle: "",
            category: [],
            url: "",
            numberActiveShopOnFloor: [],
            legend: "",
            activeFloor: 0,
            resolveSearchMap: null,
            categoryColor: "",
            correctUrl: "",
            idIncommingShop: "",
            windowWidth: 0,
        };
        this.filteredShops = this.filteredShops.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
        this.chooseLetter = this.chooseLetter.bind(this);
        this.createCategoryList = this.createCategoryList.bind(this);
        this.activateSvgPath = this.activateSvgPath.bind(this);
        this.resetCategoryStyles = this.resetCategoryStyles.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
        // floor
        this.selectFloor = this.selectFloor.bind(this);
    }
    // init data from api
    componentDidMount() {
        this.refreshPage();

        const fullUrl = "http://local.projects.cz:8073/galerie-butovice/web/mapa-centra"
        // remove ID from url, take id to show active shop
        const idIncommingShop = window.location.search.substring(4, 8);
        /*  
        let newUrl = fullUrl.replace(window.location.search, "");
        if (history.pushState) {
             history.pushState(null, null, newUrl);
         } */

        let url = fullUrl.includes("mapa-centra") ? "map" : "list";
        // create dynamic url for api
        let urlEndWith = "mapa-centra";

        let absoluteUrl = "http://local.projects.cz:8073/galerie-butovice/web/";
        /*    let absoluteUrl = fullUrl.replace(urlEndWith, ""); */

        axios
            .get(
                urlEndWith == "obchody-a-sluzby/restaurace"
                    ? `${absoluteUrl}export/restaurants`
                    : `${absoluteUrl}export/shops`
            )
            .then((res) => {
                /*  axios.get(`${absoluteUrl}export/shops`).then((res) => { */
                // create category list
                let createCategoryList = [];
                res.data.map((t) => {
                    let current = t.field_shop_category;

                    if (createCategoryList.indexOf(current) === -1) {
                        createCategoryList.push(current);
                    }
                });
                // TODO: fix this sort on full word
                createCategoryList.sort(function (a, b) {
                    if (a < b) {
                        return -1;
                    }
                    if (a > b) {
                        return 1;
                    }
                    return 0;
                });
                // remove loade
                var bodyPage = document.querySelector("body");
                var loader = document.getElementById("block-loader");
                loader && loader.remove();
                loader && bodyPage.classList.add("ready");

                let allShops = res.data;
                let selectedShopFromUrl = allShops.filter(
                    (s) => s.field_shop_location_on_map == idIncommingShop
                );
                let activeFloor = idIncommingShop
                    ? selectedShopFromUrl[0].field_floor
                    : 0;

                this.setState({
                    list: res.data,
                    newlistShops: res.data,
                    loaded: true,
                    activeFloor,
                    //  category: createCategoryList,
                });
            });

        // legend data
        axios.get(`${absoluteUrl}export/map-legend`).then((res) => {
            this.setState({
                legend: res.data,
            });
        });

        const subpageMap = document.querySelector("body");
        let windowWidth = subpageMap
            ? subpageMap.getBoundingClientRect().width
            : 0;


        axios
            .get(
                urlEndWith == "obchody-a-sluzby/restaurace"
                    ? `${absoluteUrl}export/restaurants-categories`
                    : `${absoluteUrl}export/shops-categories`
            )
            .then((res) => {
                this.setState({
                    category: res.data,
                });
            });

        this.setState({
            url,
            correctUrl: urlEndWith,
            idIncommingShop,
            windowWidth,
        });
    }

    refreshPage() {
        const subpageMap = document.querySelector("body");
        if (subpageMap) {
            window.addEventListener("resize", () =>
                this.state.windowWidth !=
                    subpageMap.getBoundingClientRect().width
                    ? window.location.reload()
                    : null
            );
        }
    }

    // select floor
    selectFloor(activeFloor) {
        let newSelectedFloor = activeFloor;

        let logos = document.querySelectorAll("[data-platform]");
        var logosArray = Array.from(logos);

        logosArray.map((logo) =>
            logo.dataset.platform == activeFloor
                ? (logo.style.display = "inline-block")
                : (logo.style.display = "none")
        );

        this.setState({
            activeFloor: newSelectedFloor,
        });
    }

    /*  on search shop, take ids and add class for path */
    activateSvgPath(idSvg) {
        const paths = Array.from(document.querySelectorAll(".map__wrap svg g"));
        let answer = paths.map((path) => {
            if (path.dataset.place === idSvg) {
                return path;
            }
        });

        this.resetCategoryStyles();
    }

    /* return choose shops from search in naigation */
    filteredShops(filteredShop) {
        this.resetCategoryStyles();

        if (this.state.correctUrl == "mapa-centra") {
            if (filteredShop.length == 1) {
                // functionality for search on page Map
                // return only one shop
                let resolveSearchMap =
                    filteredShop.length == 1 ? filteredShop[0] : null;

                // on change floor and change for logo
                let logos = document.querySelectorAll("[data-platform]");
                var logosArray = Array.from(logos);

                logosArray.map((logo) =>
                    logo.dataset.platform == resolveSearchMap.field_floor
                        ? (logo.style.display = "inline-block")
                        : (logo.style.display = "none")
                );

                let locationOnMap = resolveSearchMap.field_floor
                    ? resolveSearchMap.field_floor
                    : 0;

                this.setState({
                    activeFloor: locationOnMap,
                    newlistShops: filteredShop,
                    resolveSearchMap,
                    categoryTitle: "",
                    categoryColor: "",
                });
            }
        }
        if (this.state.urlEndWith !== "mapa-centra") {
            this.setState({
                newlistShops: filteredShop,
                categoryTitle: "",
                categoryColor: "",
            });
        }
    }
    /* after choose category create filtered list of shops */
    selectCategory(category) {
        // na click kategorie zober zoznam vsetkych obchodov
        // najdi ci jeho kategorie list.field_shop_tags_export
        // a vyfiltruj obchody, ktore obsahuju dany tag
        this.resetCategoryStyles();

        let categoryString;
        let categoryArrayOfString;
        let selectCategory = this.state.list.filter(
            (shop) => {
                return (
                    (categoryString = shop.field_shop_category_export),
                    /* TODO: rewrite later */
                    categoryString[0].name === category
                        ? categoryString[0].name
                        : null ||
                            (categoryString[1] &&
                                categoryString[1].name === category)
                            ? categoryString[1].name
                            : null ||
                                (categoryString[2] &&
                                    categoryString[2].name === category)
                                ? categoryString[1].name
                                : null ||
                                    (categoryString[3] &&
                                        categoryString[3].name === category)
                                    ? categoryString[1].name
                                    : null
                );
            }
            /* (shop) => shop.field_shop_category === category */
        );

        /* on select category  remove class .open */
        let mapNavigation = document.getElementsByClassName("map-navigation");
        let mapNavigationCategory = document.getElementsByClassName(
            "map-navigation__category"
        );
        mapNavigation[0].classList.remove("open");
        mapNavigationCategory[0].classList.remove("open");

        /* map function for category */
        if (this.state.url) {
            const paths = Array.from(
                document.querySelectorAll(".map__wrap svg g")
            );

            const svgPathsId = paths.map((path) =>
                path.dataset.place ? path.dataset.place : ""
            );

            const categoryShopsId = selectCategory.map(
                (category) => category.field_shop_location_on_map
            );
            let idActivePath = categoryShopsId.filter((id) =>
                svgPathsId.includes(id)
            );

            /* TODO: add function form remove class */
            let resultAtivePaths = paths.map((path) =>
                idActivePath.map((idPath) =>
                    path.dataset.place === idPath
                        ? path.classList.add("active")
                        : null
                )
            );
        }

        let categoryDetail = this.state.category.filter(
            (c) => c.name == category
        );

        // calculate, how many shops is active on witch floor
        const createArray = selectCategory.map((c) => c.field_floor);
        var res = createArray.reduce(function (obj, b) {
            obj[b] = ++obj[b] || 1;
            return obj;
        }, {});

        this.setState({
            newlistShops: selectCategory,
            categoryTitle: categoryDetail[0].name,
            categoryColor: categoryDetail[0].field_category_of_units_color,
            numberActiveShopOnFloor: res,
        });
    }

    // for every function which need reset styles(added with select category)
    resetCategoryStyles() {
        const paths = Array.from(document.querySelectorAll(".map__wrap svg g"));

        paths.map((p) => p.classList.remove("active"));

        const numberActiveShopOnFloor = [];
        this.setState({
            numberActiveShopOnFloor,
            resolveSearchMap: "",
        });
    }

    /* this function return filtered list of shops after click at select letter */
    chooseLetter(letter) {
        let allShops = this.state.list;
        let newlistShops = [];
        if (letter === "all") {
            newlistShops = allShops;
        } else {
            newlistShops = allShops.filter(
                (shop) => shop.title[0].toLowerCase() === letter
            );
        }
        this.setState({
            newlistShops,
            categoryTitle: "",
            categoryColor: "",
        });
    }

    render() {
        const {
            list,
            category,
            newlistShops,
            categoryTitle,
            url,
            numberActiveShopOnFloor,
            legend,
            activeFloor,
            resolveSearchMap,
            categoryColor,
            correctUrl,
            idIncommingShop,
        } = this.state;

        return (
            <React.Fragment>
                {/* check url and return coorect content : map or list of shops */}
                {/*   {this.state.loaded ? this.createCategoryList() : null} */}
                {url == "map" ? (
                    this.state.loaded ? (
                        <Map
                            list={list}
                            category={category}
                            newlistShops={newlistShops}
                            onSelectCategory={this.selectCategory}
                            onFilteredShops={this.filteredShops}
                            chooseLetter={this.chooseLetter}
                            categoryTitle={categoryTitle}
                            numberActiveShopOnFloor={numberActiveShopOnFloor}
                            legend={legend}
                            resolveSearchMap={resolveSearchMap}
                            activeFloor={activeFloor}
                            selectFloor={this.selectFloor}
                            correctUrl={correctUrl}
                            idIncommingShop={idIncommingShop}
                            resetCategoryStyles={this.resetCategoryStyles}
                        />
                    ) : null
                ) : this.state.loaded ? (
                    <ListShops
                        list={list}
                        category={category}
                        newlistShops={newlistShops}
                        onSelectCategory={this.selectCategory}
                        onFilteredShops={this.filteredShops}
                        chooseLetter={this.chooseLetter}
                        categoryTitle={categoryTitle}
                        categoryColor={categoryColor}
                        correctUrl={correctUrl}
                    />
                ) : null}
            </React.Fragment>
        );
    }

    /* TODO: reaturn only category, dont have color, all put to object in array, now not used */
    createCategoryList() {
        let createCategoryList = [];

        this.state.list.map((t) => {
            let current = t.field_shop_category;

            if (createCategoryList.indexOf(current) === -1) {
                createCategoryList.push(current);
            }
        });
        // TODO: fix this sort on full word
        createCategoryList.sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });
        this.setState({
            category: createCategoryList,
        });
    }
}

export default App;
