import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };

      this.handleUsernameChange = this.handleChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({username: event.target.value});
    }

    handleUsernameChange(e) {
      this.setState({username: e.targer.value});
    }

    handlePasswordChange(e){
      this.setState({password: e.target.value});
    }
    handleSubmit(event) {
      event.preventDefault();
      if(this.state.username === 'username' && this.state.password === 'password'){
        console.log('success');
      }else{
        console.log('invalid username or password');
      }
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" value={this.state.value} onChange={this.handleUsernameChange} />
          </label>
          <label>
            Password:
            <input type="password" value={this.state.value} onChange={this.handlePasswordChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}


export default Login;
