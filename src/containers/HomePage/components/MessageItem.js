import React, { Component } from 'react';
import { MessageItemWrapper } from '../styles';

export class MessageItem extends Component {
  render() {
    const { currentUser, message } = this.props;

    return (
      <MessageItemWrapper className={currentUser ? "message right appeared": "message left appeared"}>
        <div className="avatar"></div>
        <div className="text_wrapper">
          <div className="text">
            <span className="user-name">{!currentUser && message.userName}</span>
            <span>{message.message}</span>
          </div>
        </div>
      </MessageItemWrapper>
    )
  }
}

export default MessageItem
