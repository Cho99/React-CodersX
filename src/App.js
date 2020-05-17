import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/searchBox";

class App extends Component {
  constructor() {
    super();
    this.state = { isFocused: false, phonePass: false };
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
        let number = value.split("");
        let headPhone = number.slice(0,3).join("");
  
        if(value.length == 10 && headPhone == "090") {
          this.setState({phonePass: true});
        } else {
           this.setState({phonePass: false});
        }
      });
    });
  }
  render() {
    const { isFocused } = this.state;
    const { phonePass } = this.state;
    return (
      <div className="App">
        <SearchBox isFocused={isFocused} phonePass={phonePass} />
      </div>
    );
  }
}

export default App;
