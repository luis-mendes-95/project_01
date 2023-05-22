import DashReceivables from "../../components/Receivables/DashReceivables";
import Header from "../../components/Header";
import { ModalContext } from "../../contexts/modal";
import { useContext } from "react";
import FormNewReceivable from "../../components/Receivables/FormNewReceivable";
import FormEditReceivable from "../../components/Receivables/FormEditReceivables";
import { ToastContainer } from 'react-toastify';

const ReceivablesPage = () => {
  const { showModalAddReceivable, showModalEditReceivable } = useContext(ModalContext);

  return (
    <>
      {showModalAddReceivable === true ? <FormNewReceivable /> : null}

      {showModalEditReceivable === true ? <FormEditReceivable /> : null}

      <Header />
      <ToastContainer/>
      <DashReceivables />
    </>
  );
};

export default ReceivablesPage;
