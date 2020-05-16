import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Notification from'./components/Notification';

class App extends Component {
  
  render() {
    const hasUnread = {hasUnread: true};
    return (
      <div className="App">
        <Notification hasUnread={hasUnread}/>
      </div>
    );
  }
}

export default App;
