import * as yup from "yup";

const AccountSchema = yup.object().shape({
  firstName: yup.string().required("É necessário inserir o primeiro nome"),
  lastName: yup.string().required("É necessário inserir o sobrenome"),
  company: yup.string().required("Este campo é obrigatório"),
  email: yup.string().required("É necessário inserir um e-mail"),
  username: yup.string().required("É obrigatório escolher um nome de usuário"),
  password: yup.string().required("Uma senha é obrigatória")
});

  export default AccountSchema