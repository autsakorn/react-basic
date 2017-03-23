import React, { Component } from 'react';
// import logo from './logo.svg';
import LeftBar from '../nav/LeftBar';
import RightBar from '../nav/RightBar';
import MyApp from './MyApp';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {...props};
  }
  render(){
    return(
      <div>
        <div className="color-5-0">
          <div id="header">
            <div id="nav-bar">
            <LeftBar />
            <RightBar info={this.props.info} />
            </div>
          </div>
          <div id="vspace-container">
            <div className="vspace-wrapper">
              <MyApp casetype={this.state.casetype} projectInfo={this.state.projectInfo} listType={this.state.listType} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
