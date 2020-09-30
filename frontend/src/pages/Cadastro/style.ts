import styled from "styled-components";


export const FormContainer = styled.div`
  display: grid;
  width: 50%;
  margin: 20px auto;
  border-radius: 10px;
  padding: 10px 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  align-items: center;
  background-color: #e0e0e0;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const CustomText = styled.div`
  font-size: 20px;
  font-family: Roboto;
  font-weight: 10;
`;