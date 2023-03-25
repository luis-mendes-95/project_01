import { UlRegs } from "../../../styles/main"
import { ModalContext } from "../../../contexts/modal"
import { PeopleContext } from "../../../contexts/people"
import { useContext } from "react"

const DashPeople = () => {

    const { peopleDatabase, setIdEdit } = useContext(PeopleContext)
    const { setModalAddPeople, setModalEditPeople } = useContext(ModalContext)

  return (

    <UlRegs>

        <div className="divTitleUlRegs">
            <h2>👥CPF/CNPJ</h2>
        </div>

        <div className="divRegDataItem">
            <h3 className="h3RegDataItem">NOME</h3>
            <h3 className="h3RegDataItem">CIDADE</h3>
            <h3 className="h3RegDataItem">ESTADO</h3>
            <h3 className="h3RegDataItem">CELULAR</h3>
            <button className="buttonAddNew" onClick={()=>{setModalAddPeople()}}>➕👥NOVO CPF/CNPJ</button>
        </div>

        {peopleDatabase.map((person) => {
            
            return (

                <li key={person.id}>
                    <p style={{ fontWeight: 'bold' }}>{person.nomeRazao}</p>
                    <p>{person.cidade}</p>
                    <p>{person.estado}</p>
                    <p>{person.celular}</p>
                    <button onClick={()=>{
                        setIdEdit(person.id)
                        setModalEditPeople()
                        }}>More Details</button>
                </li>

            )
        })}

    </UlRegs>
  )
}

export default DashPeople