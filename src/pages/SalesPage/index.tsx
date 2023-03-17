import Header from "../../components/Header";
import { ModalContext } from "../../contexts/modal";
import { useContext } from "react";
import FormNewSales from "../../components/Sales/FormNewSale";
import DashSales from "../../components/Sales/DashSales";
import FormEditSale from "../../components/Sales/FormEditSales";

const SalesPage = () => {

  const { showModalAddSales, showModalEditSales } = useContext(ModalContext);

  return (
    <>
      {showModalAddSales === true ? <FormNewSales /> : null}

      {showModalEditSales === true ? <FormEditSale /> : null}

      <Header />
      <div>This page will visualize and register all sales</div>
      <DashSales />
    </>
  );
};

export default SalesPage;