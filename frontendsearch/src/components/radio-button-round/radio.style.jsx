import styled from 'styled-components';
export const Toggle = styled.input`
  width: 19px;
  position: relative;
  appearance: none;
  background: #c6c6c64e;
  height: 19px;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.075);

  @media screen and (max-width: 800px) {
    width: 20px;
    height: 20px;
    margin-top: 0px;
    // position: absolute;
    // top: 0;
    // left: 0;
  }

  :checked {
    background: #6969d6;
  }
`;
