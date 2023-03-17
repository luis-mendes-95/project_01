import { UlRegs } from "../../../styles/main";
import { ModalContext } from "../../../contexts/modal";
import { useContext } from "react";
import { SalesContext } from "../../../contexts/sales";

const DashSales = () => {

  const { setModalAddSale, setModalEditSale } = useContext(ModalContext);
  const { salesDatabase, setIdEdit } = useContext(SalesContext)

  return (

    <UlRegs>

      <div className="divTitleUlRegs">
        <h2>Sales</h2>
      </div>

      <div className="divRegDataItem">

        <h3 className="h3RegDataItem">Description</h3>

        <button
          className="buttonAddNew"
          onClick={() => {
            setModalAddSale();
          }}
        >
          +
        </button>
      </div>

      {salesDatabase.map((sale) => {
        return (
          <li key={sale.id}>
            <p>{sale.client}</p>
            <button onClick={()=>{
              setIdEdit(sale.id)
              setModalEditSale()
            }}>Mais detalhes</button>
          </li>
        );
      })}

    </UlRegs>

  );
};

export default DashSales;