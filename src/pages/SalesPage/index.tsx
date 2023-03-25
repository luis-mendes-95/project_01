import Header from "../../components/Header";
import { ModalContext } from "../../contexts/modal";
import { useContext } from "react";
import FormNewSales from "../../components/Sales/FormNewSale";
import DashSales from "../../components/Sales/DashSales";
import FormEditSale from "../../components/Sales/FormEditSales";
import { ToastContainer } from 'react-toastify';

const SalesPage = () => {

  const { showModalAddSales, showModalEditSales } = useContext(ModalContext);

  return (
    <>
      {showModalAddSales === true ? <FormNewSales /> : null}

      {showModalEditSales === true ? <FormEditSale /> : null}

      <Header />
      <ToastContainer/>
      <DashSales />
    </>
  );
};

export default SalesPage;