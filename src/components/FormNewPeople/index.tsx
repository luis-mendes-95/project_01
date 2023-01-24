import Modal from "../Modal";
import { ModalContext } from "../../contexts/modal";
import { PeopleContext } from "../../contexts/people";
import { useContext } from "react";
import { FormAdd } from "../../styles/main";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

interface iRegisterPeople {
    id: number,
    name: string
}

const FormNewPeople = () => {

    const {register_people} = useContext(PeopleContext)

    const PeopleSchema = yup.object().shape({
        name: yup
        .string()
        .required("Insert a name")
    })

    const { register, handleSubmit, formState: {errors} } = useForm<iRegisterPeople>({
        resolver: yupResolver(PeopleSchema)
    })

    const { set_modal_add } = useContext(ModalContext) 

    const submit = (data: iRegisterPeople) => {

        register_people(data)
        set_modal_add()

    }

    return (
        <Modal>
            <FormAdd onSubmit={handleSubmit(submit)}>
                <div className="div_close_button">
                    <button onClick={()=>{set_modal_add()}}>X</button>
                </div>
                <label>Name</label>
                <input placeholder="Insert name here" {...register("name")}></input>
                {errors.name?.message && (
                    <p className="p_error" aria-label="error">{errors.name.message}</p>
                )}
                <button type="submit">Save</button>
            </FormAdd>
        </Modal>
    )

}

export default FormNewPeople