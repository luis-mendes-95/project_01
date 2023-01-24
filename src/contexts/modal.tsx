import React, { createContext, useState} from "react";

interface iModalProviderFunctions {
    showModalAddPeople: boolean,
    set_modal_add: () => void
}

interface iModalProviderProps {
    children: React.ReactNode;
}

export const ModalContext = createContext<iModalProviderFunctions>({} as iModalProviderFunctions);

export const ModalProvider = ({children}: iModalProviderProps) => {

    const [ showModalAddPeople, setShowModalAddPeople] = useState(false)

    const set_modal_add = () => {
        setShowModalAddPeople(!showModalAddPeople)
    }

    return (
        <ModalContext.Provider value={{
            showModalAddPeople,
            set_modal_add
        }}>
            {children}
        </ModalContext.Provider>
    )

}