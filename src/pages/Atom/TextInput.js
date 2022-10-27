import styled from 'styled-components';

export const TextInput = styled.input`
  border-radius: 5px;
  width: 500px;
  height: 45px;
  margin: 10px 20px 10px 0px;
  padding: 5px;
  font-size: 20px;
  &:focus {
    outline: none;
  }
  border-color: ${props => `${props.isValid ? null : 'red'}`};
  box-shadow: ${props => `${props.isValid ? null : '0px 0px 2px 1px red'}`};
  @media (max-width: 576px) {
    width: 50vw;
  }
`;
