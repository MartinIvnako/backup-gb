import React from "react";
import HorizontalScroll from "./../utils/HorizontalScroll";

class SelectLetter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfLetters: [],
    };
  }
  /* external function for horizontal scrool items, if we have many and long content */
  componentDidMount() {
    HorizontalScroll();
  }

  render() {
    const { listOfLetters, chooseLetter } = this.props;
    return (
      <React.Fragment>
        <div className="select-letter">
          <p>jaký obchod hledáte?</p>
          <ul className="items">
            <li className="active item" onClick={() => chooseLetter("all")}>
              Všechny
            </li>
            {listOfLetters &&
              listOfLetters.map((letter) => (
                <li
                  className="item"
                  key={letter}
                  onClick={() => chooseLetter(letter)}
                >
                  {letter}
                </li>
              ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default SelectLetter;
