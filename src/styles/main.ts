import styled from "styled-components";

export const UlRegs = styled.ul`
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 10%;

  h2 {
    color: orange;
  }

  .divTitleUlRegs {
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
  }

  .divRegDataItem {
    display: flex;
    width: 100%;
  }

  .h3RegDataItem {
    background-color: black;
    color: orange;
    width: 50%;
    text-align: center;
  }

  .buttonAddNew {
    background-color: black;
    color: orange;
    width: 50%;
    text-align: center;
  }

  li {
    display: flex;
    width: 100%;
    margin: 2px 0;
  }

  p {
    width: 50%;
    text-align: center;
    border: 1pt solid black;
  }

  button {
    width: 50%;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color: orange;
    transition: 0.3s;
    color: black;
  }
`;

export const FormAdd = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 5px;
  justify-content: center;
  align-items: center;

  .divLabelAndInput {
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: space-between;
    width: 80%;

    label {
      width: 50%;
      text-align: right;
    }
  }

  input,
  select,
  textarea {
    width: 50%;
  }

  .divFormFields {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border: 1pt solid black;
    border-radius: 8px;
    padding: 8px;
    background-color: #8080802b;
    overflow-y: scroll;
    max-height: 40vh;
  }

  .divIndividualItemSale {
    border: 1pt solid black;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .divButtonsControlForms {
    width: 100px;
    display: flex;
    gap: 5px;
    position: sticky;
    top: 10px;

    button {
      border: none;
      padding: 5px;
    }

    .buttonRed {
      width: 100%;
      background-color: red;
      color: white;
    }

    .buttonGreen {
      width: 100%;
      background-color: green;
      color: white;
    }
  }

  .divCloseButton {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .pError {
    color: red;
  }

  button {
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    transition: 0.3s;
    transform: scale(1.1);
  }
`;

export const FormEdit = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 5px;
  justify-content: center;
  align-items: center;

  .divLabelAndInput {
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: space-between;
    width: 80%;
  }

  input,
  select {
    width: 54%;
  }

  .divCloseButton {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .pError {
    color: red;
  }

  button {
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    transition: 0.3s;
    transform: scale(1.1);
  }
`;
