import React, { Component } from 'react';
import UserInfo from '../UserInfo';
class RightBar extends Component{
  render(){
      return(
        <div id="right-bar">
           <button type="button" className="button-style-right">
              <div className="fa fa-plus"></div>
           </button>
           <UserInfo info={this.props.info} />
           <button type="button" className="button-style-right">
               <div className="fa fa-info" ></div>
           </button>
           <a href="#" data="popup1">
              <button type="button" className="button-style-right">
                <div className="fa fa-bell-o"></div>
              </button>
           </a>
        </div>
      );
  }
}

export default RightBar;
