import React, { createContext, useState} from "react";

interface iModalProviderFunctions {
    showModalAddPeople: boolean,
    showModalEditPeople: boolean,
    set_modal_add: () => void,
    set_modal_edit: () => void
}

interface iModalProviderProps {
    children: React.ReactNode;
}

export const ModalContext = createContext<iModalProviderFunctions>({} as iModalProviderFunctions);

export const ModalProvider = ({children}: iModalProviderProps) => {

    const [ showModalAddPeople, setShowModalAddPeople] = useState(false)
    const [ showModalEditPeople, setShowModalEditPeople] = useState(false)

    const set_modal_add = () => {
        setShowModalAddPeople(!showModalAddPeople)
    }

    const set_modal_edit = () => {
        setShowModalEditPeople(!showModalEditPeople)
    }

    return (
        <ModalContext.Provider value={{
            showModalAddPeople,
            showModalEditPeople,
            set_modal_add,
            set_modal_edit
        }}>
            {children}
        </ModalContext.Provider>
    )

}