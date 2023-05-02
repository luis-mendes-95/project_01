import HomeLogin from "../../components/Login/HomeLogin";
import Header from "../../components/Header";
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
      <button onClick={setModalSignUp}>CADASTRAR-SE</button>
      <button onClick={setModalLogin}>EFETUAR LOGIN</button>
    </>
  );
};

export default LoginPage;
