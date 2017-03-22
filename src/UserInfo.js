import React, { Component } from 'react';
class UserInfo extends Component {
  constructor(props){
    super(props);
    this.state = {info:this.props.info};
  }
  render(){
    return(
      <span className="dropdown ddd">
        <button id="dLabel" role="button" data-toggle="dropdown" className="button-style-right" data-target="#">{this.state.info.name}<span className="caret"></span>
        </button>
        <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
          <li><a href="#">Profile</a></li>
          <li><a href="#">Timeline</a></li>
          <li className="divider"></li>
          <li><a href="#">Sign Out</a></li>
        </ul>
      </span>
    )
  }
}

export default UserInfo;
