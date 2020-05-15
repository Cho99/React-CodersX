import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './TabMenu.css';
import TabMenu from './components/TabMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
       <TabMenu/>
      </div>
    );
  }
}

export default App;
