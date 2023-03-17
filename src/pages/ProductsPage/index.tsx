import Header from "../../components/Header";
import { ModalContext } from "../../contexts/modal";
import { useContext } from "react";
import FormNewProducts from "../../components/Products/FormNewProducts";
import FormEditProducts from "../../components/Products/FormEditProducts";
import DashProducts from "../../components/Products/DashProducts";

const ProductsPage = () => {
  
  const { showModalAddProducts, showModalEditProducts } = useContext(ModalContext);

  return (
    <>
      {showModalAddProducts === true ? <FormNewProducts /> : null}

      {showModalEditProducts === true ? <FormEditProducts /> : null}

      <Header />
      <div>This page will visualize and register all kinds of Products</div>
      <DashProducts />
    </>
  );
};

export default ProductsPage;
