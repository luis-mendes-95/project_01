import { UlRegs } from "../../../styles/main"
import { ModalContext } from "../../../contexts/modal"
import { ProductsContext } from "../../../contexts/products"
import { useContext } from "react"

const DashProducts = () => {

    const { productsDatabase, set_id_edit } = useContext(ProductsContext)

    const { set_modal_add_products, set_modal_edit_products } = useContext(ModalContext)

  return (
    <UlRegs>

        <div className="div_title_ul_regs">
            <h2>Products</h2>
        </div>

        <div className="div_reg_data_item">
            <h3 className="h3_reg_data_item">Name</h3>
            <button className="button_add_new" onClick={()=>{set_modal_add_products()}}>+</button>
        </div>

        {productsDatabase.map((product) => {
            return (
                <li key={product.id}>
                    <p>{product.description}</p>
                    <button onClick={()=>{
                        set_id_edit(product.id)
                        set_modal_edit_products()
                        }}>More Details</button>
                </li>
            )
        })}

    </UlRegs>
  )
}

export default DashProducts