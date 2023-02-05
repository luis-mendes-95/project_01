import React, { createContext, useState} from "react";

interface iModalProviderFunctions {
    showModalAddPeople: boolean,
    showModalEditPeople: boolean,
    showModalAddProducts: boolean,
    showModalEditProducts: boolean,
    set_modal_add_people: () => void,
    set_modal_edit_people: () => void,
    set_modal_add_products: () => void,
    set_modal_edit_products: () => void
}

interface iModalProviderProps {
    children: React.ReactNode;
}

export const ModalContext = createContext<iModalProviderFunctions>({} as iModalProviderFunctions);

export const ModalProvider = ({children}: iModalProviderProps) => {

    const [ showModalAddPeople, setShowModalAddPeople] = useState(false)
    const [ showModalEditPeople, setShowModalEditPeople] = useState(false)
    const [ showModalAddProducts, setShowModalAddProducts] = useState(false)
    const [ showModalEditProducts, setShowModalEditProducts] = useState(false)

    const set_modal_add_people = () => {
        setShowModalAddPeople(!showModalAddPeople)
    }

    const set_modal_edit_people = () => {
        setShowModalEditPeople(!showModalEditPeople)
    }

    const set_modal_add_products = () => {
        setShowModalAddProducts(!showModalAddProducts)
    }

    const set_modal_edit_products = () => {
        setShowModalEditProducts(!showModalEditProducts)
    }

    return (
        <ModalContext.Provider value={{
            showModalAddPeople,
            showModalEditPeople,
            showModalAddProducts,
            showModalEditProducts,
            set_modal_add_people,
            set_modal_edit_people,
            set_modal_add_products,
            set_modal_edit_products
        }}>
            {children}
        </ModalContext.Provider>
    )

}