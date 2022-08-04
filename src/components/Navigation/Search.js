import React from "react";
import List from "./List";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.allShops,
    };
  }

  render() {
    const { list } = this.state;
    const { onFilteredShops, idIncommingShop, activeFloor } = this.props;
    return (
      <React.Fragment>
        <List
          items={list}
          onFilteredShops={onFilteredShops}
          idIncommingShop={idIncommingShop}
        />
      </React.Fragment>
    );
  }
}
export default Search;
