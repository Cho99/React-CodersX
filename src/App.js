import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/searchBox";

class App extends Component {
  constructor() {
    super();
    this.state = { isFocused: false, limitWord: false };
    this.focus();
  }
  focus() {
    document.addEventListener("DOMContentLoaded", () => {
      const el = document.getElementById("searchBox");
      el.addEventListener("focus", event => {
        this.setState({ isFocused: true });
      });
      el.addEventListener("blur", event => {
        this.setState({ isFocused: false });
      });
      el.addEventListener("keyup", event => {
        let value = el.value;
        if (value.length > 10) {
          this.setState({ limitWord: true });
        } else {
          this.setState({ limitWord: false });
        }
      });
    });
  }
  render() {
    const { isFocused } = this.state;
    const { limitWord } = this.state;
    return (
      <div className="App">
        <SearchBox isFocused={isFocused} limitWord={limitWord} />
      </div>
    );
  }
}

export default App;
