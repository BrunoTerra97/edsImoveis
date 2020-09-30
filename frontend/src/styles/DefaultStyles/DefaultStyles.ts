import styled from "styled-components";
const img = require('../../Assets/predio.jpg')
export const PageContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 60px);
  background-color: #fafafa;
  background-image: url(${img});
`;
