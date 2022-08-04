import React, { Component } from "react";
class Floor extends Component {
  render() {
    const {
      floorList,
      activeFloor,
      selectFloor,
      numberActiveShopOnFloor,
    } = this.props;
    return (
      <React.Fragment>
        <ul className="map__floors">
          {floorList.map((f) => (
            <li
              key={f}
              data-active={activeFloor == f ? true : false}
              onClick={() => selectFloor(f)}
            >
              P.{f}
              {numberActiveShopOnFloor[f] > 0 ? (
                <span>{numberActiveShopOnFloor[f]}</span>
              ) : null}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Floor;
