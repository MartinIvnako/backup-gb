import React from "react";
import ArrowNextIcon from "./../../images/next.svg";
import Discount from "./../../images/percent.svg";

class ListOfShopsContent extends React.Component {
  render() {
    const { allShops, categoryTitle, categoryColor } = this.props;

    allShops.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });

    return (
      <React.Fragment>
        <ul className="list-of-shops row">
          {categoryTitle ? (
            <div className="list-of-shops__header">
              <span
                className="color"
                style={{ background: categoryColor }}
              ></span>
              <p className="list-of-shops__title">{categoryTitle}</p>
            </div>
          ) : null}

          {allShops.map((s) => (
            <li key={s.title} className="col-sm-6 col-lg-3 category-item">
              <a href={s.view_node}>
                <div className="list-of-shops__brand">
                  {/* TODO:  we dont have data for discount */}
                  {/* <div className="list-of-shops__discount">
                    <Discount />
                  </div> */}
                  <div className="list-of-shops__logo">
                    <img src={s.field_shop_logo} alt={s.title} />
                  </div>
                  <span className="list-of-shops__title">{s.title}</span>
                </div>

              {/*   <div className="list-of-shops__data">
                  <ul className="list-of-shops__open">
                     <li>{s.field_shop_opening_hours}</li> 
                    {s.field_opening_hours_export.length > 0
                      ? s.field_opening_hours_export.map((open, key) => (
                          <li key={key}>{`${open.label} ${open.value}`}</li>
                        ))
                      : ""}
                  </ul>
                  <div className="list-of-shops__floor">
                    {s.field_floor && (s.field_floor === '0' ? 'přízemí' : s.field_floor + ".patro")}
                  </div>
                  <div className="list-of-shops__link">
                      Informace o obchodu
                    <ArrowNextIcon />
                  </div>
                </div> */}
              </a>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default ListOfShopsContent;
