import styled from 'styled-components';

export const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const PageTitle = styled.h1`
  text-align: center;
`;

export const LoginForm = styled.div`
  width: 534px;
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  padding: 40px 63px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(240, 240, 240);
`;

export const InputWrapper = styled.div`
  margin-bottom: 16px;

  & > label {
    display: inline-block;
    margin-bottom: 16px;
  }

  & > input {
    border-width: 1px;
    border-style: solid;
    border-color: rgb(240, 240, 240);
    border-image: initial;
    border-radius: 2px;
    font-size: 13px;
    line-height: 1.3;
    width: 100%;
    position: relative;
    padding: 15px 36px 15px 23px;

    :focus {
      outline: 0;
    }
  }
`;

export const LoginButton = styled.button`
  cursor: pointer;
  width: 100%;
  text-align: center;
  padding: 12px 0;
  font-size: 16px;
  line-height: 21px;
  border-radius: 2px;
  background: #225f8c;
  color: #ffff;
  opacity: .8;
  margin-top: 12px;

  :hover {
    opacity: 1;
  }
`;