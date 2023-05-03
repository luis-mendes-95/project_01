import * as yup from "yup";

const AccountLoginSchema = yup.object().shape({
  username: yup.string().required("Este campo é obrigatório!"),
  password: yup.string().required("Este campo é obrigatório!")
});

  export default AccountLoginSchema