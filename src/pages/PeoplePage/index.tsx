import DashPeople from "../../components/People/DashPeople";
import Header from "../../components/Header";
import { ModalContext } from "../../contexts/modal";
import { useContext } from "react";
import FormNewPeople from "../../components/People/FormNewPeople";
import FormEditPeople from "../../components/People/FormEditPeople";
import { ToastContainer } from 'react-toastify';


const PeoplePage = () => {
  
  const { showModalAddPeople, showModalEditPeople } = useContext(ModalContext);

  return (
    <>
      {showModalAddPeople === true ? <FormNewPeople /> : null}

      {showModalEditPeople === true ? <FormEditPeople /> : null}

      <Header />
      <ToastContainer/>
      <DashPeople />
    </>
  );
};

export default PeoplePage;
