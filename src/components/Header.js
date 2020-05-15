import React, { Component } from 'react';

class Header extends Component {
    render() {  
        return (
            <div className="Header">
                <div className="header-back">
                  <a href="#">
                    <img src="https://cdn.glitch.com/b12e1493-3bfe-4485-9985-d765db802d4a%2Fleft-arrow.png?v=1589434614429" ></img>
                    <span className="taitle">Go Back</span>
                  </a>
                </div>
                <div className="logo">
                  <img src="https://cdn.glitch.com/b12e1493-3bfe-4485-9985-d765db802d4a%2Flogo%40256.png?v=1589419943485"></img>  
                </div>
                <div className="sign-up">
                  <a href="#">Sign up</a>
                </div>
            </div>
        );
    }
}

export default Header