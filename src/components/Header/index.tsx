import { HeaderApp } from "../../styles/header"
import { useNavigate } from "react-router-dom"


const Header = () => {

  const navigate = useNavigate()

  return (
    <HeaderApp>
        <button onClick={()=>{navigate("/")}}>Home</button>
        <button onClick={()=>{navigate("/peoplepage")}}>People</button>
        <button onClick={()=>{navigate("/productspage")}}>Products</button>
        <button onClick={()=>{navigate("/salespage")}}>Sales</button>
    </HeaderApp>
  )
}

export default Header