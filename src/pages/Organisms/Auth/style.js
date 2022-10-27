import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageTitle = styled.p`
  font-size: 2em;
  margin: 10px auto;
`;
export const UserEmail = styled.input`
  border-radius: 5px;
  width: 500px;
  height: 50px;
  margin: 10px auto;
  padding: 5px;
  font-size: 20px;
  &:focus {
    outline: none;
  }
  border-color: ${props => `${props.isValid ? null : 'red'}`};
  box-shadow: ${props => `${props.isValid ? null : '0px 0px 2px 1px red'}`};
  @media (max-width: 576px) {
    width: 80vw;
  }
`;
export const UserPassword = styled.input`
  border-radius: 5px;
  width: 500px;
  height: 50px;
  margin: 10px auto;
  padding: 5px;
  font-size: 20px;
  &:focus {
    outline: none;
  }
  border-color: ${props => `${props.isValid ? null : 'red'}`};
  box-shadow: ${props => `${props.isValid ? null : '0px 0px 2px 1px red'}`};
  @media (max-width: 576px) {
    width: 80vw;
  }
`;

export const SignInBtn = styled.button`
  border-radius: 5px;
  width: 500px;
  height: 50px;
  margin: 10px auto;
  padding: 5px;
  font-size: 20px;
  color: white;
  background-color: black;
  &:hover {
    color: black;
    background-color: lightgray;
  }
  @media (max-width: 576px) {
    width: 80vw;
  }
`;

export const Link = styled.span`
  color: blue;
  font-size: 1.3em;
`;
