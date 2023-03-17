import Header from "../../components/Header";
import { ModalContext } from "../../contexts/modal";
import { useContext } from "react";
import FormNewSales from "../../components/Sales/FormNewSale";
import DashSales from "../../components/Sales/DashSales";

const SalesPage = () => {

  const { showModalAddSales } = useContext(ModalContext);

  return (
    <>
      {showModalAddSales === true ? <FormNewSales /> : null}

      <Header />
      <div>This page will visualize and register all sales</div>
      <DashSales />
    </>
  );
};

export default SalesPage;