import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .test {
    height: 100%;
    margin-top: 50%;
    transform: translateY(-50%);
  }

  .row {
    margin-bottom: 20px;
  }
  .props {
    /* border: 2px solid red; */
    margin-bottom: 0 !important;
    /* height: fit-content !important; */
    height: 40px;
    max-height: fit-content;
    display: grid !important;
    grid-template-columns: 120px 1fr !important;
  }
  .alignv {
    display: flex;
    justify-content: center;
    flex-direction: column !important;
    text-align: center;
  }
  .threebusrtle {
    border: 1px solid black;
    background: white;
    color: black;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    width: 180px;
  }
`;
