import React from "react";
import { ReactComponent as SearchIcon } from "./../../images/search.svg";
import { RemoveAccents } from "./../utils/RemoveAccents";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: [],
            activeSearch: false,
            inputValue: "",
            mapSubpage: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.close = this.close.bind(this);
        this.searchClick = this.searchClick.bind(this);
    }

    close() {
        this.setState({
            activeSearch: false,
        });
    }

    componentWillReceiveProps(nextProps) {
        const fullUrl = "http://local.projects.cz:8073/galerie-butovice/web/mapa-centra";
        let mapSubpage = fullUrl.endsWith("mapa-centra")
            ? true
            : false;

        this.setState({
            filtered: nextProps.items,
            mapSubpage,
        });
    }

    componentDidMount() {
        let idIncommingShop = this.props.idIncommingShop;
        let selectedShopFromUrl = this.props.items.filter(
            (s) => s.field_shop_location_on_map == idIncommingShop
        );

        if (idIncommingShop) {
            this.props.onFilteredShops(selectedShopFromUrl);
        }
    }

    handleChange(e) {
        // Variable to hold the original version of the list
        let currentList = [];
        // Variable to hold the filtered list before putting into state
        let newList = [];

        // If the search bar isn't empty
        if (e.target.value !== "") {
            // Assign the original list to currentList
            currentList = this.props.items;

            // Use .filter() to determine which items should be displayed
            // based on the search terms
            newList = currentList.filter((item) => {
                const newItem = item.title;
                let stringTitleAndTags = `${newItem} ${item.field_shop_tags_export.join(
                    " "
                )}`;

                // send input value & tags/title shops for remove accent
                let titleAndTags = RemoveAccents(stringTitleAndTags);
                let inputValue = RemoveAccents(e.target.value);
                inputValue = inputValue.toLowerCase();

                // change current item to lowercase
                const lc = titleAndTags.toLowerCase();
                // change search term to lowercase
                /*    const filter = e.target.value.toLowerCase(); */
                const filter = inputValue;
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
                return lc.includes(filter);
            });
            this.setState({
                activeSearch: true,
            });
        } else {
            // If the search bar is empty, set newList to original task list
            newList = this.props.items;

            this.setState({
                activeSearch: false,
            });
        }
        // Set the filtered state based on what our rules added to newList
        this.setState({
            inputValue: e.target.inputValue,
            filtered: newList,
        });
    }
    /* on enter call function and push new list shops to show */
    keyPress(e) {
        if (e.keyCode == 13) {
            this.props.onFilteredShops(this.state.filtered);
            /* TODO: MIV 2022 */
            /*   document.querySelector(".map__legend .active")
                  ? (document
                        .querySelector(".map__legend .active")
                        .classList.remove("active"),
                    Array.from(document.querySelectorAll(`[data-type]`)).map(
                        (icon) => icon.classList.remove("active")
                    ))
                  : null; */
            this.setState({
                activeSearch: false,
                inputValue: "",
            });
        }
    }

    searchClick(item) {
        let selectOneOnClick = [];
        /* TODO: MIV 2022 */
        /*   document.querySelector(".map__legend .active")
              ? (document
                    .querySelector(".map__legend .active")
                    .classList.remove("active"),
                Array.from(document.querySelectorAll(`[data-type]`)).map((icon) =>
                    icon.classList.remove("active")
                ))
              : null; */
        selectOneOnClick.push(item);
        this.props.onFilteredShops(
            selectOneOnClick ? selectOneOnClick : this.state.filtered
        );
        this.setState({
            activeSearch: false,
            inputValue: "",
        });
    }

    render() {
        const { filtered, activeSearch, inputValue, mapSubpage } = this.state;
        const { onFilteredShops } = this.props;
        return (
            <li className="map-navigation__search">
                <div className="dropdown__menu">
                    <input
                        type="text"
                        className="input"
                        value={inputValue}
                        onChange={this.handleChange}
                        onKeyDown={this.keyPress}
                        placeholder="co hledáte?"
                    />

                    <div
                        className={
                            activeSearch
                                ? "open dropdown__item"
                                : "close dropdown__item"
                        }
                    >
                        <div className="dropdown__item-wrapper">
                            {filtered.map((item) => (
                                <div
                                    key={item.nid}
                                    className="dropdown__item-content"
                                    onClick={() =>
                                        mapSubpage
                                            ? this.searchClick(item)
                                            : null
                                    }
                                >
                                    {mapSubpage ? null : (
                                        <a
                                            href={item.view_node}
                                            key={item.title}
                                            className="dropdown__item-link"
                                        ></a>
                                    )}
                                    <div className="img-content">
                                        <img src={"http://local.projects.cz:8073/" + item.field_shop_logo} />
                                    </div>
                                    <div className="info">
                                        <p className="title">{item.title}</p>
                                        <p className="floor">
                                            Patro - {item.floor}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className="map-navigation__search-icon"
                    onClick={() =>
                        mapSubpage
                            ? this.searchClick(this.state.filtered[0])
                            : null
                    }
                >
                    <SearchIcon />
                </div>
            </li>
        );
    }
}

export default List;
