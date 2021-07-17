import styled from 'styled-components';
export const Toggle = styled.input`
  width: 40px;
  position: relative;
  appearance: none;
  background: #c6c6c6;
  height: 20px;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  @media screen and (max-width: 800px) {
    width: 43px;
    height: 20px;
    margin-top: 0px;
    // position: absolute;
    // top: 0;
    // left: 0;
  }

  :checked {
    background: #35da92;
  }
  :before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    top: 2px;
    left: 3px;
    background: #fff;
    /* transform: scale(1.1); */
    box-shadow: 0 2px 5px rgba(0, 0, 0.2);
    transition: 0.5s;
    @media screen and (max-width: 800px) {
      top: 0;
      width: 20px;
      height: 20px;
    }
  }
  :checked:before {
    left: 22px;
    @media screen and (max-width: 800px) {
      left: 25px;
    }
  }
`;
