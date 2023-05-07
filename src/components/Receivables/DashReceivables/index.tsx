import { UlRegs } from "../../../styles/main";
import { ModalContext } from "../../../contexts/modal";
import { useContext } from "react";
import { PeopleContext } from "../../../contexts/people";
import { ProductsContext } from "../../../contexts/products";
import { SalesContext } from "../../../contexts/sales";
import { ReceivablesContext } from "../../../contexts/receivables";

const DashReceivables = () => {

  const { setModalAddReceivable, setModalEditReceivable } = useContext(ModalContext);
  const { receivableDatabase, setIdEdit } = useContext(ReceivablesContext)

  return (

    <UlRegs>

      <div className="divTitleUlRegs">
        <h2>A RECEBER</h2>
      </div>

      <div className="divRegDataItem">

        <h3 className="h3RegDataItem">Description</h3>

        <button
          className="buttonAddNew"
          onClick={() => {
            setModalAddReceivable();
          }}
        >
          +
        </button>
      </div>

      {receivablesDatabase.map((receivable) => {
        return (
          <li key={receivable.id}>
            <p>{receivable.client}</p>
            <button onClick={()=>{
              setModalEditReceivable(receivable.id)
              setModalEditReceivable()
            }}>Mais detalhes</button>
          </li>
        );
      })}

    </UlRegs>

  );
};

export default DashReceivables;