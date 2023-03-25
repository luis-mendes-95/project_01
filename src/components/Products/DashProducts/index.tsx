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
            <h2>👕PRODUTOS</h2>
        </div>

        <div className="divRegDataItem">
            <h3 className="h3RegDataItem">COD</h3>
            <h3 className="h3RegDataItem">DESCRIÇÃO</h3>
            <h3 className="h3RegDataItem">PREÇO</h3>
            <h3 className="h3RegDataItem">CUSTO</h3>
            <h3 className="h3RegDataItem">MARGEM</h3>
            <button className="buttonAddNew" onClick={()=>{setModalAddProducts()}}>➕👕NOVO PRODUTO</button>
        </div>

        {productsDatabase.map((product) => {
            return (
                <li key={product.id}>
                    <p>{product.code}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.cost}</p>
                    <p>{product.margin}</p>
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