import { HeaderApp } from "../../styles/header"
import { useNavigate } from "react-router-dom"

const Header = () => {

  const navigate = useNavigate()

  return (
    <HeaderApp>
        <button onClick={()=>{navigate("/home")}}>🏠HOME</button>
        {/* <button onClick={()=>{navigate("/schedules")}}>AGENDA</button> */}
        <button onClick={()=>{navigate("/peoplepage")}}>👥CPF/CNPJ</button>
        <button onClick={()=>{navigate("/productspage")}}>👕PRODUTOS</button>
        {/* <button onClick={()=>{navigate("/budgets")}}>ORÇAMENTOS</button> */}
        <button onClick={()=>{navigate("/salespage")}}>🛒VENDAS</button>
        <button onClick={()=>{navigate("/serviceorderspage")}}>👨‍🎨OS</button>
        <button onClick={()=>{navigate("/receivables")}}>💵A RECEBER</button>
        {/* <button onClick={()=>{navigate("/payables")}}>💸A PAGAR</button> */}
        {/* <button onClick={()=>{navigate("/buying")}}>💰COMPRAS</button> */}
    </HeaderApp>
  )
}

export default Header