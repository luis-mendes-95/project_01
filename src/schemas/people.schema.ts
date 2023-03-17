import * as yup from "yup";

const PeopleSchema = yup.object().shape({
    cpfCnpj: yup.string(),
    nomeRazao: yup.string().required("Este campo é obrigatório"),
    apelidoFantasia: yup.string(),
    tipo: yup.string().required("Este campo é obrigatório"),
    insEstadual: yup.string(),
    insMunicipal: yup.string(),
    cep: yup.string(),
    rua: yup.string(),
    numero: yup.string(),
    complemento: yup.string(),
    bairro: yup.string(),
    cidade: yup.string(),
    telefone: yup.string(),
    celular: yup.string(),
    email: yup.string(),
    site: yup.string(),
  });

  export default PeopleSchema