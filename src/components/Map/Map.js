import React from "react";
import MapContent from "./MapContent";
import Navigation from "../Navigation/Navigation";

class Map extends React.Component {
  render() {
    const {
      category,
      onFilteredShops,
      onSelectCategory,
      list,
      legend,
      numberActiveShopOnFloor,
      activeFloor,
      selectFloor,
      resolveSearchMap,
      correctUrl,
      idIncommingShop,
      resetCategoryStyles,
    } = this.props;

    return (
      <div className="react-map">
        <div className="container">
          <Navigation
            correctUrl={correctUrl}
            allShops={list}
            category={category}
            activeFloor={activeFloor}
            onSelectCategory={onSelectCategory}
            onFilteredShops={onFilteredShops}
            idIncommingShop={idIncommingShop}
          />
        </div>
        <MapContent
          category={category}
          onFilteredShops={onFilteredShops}
          onSelectCategory={onSelectCategory}
          list={list}
          numberActiveShopOnFloor={numberActiveShopOnFloor}
          legend={legend}
          activeFloor={activeFloor}
          selectFloor={selectFloor}
          resolveSearchMap={resolveSearchMap}
          idIncommingShop={idIncommingShop}
          resetCategoryStyles={resetCategoryStyles}
        />
      </div>
    );
  }
}

export default Map;
