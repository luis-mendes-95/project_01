import Modal from "../../Modal";
import { ModalContext } from "../../../contexts/modal";
import { useContext, useState } from "react";
import { FormAdd } from "../../../styles/main";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import IRegisterAccount from "../../../interfaces/account.interface";
import "react-toastify/dist/ReactToastify.css";
import AccountSchema from "../../../schemas/account.schema";
import { AccountContext } from "../../../contexts/accounts";
import api from "../../../services/api";

const FormSignUp = () => {

  const { setModalSignUp } = useContext(ModalContext);
  const { signUp } = useContext(AccountContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterAccount>({ resolver: yupResolver(AccountSchema) });

  const submit = async (data: IRegisterAccount) => {
    // signUp(data)
    const response = await api.get("/accounts");
    console.log(response)
  };

  return (
    <Modal>
      <FormAdd onSubmit={handleSubmit(submit)}>
      <h2>CADASTRAR NOVO USUÁRIO:</h2>

        <div className="divLabelAndInput">
          <label>Primeiro Nome:</label>
          <input
            placeholder="Digite o seu primeiro nome"
            {...register("firstName")}
          />
        </div>
        {errors.firstName?.message && (
          <p className="pError" aria-label="error">
            {errors.firstName.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>Sobrenome:</label>
          <input
            placeholder="Digite aqui seu sobrenome"
            {...register("lastName")}
          />
        </div>
        {errors.lastName?.message && (
          <p className="pError" aria-label="error">
            {errors.lastName.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>Empresa:</label>
          <input
            placeholder="Digite o nome da sua empresa"
            {...register("company")}
          />
        </div>
        {errors.company?.message && (
          <p className="pError" aria-label="error">
            {errors.company.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>E-mail:</label>
          <input
            placeholder="Digite o seu e-mail"
            {...register("email")}
          />
        </div>
        {errors.email?.message && (
          <p className="pError" aria-label="error">
            {errors.email.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>Nome de usuário:</label>
          <input
            placeholder="Digite um nome para o seu usuário"
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
            placeholder="Digite uma senha para o seu usuário"
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
            Salvar
          </button>

          <button onClick={setModalSignUp} className="buttonCancelReg">
            Cancelar
          </button>
        </div>

      </FormAdd>
    </Modal>
  );
};

export default FormSignUp;
