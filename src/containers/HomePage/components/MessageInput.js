import React, { Component } from 'react';
import { MessageInputWrapper } from '../styles';

export class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
    this.checkEnter = this.checkEnter.bind(this);
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  checkEnter(e) {
    const { sendMessage } = this.props;

    if (e.keyCode === 13) {
      sendMessage(this.state.message);
      this.props.handleMessageInputTyping(false);
      this.setState({ message: '' });
    }
  }

  handleSendMessage() {
    const { sendMessage } = this.props;

    sendMessage(this.state.message);
    this.props.handleMessageInputTyping(false);
    this.setState({ message: '' });
  }

  handleChangeInput(e) {
    this.setState({ message: e.target.value });
  }

  handleKeyPress() {
    this.props.handleMessageInputTyping(true);
  }

  handleBlur() {
    if(!this.state.message) {
      this.props.handleMessageInputTyping(false);
    }
  }

  render() {
    return (
      <MessageInputWrapper>
        <div className="message_input_wrapper">
          <input
            value={this.state.message}
            onChange={this.handleChangeInput}
            type="text"
            className="message_input"
            placeholder="Type your message here"
            onKeyUp={this.checkEnter}
            onKeyPress={this.handleKeyPress}
            onBlur={this.handleBlur}
          />
        </div>
        <div className="send_message" onClick={this.handleSendMessage} ref="inputMessage" >
          <div className='icon'></div>
          <div className='text'>Send</div>
        </div>
      </MessageInputWrapper>
    )
  }
}

export default MessageInput
