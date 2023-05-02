import styled from "styled-components";

const blue = "#0077B6";
const blueHover = "#023E8A";
const blueLight = "#66B2FF";
const gray = "#F2F2F2";
const boxShadow = "0 2px 2px rgba(0, 0, 0, 0.2)";

export const UlRegs = styled.ul`
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 10%;

  @media (min-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 1023px) {
    width: 100%;
  }

  h2 {
    color: white;
  }

  .divTitleUlRegs {
    width: 100%;
    background-color: ${blueLight};
    display: flex;
    justify-content: center;
    padding: 10px 0;
    box-shadow: ${boxShadow};
  }

  .divRegDataItem {
    display: flex;
    width: 100%;

    @media (max-width: 380px) {
      width: 100%;
      font-size: 6pt;
      padding-top: 10px;
    }
  }

  .h3RegDataItem {
    background-color: ${blue};
    color: ${gray};
    width: 50%;
    text-align: center;
    padding-top: 5px;
  }

  .buttonAddNew {
    background-color: ${blue};
    color: ${gray};
    width: 50%;
    text-align: center;
  }

  li {
    display: flex;
    width: 100%;
    margin: 2px 0;
    box-shadow: ${boxShadow};
    transition: 0.1s;

    :hover{
      border-top: 3pt solid ${blueLight};
      border-bottom: 3pt solid ${blueLight};
      transition: 0.1s;
    }
  }

  p {
    width: 50%;
    text-align: center;
    border: 1pt solid black;
    background-color: ${gray};
    margin: 0;
    padding: 10px;

    @media (max-width: 380px) {
      width: 100%;
      font-size: 6pt;
    }

  }

  button {
    width: 50%;
    cursor: pointer;
    transition: 0.3s;
    background-color: ${gray};
    border: none;
    color: ${blue};
    padding: 10px;
  }

  button:hover {
    background-color: ${blueHover};
    color: ${gray};
    transition: 0.3s;
  }
`;

export const FormAdd = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-weight: bold;

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

  input,select{
    height: 25px;
    border-radius: 8px;
    outline: none;
    border: none;
    box-shadow: 0 0 4px 2px rgba(0, 90, 255, 0.4); 
    padding: 5px;
  }

  select{
    transition: 0.3s;
    :hover{
      cursor: pointer;
      background-color: rgba(0, 90, 255, 0.4);
      transition: 0.3s;
    }
  }

  input:focus{
    outline: none; 
    box-shadow: 0 0 4px 2px black; 
  }

  textarea {
    height: 200px;
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
    padding: 5px 10px 0px 0px;

    button{
      background-color: red;
      color: white;
      font-weight: bold;
      padding: 5px 15px;
      border: none;
      border-radius: 8px;
      box-shadow: 1px 1px 5px black;
      
    }

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

  .DivButtonsReg{

    button{
      margin: 5px 10px 5px 10px;
    }

    .buttonSaveReg{
      background-color: green;
      color: white;
      border: none;
      padding: 5px;
      border-radius: 8px;
      box-shadow: 1px 1px 5px black;
    }

    .buttonCancelReg{
      background-color: red;
      color: white;
      border: none;
      padding: 5px;
      border-radius: 8px;
      box-shadow: 1px 1px 5px black;
    }

  }

`;

export const FormEdit = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-weight: bold;

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

  input,select{
    height: 25px;
    border-radius: 8px;
    outline: none;
    border: none;
    box-shadow: 0 0 4px 2px rgba(0, 90, 255, 0.4); 
    padding: 5px;
  }

  select{
    transition: 0.3s;
    :hover{
      cursor: pointer;
      background-color: rgba(0, 90, 255, 0.4);
      transition: 0.3s;
    }
  }

  input:focus{
    outline: none; 
    box-shadow: 0 0 4px 2px black; 
  }

  textarea {
    height: 200px;
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
    padding: 5px 10px 0px 0px;

    button{
      background-color: red;
      color: white;
      font-weight: bold;
      padding: 5px 15px;
      border: none;
      border-radius: 8px;
      box-shadow: 1px 1px 5px black;
      
    }

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

  .DivButtonsReg{

    button{
      margin: 5px 10px 5px 10px;
    }

    .buttonSaveReg{
      background-color: green;
      color: white;
      border: none;
      padding: 5px;
      border-radius: 8px;
      box-shadow: 1px 1px 5px black;
    }

    .buttonCancelReg{
      background-color: red;
      color: white;
      border: none;
      padding: 5px;
      border-radius: 8px;
      box-shadow: 1px 1px 5px black;
    }

  }

`;

export const DivAdvertising = styled.div`
  width: 100vw;
  display: flex;
  background-color: ${blueLight};
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 15pt;
  align-items: center;
  text-align: center;
  padding: 5px;
  flex-direction: column;

  h1{
    padding: 5px 25px;
    font-size: 25pt;
    background-color: ${blueHover};
    border-radius: 10px;
  }

  h2{
    font-size: 35pt;
    margin-bottom: 150px;
  }

  .ul_features{
    color: ${blueHover};

    li{
      list-style: none;
      font-size: 20pt;
    }

  }


`;
