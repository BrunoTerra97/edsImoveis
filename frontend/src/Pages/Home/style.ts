import styled from "styled-components";

export const FormContainer = styled.div`
  display: grid;
  margin: 20px auto;
  border-radius: 10px;
  padding: 10px 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  min-height: 0;
`;

export const ImovelContainer = styled.div`
  padding: 10px;
  width: fit-content;
  border-radius: 10px;
  align-items: flex-start;
  background-color: #e9e9e9;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
`;
export const ImovelDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height:100%;
  `;


export const Title = styled.div`
font-size: 1rem;
font-family: "Roboto", "Helvetica", "Arial", sans-serif;
font-weight: 900;
margin-right: 2px;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.8rem;
  line-height: 1.334;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  align-items:center;
  letter-spacing: 0em;
`;