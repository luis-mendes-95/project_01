import * as yup from "yup";

const ProductsSchema = yup.object().shape({
  description: yup.string().required("É necessário inserir uma descrição"),
  price: yup.string().required("É necessário inserir o preço"),
});

  export default ProductsSchema