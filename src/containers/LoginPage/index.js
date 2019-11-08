import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import _isEmpty from 'lodash/isEmpty';

import validate from './validate';
import {
  LoginPageWrapper,
  LoginForm,
  InputWrapper,
  PageTitle,
  LoginButton
} from './styles.js';

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      errors: {},
      loginErr: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
  }

  componentDidMount() {
    this.socket = io('localhost:8080');
    this.socket.on('loginSuccess', (response) => {
      this.handleLoginSuccess(response);
    });
    this.socket.on('loginFail',(error) => {this.setState({ loginErr: error })});
    console.log('componentDidMount');
  }

  handleInputChange(name, e) {
    this.setState({
      [name]: e.target.value
    });
  }

  handleLoginSuccess(data) {
    this.props.handleUpdateUserAndOnlineUserList(data);
    this.props.history.push("/home");
  }

  handleLogin() {
    const { userName, password } = this.state;
    const user = {
      userName: userName,
      password: password,
    }
    const errors = validate({ userName, password });

    if(_isEmpty(errors)) {
      this.setState({
        errors: {},
      });
      this.socket.emit('login', user);
    }
    else {
      this.setState({
        errors: errors,
      });
    }
    
  }

  render() {
    const { userName, password, errors, loginErr } = this.state;

    return (
      <LoginPageWrapper>
        <LoginForm className="login_form">
          <PageTitle>Login</PageTitle>
          <InputWrapper>
            {
              (loginErr) && <p className="error">{loginErr}</p>
            }
            <label htmlFor="user-name">User Name: </label>
            <input
              id="user-name"
              type="text"
              placeholder="User Name"
              value={userName}
              onChange={(e) => this.handleInputChange('userName', e)}
            />
            {
              errors.userNameBlank && <p className="error">{errors.userNameBlank}</p>
            }
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => this.handleInputChange('password', e)}
            />
            {
              errors.passwordBlank && <p className="error">{errors.passwordBlank}</p>
            }
          </InputWrapper>
          <p>
            <span>If you don't have account, you can </span>
            <Link to='/register'>Register</Link>
          </p>
          <LoginButton onClick={this.handleLogin}>Login</LoginButton>
        </LoginForm>
      </LoginPageWrapper>
    )
  }
}

export default LoginPage
