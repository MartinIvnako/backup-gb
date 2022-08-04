import React from "react";
import SelectLetter from "./SelectLetter";
import ListOfShopsContent from "./ListOfShopsContent";
import Navigation from "../Navigation/Navigation";

class ListShops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
      listOfLetters: [],
    };

    this.createListLetters = this.createListLetters.bind(this);
  }

  componentDidMount() {
    /* function create list of letter for select shops */
    this.createListLetters();
  }

  /* function create list of letter for select shops */
  createListLetters() {
    let listOfLetters = [];

    this.state.list.map((t) => {
      let current = t.title[0].toLowerCase();

      if (listOfLetters.indexOf(current) === -1) {
        listOfLetters.push(current);
      }
    });

    listOfLetters.sort(function (a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    this.setState({
      listOfLetters,
    });
  }

  render() {
    const { list, listOfLetters } = this.state;
    const {
      category,
      newlistShops,
      onSelectCategory,
      onFilteredShops,
      chooseLetter,
      categoryTitle,
      categoryColor,
      correctUrl,
    } = this.props;
    return (
      <div>
        <Navigation
          correctUrl={correctUrl}
          allShops={list}
          onSelectCategory={onSelectCategory}
          category={category}
          onFilteredShops={onFilteredShops}
        />
        <SelectLetter
          listOfLetters={listOfLetters}
          chooseLetter={chooseLetter}
        />
        <ListOfShopsContent
          allShops={newlistShops}
          categoryTitle={categoryTitle}
          categoryColor={categoryColor}
        />
      </div>
    );
  }
}

export default ListShops;
