import React, { Component } from 'react';

 class FormLogin extends Component{
   constructor(props){
     super(props)
     this.state = {user: "",password: ""};
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserChange(event) {
      this.setState({user: event.target.value});
    }
    handlePasswordChange(event) {
      this.setState({password: event.target.value});
    }

    handleSubmit(event) {
      alert('Username:' + this.state.user);
      event.preventDefault();
    }

   render(){
     return(
       <div className="login" >
         <div className="login-screen">
            <div className="app-title">
              <h2>vSpace</h2>
              <form onSubmit={this.handleSubmit}>
              <div className="control-group">
              <input type="text" className="Username" placeholder="Username" value={this.state.User} onChange={this.handleUserChange} />
              </div>
              <div className="control-group">
              <input type="password" className="Password" placeholder="Password" value={this.state.Password} onChange={this.handlePasswordChange}/>
              </div>
              <button className="login-btn btn-primary btn-large btn-block" type="submit" value="Submit" >Login</button>
              </form>
            </div>
         </div>
       </div>
     )
   }
 }
 export default FormLogin;
