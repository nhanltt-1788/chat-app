import React, { Component } from 'react';
import io from 'socket.io-client';
import _isEmpty from 'lodash/isEmpty';

import validate from './validate';
import {
  LoginPageWrapper,
  LoginForm,
  InputWrapper,
  PageTitle,
  LoginButton
} from '../LoginPage/styles';

export class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      confirmPassword: '',
      errors: {},
      registerErr: '',
    }
    this.socket = null;
    this.handleInputChange =  this.handleInputChange.bind(this);
    this.register = this.register.bind(this);
    this.handleRegisterSuccess = this.handleRegisterSuccess.bind(this);
  }

  componentDidMount() {
    this.socket = io('localhost:8080');
    this.socket.on('registerSuccess', this.handleRegisterSuccess);
    this.socket.on('registerError', (registerErr) => {this.setState({ registerErr: registerErr })});
  }

  handleInputChange(name, e) {
    this.setState({
      [name]: e.target.value
    });
  }

  register() {
    const { userName, password, confirmPassword } = this.state;
    const user = {
      userName: userName,
      password: password,
    }
    const errors = validate({ userName, password, confirmPassword });

    if(_isEmpty(errors)) {
      this.setState({
        errors: {},
      });
      this.socket.emit('register', user);
    }
    else {
      this.setState({
        errors: errors,
      });
    }
  }

  handleRegisterSuccess() {
    this.props.history.push("/");
  }

  render() {
    const {
      userName,
      password,
      confirmPassword,
      errors,
      registerErr,
    } = this.state;

    return (
      <LoginPageWrapper>
        <LoginForm className="login_form">
          <PageTitle>Register</PageTitle>
          <InputWrapper>
            <label htmlFor="user-name">User Name: </label>
            <input
              id="user-name"
              type="text"
              placeholder="User Name"
              value={userName}
              onChange={(e) => this.handleInputChange('userName', e)}
            />
            {
              (errors.userNameBlank || registerErr) && <p className="error">{errors.userNameBlank || registerErr}</p>
            }
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => this.handleInputChange('password', e)}
            />
            {
              (errors.passwordBlank || errors.invalidPassword)
                && <p className="error">{errors.passwordBlank || errors.invalidPassword}</p>
            }
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="password">Confirm Password: </label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => this.handleInputChange('confirmPassword', e)}
            />
            {
              (errors.confirmPassword || errors.confirmPasswordBlank)
                && <p className="error">{errors.confirmPassword || errors.confirmPasswordBlank}</p>
            }
          </InputWrapper>
          <LoginButton onClick={this.register}>Register</LoginButton>
        </LoginForm>
      </LoginPageWrapper>
    )
  }
}

export default RegisterPage
