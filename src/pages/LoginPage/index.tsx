import HomeLogin from "../../components/Login/HomeLogin";
import {HeaderApp} from "../../styles/header";
import { ModalContext } from "../../contexts/modal";
import { useContext } from "react";
import FormSignUp from "../../components/Login/FormSignUp";
import FormLogin from "../../components/Login/FormLogIn";
import { ToastContainer } from 'react-toastify';

const LoginPage = () => {
  const { showModalLogin, showModalSignUp, setModalSignUp, setModalLogin} = useContext(ModalContext);

  return (
    <>
      {showModalLogin === true ? <FormLogin /> : null}

      {showModalSignUp === true ? <FormSignUp /> : null}
{/* 
      <Header /> */}
      <ToastContainer/>
      <HomeLogin />
      <HeaderApp>
        <button className="buttonAddNew" onClick={setModalSignUp}>CADASTRAR-SE</button>
        <button onClick={setModalLogin}>EFETUAR LOGIN</button>
      </HeaderApp>

    </>
  );
};

export default LoginPage;
