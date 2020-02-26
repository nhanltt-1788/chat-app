import React, { Component } from 'react';

import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import Avatar from '../../images/avatar.jpeg';
import {
  ChatWindow,
  OnlineUserList,
  ChatFrame,
  UserInfo,
  UserDetailInfo,
  UserAvatar,
  UserStatus,
  OnlineList,
  OnlineStatus,
} from './styles';
export class index extends Component {

  render() {
    const {
      user,
      userOnlineList,
      messages,
      typing,
      sendNewMessage,
      handleMessageInputTyping,
    } = this.props;

    return (
      <ChatWindow>
        <OnlineUserList>
          <UserInfo>
            <UserAvatar>
              <img src={Avatar} alt="User Avatar" />
            </UserAvatar>
            <UserDetailInfo>
              <span className="user-name">{user.userName}</span>
              <UserStatus>
                <OnlineStatus />
                <span>Online</span>
              </UserStatus>
            </UserDetailInfo>
          </UserInfo>
          <OnlineList>
            <h3 className="title">Online List</h3>
            <h3 className="title">Online List commit 1</h3>
            <h3 className="title">Online List commit 2</h3>
            <ul className="user">
                {userOnlineList.map(item =>
                  <li key={item.id}>
                    <OnlineStatus />
                    <span>{item.userName}</span>
                  </li>
                )}
              </ul>
          </OnlineList>
        </OnlineUserList>
        <ChatFrame>
          <MessageList user={user} messages={messages} typing={typing}/>
          <MessageInput sendMessage={sendNewMessage} handleMessageInputTyping={handleMessageInputTyping} />
        </ChatFrame>
      </ChatWindow>
    )
  }
}

export default index
