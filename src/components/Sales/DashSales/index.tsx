import { UlRegs } from "../../../styles/main";
import { ModalContext } from "../../../contexts/modal";
import { useContext } from "react";
import { ProductsContext } from "../../../contexts/products";
import { PeopleContext } from "../../../contexts/people";
import { SalesContext } from "../../../contexts/sales";

const DashSales = () => {

  const { set_modal_add_sale, set_modal_edit_sale } = useContext(ModalContext);
  const { productsDatabase } = useContext(ProductsContext);
  const { peopleDatabase } = useContext(PeopleContext);
  const { salesDatabase, set_id_edit } = useContext(SalesContext)

  return (
    <UlRegs>
      <div className="div_title_ul_regs">
        <h2>Sales</h2>
      </div>

      <div className="div_reg_data_item">
        <h3 className="h3_reg_data_item">Description</h3>
        <button
          className="button_add_new"
          onClick={() => {
            set_modal_add_sale();
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
              set_id_edit(sale.id)
              set_modal_edit_sale()
            }}>Mais detalhes</button>
          </li>
        );
      })}
    </UlRegs>
  );
};

export default DashSales;