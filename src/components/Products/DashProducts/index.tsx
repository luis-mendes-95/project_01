import { UlRegs } from "../../../styles/main"
import { ModalContext } from "../../../contexts/modal"
import { ProductsContext } from "../../../contexts/products"
import { useContext } from "react"

const DashProducts = () => {

    const { productsDatabase, setIdEdit } = useContext(ProductsContext)

    const { setModalAddProducts, setModalEditProducts } = useContext(ModalContext)

  return (
    <UlRegs>

        <div className="divTitleUlRegs">
            <h2>Products</h2>
        </div>

        <div className="divRegDataItem">
            <h3 className="h3RegDataItem">Name</h3>
            <button className="buttonAddNew" onClick={()=>{setModalAddProducts()}}>+</button>
        </div>

        {productsDatabase.map((product) => {
            return (
                <li key={product.id}>
                    <p>{product.description}</p>
                    <button onClick={()=>{
                        setIdEdit(product.id)
                        setModalEditProducts()
                        }}>More Details</button>
                </li>
            )
        })}

    </UlRegs>
  )
}

export default DashProducts