import React, { Component } from 'react';
import get from '../config/Get.js';
import Url from '../config/url';

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
      var formData = new FormData();
      formData.append("email",this.state.user);
      formData.append("password",this.state.password);

      get(Url.login, formData).then(function(res){
        if(!res.error){
          localStorage.setItem("case_email", res.user.email);
          localStorage.setItem("case_token", res.token);
          location.reload();
        }
      });
      event.preventDefault();
    }
   render(){
     return(
       <div className="login" >
         <div className="login-screen">
            <div className="app-title">
              <h4>vSpace</h4>
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
