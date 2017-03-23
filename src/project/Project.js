import React, { Component } from 'react';
import LeftBar from '../nav/LeftBar';
import RightBar from '../nav/RightBar';
import get from '../config/Get.js';
import '../projectplan/App.css';
import './Project.css';

class Project extends Component {
  constructor(props){
    super(props);
    this.state = {...props};
    this.callProjectList("");
  }
  callProjectList(search){
    var that = this;
    this.props.formData.append("search",search);
    get(this.props.urlProject,this.props.formData).then(function(pl){
      that.setState({projectList:pl.data});
    });
  }
  handleSelectProject(e){
    localStorage.setItem("project_sid", e.currentTarget.dataset.id);
    location.reload();
  }
  render(){
    var projectList = this.state.projectList.map((item,i)=>{
      return (
         <div className="section-item" key={i}>
          <span className="link section-tile color-2-0" onClick={this.handleSelectProject} data-id={item.sid}>
            <span className="tile-details">
              <span  dir="auto" className="tile-details">
                <div title={item.contract} className="tile-details-name">{item.contract}</div>
                <div ><small title={item.name}>{item.name}</small></div>
              </span>
            </span>
          </span>
        </div>
      )
    });
    return(
      <div>
        <div>
          <div className="color-7-0" id="header">
            <div id="nav-bar">
            <LeftBar />
            <RightBar info={this.props.info} />
            </div>
          </div>
          <div id="vspace-container">
              <div className="vspace-wrapper">
                  <div className="section-project">
                      <div className="section-header">
                          <div className="boards-page-board-section-header-icon"><span className="icon-lg icon-member"></span></div>
                          <h3 className="section-header-name">In Process ({this.state.projectList.length})</h3>
                      </div>
                      <div className="section-list">
                        {projectList}
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Project;
