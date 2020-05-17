import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/searchBox";

class App extends Component {
  constructor() {
    super();
    this.state = { isFocused: false };
    this.focus();
  }
  focus() {
    document.addEventListener("DOMContentLoaded", () => {
      const el = document.getElementById("searchBox");
      el.addEventListener("focus", event => {
        this.setState({ isFocused: true});
      });
       el.addEventListener("blur", event => {
        this.setState({ isFocused: false});
      });
    });
  }
  render() {
    const { isFocused } = this.state;
    return (
      <div className="App">
        <SearchBox isFocused = {isFocused}/>
      </div>
    );
  }
}

export default App;
