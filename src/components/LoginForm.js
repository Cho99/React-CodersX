import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return(
      <div className="LoginForm">
        <h1>Sign in</h1>
        <div className="formLogin">
          <div className="form-user">
            <label>Username</label>
            <input></input>
          </div>
          <div className="form-password">
            <label>Password</label>
            <input type="password"></input>
          </div>
          <button>Signin to Coders-x</button>
          <div className="keep-signed">
            <input type="checkbox"></input>
            <span>Keep me signed in</span>
          </div>
          <div className="Options">
            <a href="#">Forgot username?</a>
            <a href="#">Forgot password?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm 