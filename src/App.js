import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './TabMenu.css';
import TabMenu from './components/TabMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
       <TabMenu items={
            [
              {className: 'Home active' ,icon: 'https://cdn.glitch.com/8c389762-2f82-439a-82ac-d8ba588da565%2Fhome.png?v=1589464219359', label:'HOME'},
              {className: 'Deals' ,icon: 'https://cdn.glitch.com/8c389762-2f82-439a-82ac-d8ba588da565%2Flove-and-romance.png?v=1589500891207', label:'DEALS'},
              {className: 'Upload' ,icon: 'https://cdn.glitch.com/8c389762-2f82-439a-82ac-d8ba588da565%2Fmultimedia.png?v=1589464214079', label:'UPLOAD'},
              {className: 'Work' ,icon: 'https://cdn.glitch.com/8c389762-2f82-439a-82ac-d8ba588da565%2Ffood-and-restaurant.png?v=1589464236041', label:'WORK'},
              {className: 'Setting' ,icon: 'https://cdn.glitch.com/8c389762-2f82-439a-82ac-d8ba588da565%2Finterface.png?v=1589464285191', label:'SETTING'},
              
            ]
        }/>
      </div>
    );
  }
}

export default App;
