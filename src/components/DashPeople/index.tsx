import { UlRegs } from "../../styles/main"

const DashPeople = () => {
  return (
    <UlRegs>

        <div className="div_title_ul_regs">
            <h2>People</h2>
        </div>

        <div className="div_reg_data_item">
            <h3 className="h3_reg_data_item">Name</h3>
            <button className="button_add_new">+</button>
        </div>

        <li>
            <p>Peter</p>
            <button>Ver mais detalhes</button>
        </li>

        <li>
            <p>Howard</p>
            <button>Ver mais detalhes</button>
        </li>

        <li>
            <p>Stephany</p>
            <button>Ver mais detalhes</button>
        </li>


    </UlRegs>
  )
}

export default DashPeople