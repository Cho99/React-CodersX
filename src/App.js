import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RecommnededFriends from "./components/RecommendedFriends";
import "./RecommendedFriends.css";

class App extends Component {
  constructor() {
    super();
    this.friends = [
      {
        avatar:
          "https://cdn.glitch.com/c6e3ccf2-1998-43a2-a093-ffec7b705b94%2Fimages.jpg?v=1589542450577",
        name: "Dog99"
      },
      {
        avatar:
          "https://cdn.glitch.com/c6e3ccf2-1998-43a2-a093-ffec7b705b94%2Fimages.jpg?v=1589542450577",
        name: "Chanh99"
      },
      {
        avatar:
          "https://cdn.glitch.com/c6e3ccf2-1998-43a2-a093-ffec7b705b94%2Fimages.jpg?v=1589542450577",
        name: "Quat99"
      }
    ];
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="recommend-friends">
            <div className="header">
              <span className="recommend">Gợi ý cho bạn</span>
              <a href="#" className="all">
                Xem tất cả
              </a>
            </div>
              <RecommnededFriends  friends={this.friends} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
