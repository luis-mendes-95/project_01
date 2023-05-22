import * as yup from "yup";

const ReceivablesSchema = yup.object().shape({
    id: yup.string(),
    saleId: yup.string(),
    cpfcnpj: yup.string(),
    description: yup.string().required("É necessário inserir uma descrição"),
    originalValue: yup.string().required("É necessário inserir o preço"),
    received: yup.string(),
    payType: yup.string(),
    obs: yup.string()
});

  export default ReceivablesSchema