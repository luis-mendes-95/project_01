import Modal from "../../Modal";
import { ModalContext } from "../../../contexts/modal";
import { useContext, useState } from "react";
import { FormAdd } from "../../../styles/main";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import IRegisterAccountLogin from "../../../interfaces/accountLogin.interface";
import "react-toastify/dist/ReactToastify.css";
import AccountLoginSchema from "../../../schemas/accountLogin.schema";

const FormSignUp = () => {

  const { setModalLogin } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterAccountLogin>({ resolver: yupResolver(AccountLoginSchema) });

  const submit = (data: IRegisterAccountLogin) => {
    console.log('Request to the API to POST a new Login')
  };

  return (
    <Modal>
      <FormAdd onSubmit={handleSubmit(submit)}>
        <div className="divCloseButton">
          <button
            onClick={() => {
              setModalLogin();
            }}
          >
            X
          </button>
        </div>

        <div className="divLabelAndInput">
          <label>Nome de usuário:</label>
          <input
            placeholder="Digite o seu nome de usuário"
            {...register("username")}
          />
        </div>
        {errors.username?.message && (
          <p className="pError" aria-label="error">
            {errors.username.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>Senha:</label>
          <input
            placeholder="Digite uma senha"
            {...register("password")}
          />
        </div>
        {errors.password?.message && (
          <p className="pError" aria-label="error">
            {errors.password.message}
          </p>
        )}

        <div className="DivButtonsReg">
          <button type="submit" className="buttonSaveReg">
            Entrar
          </button>

          <button onClick={setModalLogin} className="buttonCancelReg">
            Cancelar
          </button>
        </div>

      </FormAdd>
    </Modal>
  );
};

export default FormSignUp;
