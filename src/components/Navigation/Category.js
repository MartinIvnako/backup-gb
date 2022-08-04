import React from "react";
import ArrowIcon from "./../../images/arrow.svg";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.multipleFunction = this.multipleFunction.bind(this);
  }
  multipleFunction(category) {
    this.props.onSelectCategory(category);
    this.props.toggleClass();
    document.querySelector('.map__legend-button.active') ? (
      document.querySelector('.map__legend-button.active').classList.remove('active'),
      Array.from(document.querySelectorAll(`[data-type]`)).map( icon => icon.classList.remove('active'))
    ) : null;
  }

  render() {
    const { category, changeClass, addClass } = this.props;
    return (
      <li
        className={
          changeClass
            ? " map-navigation__category open"
            : "map-navigation__category"
        }
      >
        <div className="dropdown__menu" onClick={addClass}>
          <ArrowIcon />
          <span>Kategorie</span>
        </div>
        <div className="dropdown__wrap">
          <span className="dropdown__item-title">Kategorie</span>
          <ul className="dropdown__items">
            {/* create list of category */}
            {category.map((category) => (
              <li
                /*    className={category.color} */
                key={category.name}
                onClick={() => this.multipleFunction(category.name)}
              >
                <span
                  className="color"
                  style={{ background: category.field_category_of_units_color }}
                ></span>
                <span className="name-category">{category.name}</span>
              </li>
            ))}
            <span className="close" onClick={addClass}></span>
          </ul>
        </div>
      </li>
    );
  }
}
export default Category;
