import { UlRegs } from "../../../styles/main";
import { ModalContext } from "../../../contexts/modal";
import { useContext } from "react";
import { ServiceOrderContext } from "../../../contexts/serviceOrders";

const DashServiceOrders = () => {

    const { setModalAddServiceOrder, setModalEditServiceOrder } = useContext(ModalContext);
    const { serviceOrdersDatabase, setIdEdit } = useContext(ServiceOrderContext)
  
    return (
  
      <UlRegs>
  
        <div className="divTitleUlRegs">
          <h2>👨‍🎨ORDENS DE SERVIÇO</h2>
        </div>
  
        <div className="divRegDataItem">
  
          <h3 className="h3RegDataItem">Description</h3>
  
          <button
            className="buttonAddNew"
            onClick={() => {
                setModalAddServiceOrder();
            }}
          >
            ➕👨‍🎨NOVA ORDEM DE SERVIÇO
          </button>
        </div>
  
        {serviceOrdersDatabase.map((serviceOrder) => {
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