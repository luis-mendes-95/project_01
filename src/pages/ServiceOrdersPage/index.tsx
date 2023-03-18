import Header from "../../components/Header";
import { ModalContext } from "../../contexts/modal";
import { useContext } from "react";
import FormNewServiceOrder from "../../components/ServiceOrders/FormNewServiceOrder";
import DashServiceOrder from "../../components/ServiceOrders/DashServiceOrders";
import FormEditServiceOrder from "../../components/ServiceOrders/FormEditServiceOrder";

const ServiceOrderPage = () => {

  const { showModalAddServiceOrder, showModalEditServiceOrder } = useContext(ModalContext);

  return (
    <>
      {showModalAddServiceOrder === true ? <FormNewServiceOrder /> : null}

      {showModalEditServiceOrder === true ? <FormEditServiceOrder /> : null}

      <Header />
      <div>This page will visualize and register all service orders</div>
      <DashServiceOrder />
    </>
  );
};

export default ServiceOrderPage;