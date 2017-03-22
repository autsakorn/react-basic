import React, { Component } from 'react';

 class FormLogin extends Component{
   constructor(props){
     super(props)
     this.state = {...props};
   }
   render(){
     return(
       <div className="login">
         <div className="login-screen">
            <div className="app-title">
              <h3>vSpace</h3>
              <div className="control-group">
              <input type="text" className="Username" placeholder="Username"/>
              </div>
              <div className="control-group">
              <input type="password" className="Password" placeholder="Password"/>
              </div>
              <button className="btn btn-primary btn-large btn-block">Login</button>
            </div>
         </div>
       </div>
     )
   }
 }
 export default FormLogin;
