import { UlRegs } from "../../../styles/main"
import { ModalContext } from "../../../contexts/modal"
import { PeopleContext } from "../../../contexts/people"
import { useContext } from "react"

const DashPeople = () => {

    const { peopleDatabase, set_id_edit } = useContext(PeopleContext)

    const { set_modal_add_people, set_modal_edit_people } = useContext(ModalContext)

  return (
    <UlRegs>

        <div className="div_title_ul_regs">
            <h2>People</h2>
        </div>

        <div className="div_reg_data_item">
            <h3 className="h3_reg_data_item">Name</h3>
            <button className="button_add_new" onClick={()=>{set_modal_add_people()}}>+</button>
        </div>

        {peopleDatabase.map((person) => {
            return (
                <li key={person.id}>
                    <p>{person.nomeRazao}</p>
                    <button onClick={()=>{
                        set_id_edit(person.id)
                        set_modal_edit_people()
                        }}>More Details</button>
                </li>
            )
        })}

    </UlRegs>
  )
}

export default DashPeople