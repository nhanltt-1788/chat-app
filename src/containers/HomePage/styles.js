import styled from 'styled-components';

export const ChatWindow = styled.div`
  display: flex;
`;

export const OnlineUserList = styled.div`
  width: 280px;
  border-right: 1px solid #f0f0f0;
`;

export const ChatFrame = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: calc(100% - 280px);
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #f0f0f0;
`;

export const UserDetailInfo = styled.div`
  flex: 1;
  min-width: 0;
  margin-left: 20px;

  & > .user-name {
    display: block;
    margin-bottom: 4px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    
  }
`;

export const UserAvatar = styled.div`
  width: 45px;
  height: 45px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: top;
  }
`;

export const UserStatus = styled.div`
  font-size: 12px;
`;

export const OnlineList = styled.div`
  padding: 20px;

  .title {
    font-size: 16px;
    font-weight: 400;
    margin-top: 0;
  }

  .user {
    padding: 0;

    & > li {
      list-style: none;
      margin-bottom: 16px;
      font-size: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;

export const OnlineStatus = styled.span`
  content: '';
    display: inline-block;
    vertical-align: middle;
    width: 8px;
    height: 8px;
    background-color: #4cb54d;
    border-radius: 50%;
    margin-right: 8px;
`;

export const MessagesWrapper = styled.ul`
  height: calc(100vh - 94px);
  overflow-y: auto;
  position: relative;
  list-style: none;
  padding: 20px 10px 0 10px;
  margin: 0;

  .message {
    clear: both;
    overflow: hidden;
    margin-bottom: 20px;
    transition: all 0.5s linear;
    opacity: 0;

    &.dots-jump {
      opacity: 1;
    }
  }
`;

export const MessageInputWrapper = styled.div`
  display: flex;
  padding: 20px 20px;

  .message_input_wrapper {
    display: inline-block;
    height: 50px;
    border-radius: 25px;
    border: 1px solid #bcbdc0;
    width: calc(100% - 160px);
    position: relative;
    padding: 0 20px;

    .message_input {
      border: none;
      height: 100%;
      box-sizing: border-box;
      width: calc(100% - 40px);
      position: absolute;
      outline-width: 0;
      color: gray;
    }
  }

  .send_message {
    display: inline-block;
    width: 140px;
    height: 50px;
    border-radius: 50px;
    background-color: #a3d063;
    border: 2px solid #a3d063;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s linear;
    text-align: center;
    margin-left: 16px
  }

  .send_message {
    :hover {
      color: #a3d063;
      background-color: #fff;
    }

    .text {
      font-size: 18px;
      font-weight: 300;
      display: inline-block;
      line-height: 48px;
    }
  }
`;

export const MessageItemWrapper = styled.li`
  list-style: none;

  &.left {
    .avatar {
      background-color: #f5886e;
      float: left;
    }

    .text_wrapper {
      background-color: #ffe6cb;
      margin-left: 20px;

      ::after, ::before {
        right: 100%;
        border-right-color: #ffe6cb;
      }
    }

    .text {
      color: #c48843;
    }
  }

  &.right {
    .avatar {
      background-color: #fdbf68;
      float: right;
    }

    .text_wrapper {
      background-color: #c7eafc;
      margin-right: 20px;
      float: right;

      ::after, ::before {
        left: 100%;
        border-left-color: #c7eafc;
      }
    }

    .text {
      color: #45829b;
    }
  }

  &.appeared {
    opacity: 1;
    display: flex;
  }

  &.right {
    &.appeared {
      flex-direction: row-reverse;
    }
  }

  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: inline-block;

    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: inline-block;
    }
  }

  .text_wrapper {
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 6px;
    width: calc(100% - 85px);
    min-width: 100px;
    position: relative;

    ::after, ::before {
      top: 18px;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    ::after {
      border-width: 13px;
      margin-top: 0px;
    }

    ::before {
      border-width: 15px;
      margin-top: -2px;
    }

    .text {
      display: flex;
      font-size: 18px;
      font-weight: 300;
      flex-direction: column;

      .user-name {
        font-weight: 600;
      }
    }
  }
`;