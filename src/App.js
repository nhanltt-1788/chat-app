import React from 'react';
import io from 'socket.io-client';
import { withRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import LoginPage from './containers/LoginPage/index';
import HomePage from './containers/HomePage/index';
import RegisterPage from './containers/RegisterPage/index';
import NotFoundPage from './containers/NotFoundPage/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      userList: [],
      user: {},
      userOnlineList: [],
      typing: false,
      memberList: [],
    }
    this.socket = null;
    this.sendNewMessage = this.sendNewMessage.bind(this);
    this.handleMessageInputTyping = this.handleMessageInputTyping.bind(this);
    this.handleUpdateUserAndOnlineUserList = this.handleUpdateUserAndOnlineUserList.bind(this);
    this.getMessageList = this.getMessageList.bind(this);
  }

  componentDidMount() {
    this.socket = io('localhost:8080');
    this.socket.on('newMessage', (response) => {this.newMessage(response)});
    this.socket.on('updateUserList', (response) => {this.setState({userOnlineList: response})});
    this.socket.on('addNewMessageSuccess', () => {this.getMessageList()})
    this.getMessageList();
  }

  getMessageList() {
    this.socket.emit('getMessageList');
    this.socket.on('getMessageList', (response) => {
      this.setState({
        messages: response,
      });
    });
  }

  sendNewMessage(mess) {
    const { user } = this.state;
    const message = {
      userId: user.id,
      userName: user.userName,
      message: mess,
    }

    if(mess) {
      this.socket.emit("newMessage", message);
    }
  }

  handleUpdateUserAndOnlineUserList(data) {
    this.setState({
      user: data.user,
      userOnlineList: data.onlineList,
    });
  }

  handleMessageInputTyping(isTyping) {
    this.setState({
      typing: isTyping,
    });
  }

  render() {
    const {
      user,
      messages,
      userOnlineList,
      typing,
    } = this.state;
    const onlineList = userOnlineList.filter(item => item.id !== user.id);

    return (
      <>
        <Switch>
          <Route exact path="/" render={(props) => (
            <LoginPage {...props} handleUpdateUserAndOnlineUserList={this.handleUpdateUserAndOnlineUserList} />
          )} />
          <Route exact path="/register" render={(props) => (
            <RegisterPage {...props} />
          )} />
          <Route exact path="/home" render={(props) => (
            <HomePage
              user={user}
              userOnlineList={onlineList}
              messages={messages}
              typing={typing}
              sendNewMessage={this.sendNewMessage}
              handleMessageInputTyping={this.handleMessageInputTyping}
              {...props}
            />
          )} />
          <Route component={NotFoundPage} />
        </Switch>
    </>
    )
  }
}


export default withRouter(App);
