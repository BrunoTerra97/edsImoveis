import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  box-shadow: 1px 1px 5px grey;
  margin-bottom: 5px;
  background-color: #f0f0f0;
  
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  min-width: 100px;
  height: 50px;
  margin-right: 10px;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  color: rgba(50, 80, 200, 1);
`;