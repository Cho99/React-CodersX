import React, { Component } from "react";
var classNames = require('classnames');

class SearchBox extends Component {
  render() {
    const isFocused = this.props.isFocused
    return (
      <div className="SearchBox ">
        <div className="container">
          <input id="searchBox" placeholder="Type something ssearch ..."></input>
          <img className={classNames({isFocused: isFocused})} src="https://cdn.glitch.com/f9527542-64ad-40d6-aaa2-1c78688dec7e%2Ftools-and-utensils.png?v=1589615338628"></img>
        </div>
      </div>
    );
  }
}

export default SearchBox;
