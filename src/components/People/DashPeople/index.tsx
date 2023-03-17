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
            <h2>People</h2>
        </div>

        <div className="divRegDataItem">
            <h3 className="h3RegDataItem">Name</h3>
            <button className="buttonAddNew" onClick={()=>{setModalAddPeople()}}>+</button>
        </div>

        {peopleDatabase.map((person) => {
            
            return (

                <li key={person.id}>
                    <p>{person.nomeRazao}</p>
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