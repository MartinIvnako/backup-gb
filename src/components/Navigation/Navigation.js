import React from "react";
import Search from "./Search";
import Category from "./Category";
import LocationIcon from "./../../images/location.svg";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titlePage: "",
      textUrl: "",
      linkUrl: "",
      changeClass: false,
      absoluteUrl: "",
    };
    this.addClass = this.addClass.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.createUrl = this.createUrl.bind(this);
  }


  createUrl() {
    const fullUrl = "http://local.projects.cz:8073/galerie-butovice/web/mapa-centra";
    // const fullUrl = fullUrl;
    let urlEndWith = fullUrl.endsWith("mapa-centra")
      ? "mapa-centra"
      : "obchody-a-sluzby";

    urlEndWith = fullUrl.endsWith("obchody-a-sluzby/restaurace")
      ? "obchody-a-sluzby/restaurace"
      : urlEndWith;

    let absoluteUrl = fullUrl.replace(urlEndWith, "");

    this.setState({
      absoluteUrl,
    });
  }

  componentDidMount() {
    /* check url and return data for link in navigation */

    switch (this.props.correctUrl) {
      case "mapa-centra": {
        this.setState({
          titlePage: "Mapa centra",
          textUrl: "Obchody a služby",
          linkUrl: "obchody-a-sluzby",
        });
        break;
      }
      case "obchody-a-sluzby": {
        this.setState({
          titlePage: "Obchody a služby",
          textUrl: "Mapa centra",
          linkUrl: "mapa-centra",
        });
        break;
      }
      case "obchody-a-sluzby/restaurace": {
        this.setState({
          titlePage: "Restaurace",
          textUrl: "Mapa centra",
          linkUrl: `mapa-centra`,
        });
        break;
      }
    }

    this.createUrl();
  }
  toggleClass() {
    this.setState({
      changeClass: !this.state.changeClass,
    });
  }
  addClass(e) {
    e.preventDefault();

    this.setState({
      changeClass: !this.state.changeClass,
    });
  }

  render() {
    const { titlePage, textUrl, linkUrl, changeClass } = this.state;
    const {
      allShops,
      category,
      onSelectCategory,
      onFilteredShops,
      idIncommingShop,
      activeFloor,
    } = this.props;
    return (
      <React.Fragment>
        <nav
          className="map-navigation"
          className={
            this.state.changeClass ? " map-navigation open" : "map-navigation"
          }
        >
          <p className="map-navigation__title">{titlePage}</p>

          <ul className="map-navigation__list">
            <li className="map-navigation__link">
              <a href={this.state.absoluteUrl + linkUrl}>
                <LocationIcon />
                <span>{textUrl}</span>
              </a>
            </li>
            <Category
              onSelectCategory={onSelectCategory}
              category={category}
              addClass={this.addClass}
              toggleClass={this.toggleClass}
              changeClass={changeClass}
            />
            <Search
              allShops={allShops}
              idIncommingShop={idIncommingShop}
              onFilteredShops={onFilteredShops}
            />
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigation;
