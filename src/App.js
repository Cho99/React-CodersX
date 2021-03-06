import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Header.css';
import './LoginForm.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
           <Header/>
           <LoginForm email="abc@gmail.com"/>
        </div> 
      </div>
    );
  }
}

export default App;
