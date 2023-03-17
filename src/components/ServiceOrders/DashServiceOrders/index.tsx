import { UlRegs } from "../../../styles/main";
import { ModalContext } from "../../../contexts/modal";
import { useContext } from "react";
import { ServiceOrdersContext } from "../../../contexts/serviceOrders";

const DashServiceOrders = () => {

    const { setModalAddServiceOrder, setModalEditServiceOrder } = useContext(ModalContext);
    const { serviceOrderDatabase, setIdEdit } = useContext(ServiceOrdersContext)
  
    return (
  
      <UlRegs>
  
        <div className="divTitleUlRegs">
          <h2>Service Orders</h2>
        </div>
  
        <div className="divRegDataItem">
  
          <h3 className="h3RegDataItem">Description</h3>
  
          <button
            className="buttonAddNew"
            onClick={() => {
                setModalAddServiceOrder();
            }}
          >
            +
          </button>
        </div>
  
        {serviceOrderDatabase.map((serviceOrder) => {
          return (
            <li key={serviceOrder.id}>
              <p>{serviceOrder.client}</p>
              <button onClick={()=>{
                setIdEdit(serviceOrder.id)
                setModalEditServiceOrder()
              }}>Mais detalhes</button>
            </li>
          );
        })}
  
      </UlRegs>
  
    );
  };
  
  export default DashServiceOrders;