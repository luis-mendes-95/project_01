import Header from "../../components/Header";
import { ModalContext } from "../../contexts/modal";
import { useContext } from "react";
import FormNewSales from "../../components/Sales/FormNewSale";
import DashSales from "../../components/Sales/DashSales";
import FormEditSale from "../../components/Sales/FormEditSales";
import { ToastContainer } from 'react-toastify';
import FormNewProducts from "../../components/Products/FormNewProducts";

const SalesPage = () => {

  const { showModalAddSales, showModalEditSales, showModalAddProducts } = useContext(ModalContext);

  return (
    <>
      {showModalAddSales === true ? <FormNewSales /> : null}

      {showModalEditSales === true ? <FormEditSale /> : null}

      {showModalAddProducts === true ? <FormNewProducts /> : null}



      <Header />
      <ToastContainer/>
      <DashSales />
    </>
  );
};

export default SalesPage;