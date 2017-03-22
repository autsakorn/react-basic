import React, { Component } from 'react';
import Lists from './Lists';
import HeaderProject from './HeaderProject';
import NewTypeCase from './NewTypeCase';

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {casetype:this.props.casetype};
    this.onAddNew = this.onAddNew.bind(this);
    this.onAdding = this.onAdding.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditChange = this.onEditChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleAddColumn = this.handleAddColumn.bind(this);
  }
  onAddNew(sid, data){
    this.props.onAddNew(sid, data);
  }
  onAdding(sid){
    this.props.onAdding(sid);
  }
  onEdit(fSid, sSid){
    this.props.onEdit(fSid,sSid);
  }
  onEditChange(fSid, sSid, value){
    this.props.onEditChange(fSid, sSid, value);
  }
  onDelete(fSid, sSid){
    this.props.onDelete(fSid, sSid);
  }
  handleAddColumn(data){
    this.props.onAddColumn(data);
  }
  render() {
    var lists = [];
    var that = this;
    this.props.casetype.forEach((item,k) => {
      lists.push(<Lists key={k} sid={item.sid} header={item.type} item={item.case} onAdding={that.onAdding} status={item.status} onEdit={this.onEdit} onEditChange={this.onEditChange} onDelete={this.onDelete} onAddNew={this.onAddNew} />);
    });
    return (
      <div>
        <HeaderProject projectInfo={this.props.projectInfo} />
        <div className="cont">
          {lists}
          <NewTypeCase onAddColumn={this.handleAddColumn} listType={this.props.listType}/>
        </div>
      </div>
    );
  }
}
export default Column;
