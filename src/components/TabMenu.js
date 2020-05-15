import React, { Component } from 'react';

class TabMenu extends Component {
  render() {
    return (
      <div className="TabMenu">
        <div className="Menu">
          <div className="Home active">
            <img src="https://cdn.glitch.com/8c389762-2f82-439a-82ac-d8ba588da565%2Fhome.png?v=1589464219359"></img>
            <span>HOME</span>
          </div>
          <div className="Deals">
            <img src="https://cdn.glitch.com/8c389762-2f82-439a-82ac-d8ba588da565%2Flove-and-romance.png?v=1589500891207"></img>
            <span>DEALS</span>
          </div>
          <div className="Upload">
            <img src="https://cdn.glitch.com/8c389762-2f82-439a-82ac-d8ba588da565%2Fmultimedia.png?v=1589464214079"></img>
            <span>UPLOAD</span>
          </div>
          <div className="Work">
            <img src="https://cdn.glitch.com/8c389762-2f82-439a-82ac-d8ba588da565%2Ffood-and-restaurant.png?v=1589464236041"></img>
            <span>WORK</span>
          </div>
          <div className="Setting">
            <img src="https://cdn.glitch.com/8c389762-2f82-439a-82ac-d8ba588da565%2Finterface.png?v=1589464285191"></img>
            <span>SETTINGS</span>
          </div>
        </div>
      </div>
    );
  }
}

export default  TabMenu;