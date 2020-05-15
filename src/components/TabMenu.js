import React, { Component } from 'react';

class TabMenu extends Component {
  render() {
    // console.log(this.props.items);
    const items = this.props.items.map(x =>                           
       <div key={x.index} className={x.className}>
            <img src={x.icon}></img>
            <span>{x.label}</span>
      </div> 
    ); 
                                       console.log(items);
    return (
      <div className="TabMenu">
        <div className="Menu">
          {items}
        </div>
      </div>
    );
  }
}

export default  TabMenu;