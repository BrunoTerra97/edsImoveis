import styled from "styled-components";

export const FormContainer = styled.div`
  display: grid;
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

export const ImovelContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 200px;
  min-height: 200px;
  border-radius: 10px;
  align-items: flex-start;
  /* justify-content: flex-start; */
  background-color: #e9e9e9;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;