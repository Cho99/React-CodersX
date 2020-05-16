import React, { Component } from "react";
import FollowFriendListItem from './FollowFriendListItem.js';

class RecommnededFriends extends Component {
 
  render() {
    return (
      <div className="RecommendFriends">
          {
            this.props.friends.map((user, index) => <FollowFriendListItem key={index} users={user}/>)
          }
      </div>
    );
  }
}

export default RecommnededFriends;
