import styled from "styled-components";


export const FormContainer = styled.div`
  display: grid;
  width: 100%;
  height: 500px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  align-items: center;
  background-color: #e0e0e0;
`;

export const CheckBoxContaier = styled.div`
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