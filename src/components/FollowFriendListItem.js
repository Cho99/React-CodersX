import React, { Component } from "react";

class FollowFriendListItem extends Component {
  render() {
      console.log(this.props.users)
    return (
    
      <div className="FollowFriendListItem">
        <div className="info-z">
          <img src={this.props.users.avatar}></img>
          <div className="info">
            <div className="name">{this.props.users.name}</div>
            <span>Gợi ý cho bạn</span>
          </div>
        </div>
        <a href="#">Theo dõi</a>
      </div>
    );
  }
}

export default FollowFriendListItem;
