import React, { Component } from 'react';
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {item:this.props.case,editing:false,sid:this.props.case.sid,name:this.props.case.subject};
    this.handleEditing = this.handleEditing.bind(this);
    this.handleTxtChange = this.handleTxtChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextareaClose = this.handleTextareaClose.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleEditing(){
    this.props.onEdit(this.state.sid);
  }
  handleTxtChange(e){
    this.setState({name:e.target.value});
    this.props.onEditChange(this.state.sid, e.target.value);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.onEdit(0);
  }
  handleTextareaClose(){
    this.props.onEdit(0);
  }
  handleDelete(){
    if(confirm("Are you sure delete?")){
      this.props.onDelete(this.state.sid);
    }
  }
  dragStart(e) {
    this.dragged = e.currentTarget;
    // console.log(e.currentTarget);
    // e.dataTransfer.effectAllowed = 'move';
    // e.dataTransfer.setData('text/html', this.dragged);
  }
  dragEnd(e) {
    // this.dragged.style.display = 'block';
    // this.dragged.parentNode.removeChild(placeholder);
    console.log(this.dragged.dataset.id);
    // update state
    // var data = this.state.colors;
    // var from = Number(this.dragged.dataset.id);
    // var to = Number(this.over.data.id);
    // if(from < to) to--;
    // data.splice(to, 0, data.splice(from, 1)[0]);
    // this.setState({colors: data});
  }
  dragOver(e) {
    e.preventDefault();
    console.log(e.target);
    // this.dragged.style.display = "none";
    // if(e.target.className === 'placeholder') return;
    // this.over = e.target;
    // e.target.parentNode.insertBefore(placeholder, e.target);
  }
  render(){
    if(this.props.case.status==="Editing"){
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="form">
            <a href="#" className="pull-right" onClick={this.handleTextareaClose}><i className="fa fa-times" aria-hidden="true"></i></a>
            <input className="add-subject" onDismiss={this.handleDismiss} onChange={this.handleTxtChange} value={this.state.name} />
            <div><a href="#"><i className="fa fa-fw fa-user"></i> {(this.state.item.owner_thainame)?this.state.item.owner_thainame:'ยังไม่กำหนด Owner'}</a></div>
            <div><a href="#"><i className="fa fa-fw fa-clock-o"></i> 1 (Man Days)</a></div>
            <div><a href="#" className="margin-left-4px" onClick={this.handleDelete}><i className="fa fa-trash-o" aria-hidden="true"></i> <small>Remove</small></a></div>
          </div>
        </form>
      )
    }else{
      return (
        <article data-id={this.state.sid} draggable="true" onDragStart={this.dragStart.bind(this)} onDragEnd={this.dragEnd.bind(this)} onDragOver={this.dragOver.bind(this)}  className="card" onClick={this.handleEditing} >
          <header >{this.state.item.subject}</header>
          <div className="detail">
            <span><i className="fa fa-fw fa-user"></i> {(this.state.item.owner_thainame)?this.state.item.owner_thainame:'ยังไม่กำหนด Owner'}</span>
            <span className="pull-right"><i className="fa fa-fw fa-clock-o"></i> 1 </span>
          </div>
        </article>
      );
    }
  }
}
export default Card;
