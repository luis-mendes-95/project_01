import styled from 'styled-components';

const blue = "#0077B6";
const blueHover = "#023E8A";
const blueLight = "#66B2FF"; // novo tom de azul adicionado
const gray = "#F2F2F2";
const boxShadow = "0 2px 2px rgba(0, 0, 0, 0.2)";

export const HeaderApp = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${blue};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
  }

  button {
    background-color: #fff;
    color: ${blue};
    padding: 15px 30px;
    border: none;
    border-radius: 50px;
    margin: 0 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease-in-out;

    @media (max-width: 768px) {
      margin: 20px 0;
      font-size: 16px;
      padding: 10px 20px;
    }

    &:hover {
      background-color: ${blueLight}; // usa o novo tom de azul no hover
      transform: translateY(-2px);
      box-shadow: ${boxShadow};
    }
  }

  button.active {
    background-color: ${blueHover};
    color: #fff;
    box-shadow: none;
  }
`;