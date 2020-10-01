import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
  background-color: #2F4F4F;
  
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
  color: white;
`;