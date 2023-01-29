import DashPeople from "../../components/DashPeople";
import Header from "../../components/Header";
import { ModalContext } from "../../contexts/modal";
import { useContext } from "react";
import FormNewPeople from "../../components/FormNewPeople";
import FormEditPeople from "../../components/FormEditPeople";

const PeoplePage = () => {
  const { showModalAddPeople, showModalEditPeople } = useContext(ModalContext);

  return (
    <>
      {showModalAddPeople === true ? <FormNewPeople /> : null}

      {showModalEditPeople === true ? <FormEditPeople /> : null}

      <Header />
      <div>This page will visualize and register all kinds of People</div>
      <DashPeople />
    </>
  );
};

export default PeoplePage;
