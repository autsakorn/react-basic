import React, { Component } from 'react';
import Card from './Card';
import InputNew from './InputNew';

class Lists extends Component {
  constructor(props) {
     super(props);
     console.log('Lists this.props',this.props);
     this.state = {header:this.props.header,case:this.props.item,statusAdding:this.props.item.status, status:this.props.status, sid:this.props.sid}
     this.onAddNew = this.onAddNew.bind(this);
     this.onAdding = this.onAdding.bind(this);
     this.onEdit = this.onEdit.bind(this);
     this.onEditChange = this.onEditChange.bind(this);
     this.onDelete = this.onDelete.bind(this);
  }
  onAddNew(data){
    this.props.onAddNew(this.state.sid, data);
  }
  onAdding(sid){
    this.props.onAdding(sid);
    this.render();
  }
  onEdit(sSid){
      this.props.onEdit(this.state.sid, sSid);
  }
  onEditChange(sid, value){
    this.props.onEditChange(this.state.sid, sid, value);
  }
  onDelete(sid){
    this.props.onDelete(this.state.sid, sid);
  }
  render(){
    var casetype = [];
    this.state.case.forEach((item) => {
      casetype.push(<Card case={item} key={item.sid} onEdit={this.onEdit} onEditChange={this.onEditChange} onDelete={this.onDelete} />);
    });
    return (
      <div className="lists" >
        <header>{this.props.header}</header>
        {casetype}
        <InputNew onAddNew={this.onAddNew} toggleTextarea={this.props.status} onAdding={this.onAdding} sid={this.props.sid} statusAdding={this.props.status} initialValue={""} />
      </div>
    );
  }
}
export default Lists;
