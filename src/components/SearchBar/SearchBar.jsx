import React, { Component } from "react";

//import SearchBar.css
import "./SearchBar.css"

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    }
    this.search = this.search.bind(this);
    this.handleTermChang = this.handleTermChang.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

  }
  search() {
    this.props.onSearch(this.state.term)
  }

  handleTermChang(e) {
    this.setState({ term: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.search();
    }
  }


  render() {
    return <div className="SearchBar">
      <input onChange={this.handleTermChang} onKeyUp={this.handleKeyPress} placeholder="Enter A Song, Album, or Artist" />
      <button className="SearchButton" onClick={this.search}>SEARCH</button>
    </div>
  }
}

export default SearchBar;
