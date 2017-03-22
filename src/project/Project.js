import React, { Component } from 'react';
import LeftBar from '../nav/LeftBar';
import RightBar from '../nav/RightBar';
// import MyApp from './MyApp';
import '../projectplan/App.css';

class Project extends Component {
  render(){
    return(
      <div>
        <div className="color-7-0">
          <div id="header">
            <div id="nav-bar">
            <LeftBar />
            <RightBar info={this.props.info} />
            </div>
          </div>
          <div id="vspace-container">
            <div className="vspace-wrapper">
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Project;
