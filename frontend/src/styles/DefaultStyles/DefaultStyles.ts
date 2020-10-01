import styled from "styled-components";
const img = require('../../Assets/predio.jpg')
export const PageContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 60px);
  background-color: #fafafa;
`;

export const BackGround = styled.div`
  width: 100%;
  display: flex;
  height: 20vh;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;`;
