import { Header_app } from "../../styles/header"
import { useNavigate } from "react-router-dom"


const Header = () => {

  const navigate = useNavigate()

  return (
    <Header_app>
        <button onClick={()=>{navigate("/")}}>Home</button>
        <button onClick={()=>{navigate("/peoplepage")}}>People</button>
    </Header_app>
  )
}

export default Header