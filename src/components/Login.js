import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        error: false
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
      const { history } = this.props;
      if(this.state.username === 'username' && this.state.password === 'password'){
        this.setState({ error : false});
        localStorage.setItem('loggedIn', true);
        history.push('/');
      }else{
        this.setState({ error : true});
      }
    }

    render() {
      const error = this.state.error ? 'Invalid username or password' : null;
      return (
        <div className="login">
          <h3>Login</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input type="text" value={this.state.value} onChange={this.handleUsernameChange} />
            </label>
            <br />
            <br />
            <label>
              Password:
              <input type="password" value={this.state.value} onChange={this.handlePasswordChange} />
            </label>
            <br />
            <br />
            <input type="submit" value="Submit" />
            <div className="error">
              {error}
            </div>

          </form>
        </div>


      );
    }
}


export default Login;
