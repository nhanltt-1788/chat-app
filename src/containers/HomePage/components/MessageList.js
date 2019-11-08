import React, { Component } from 'react';
import MessageItem from './MessageItem';
import { MessagesWrapper } from '../styles';

export class MessageList extends Component {
  render() {
    const { messages, user, typing } = this.props;

    return (
      <MessagesWrapper className="messages clo-md-5">
        {messages.map(item =>
          <MessageItem key={item.id} currentUser={item.userId === user.id ? true : false} user={user} message={item}/>
        )}
        {
          typing && (
            <li className="message left appeared dots-jump">
              <span className="dot dot-1"></span>
              <span className="dot dot-2"></span>
              <span className="dot dot-3"></span>
            </li>
          )
        }
      </MessagesWrapper>
    )
  }
}

export default MessageList
