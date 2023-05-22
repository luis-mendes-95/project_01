import React, { createContext, useState, useEffect } from "react";
import { IRegisterReceivable } from '../interfaces/receivables.interface';
import { RegConfig } from "../contexts/regConfig";
import { useContext } from "react";

interface iReceivablesProviderFunctions {
    setIdEdit: (id: number) => void;
    registerReceivable: (data: IRegisterReceivable) => void;
    editReceivable: (data: IRegisterReceivable) => void;
    deleteReceivable: (id: number) => void;
    receivablesDatabase: IRegisterReceivable[]
    idToEdit: number;
}

interface iReceivablesProviderProps {
    children: React.ReactNode
}

export const ReceivablesContext = createContext<iReceivablesProviderFunctions>({} as iReceivablesProviderFunctions);

export const ReceivablesProvider = ({ children }: iReceivablesProviderProps) => {

    const { createKey } = useContext(RegConfig)

    const [receivablesDatabase, setReceivablesDatabase] = useState([] as IRegisterReceivable[])
    const [idToEdit, setIdToEdit] = useState(0)

    useEffect(() => {
        const checkReceivablesData = localStorage.getItem("@project01_receivables_database")

        if (checkReceivablesData) {
            setReceivablesDatabase(JSON.parse(checkReceivablesData))
        }

    }, [])

    const setIdEdit = (id: number) => {
        setIdToEdit(id)
    }

    const registerReceivable = (data: IRegisterReceivable) => {

        const newReceivable = {
            id: data.id,
            saleId: data.saleId,
            cpfcnpj: data.cpfcnpj,
            description: data.description,
            originalValue: data.originalValue,
            received: data.received,
            payType: data.payType,
            obs: data.obs
        }

        const newData = [...receivablesDatabase, newReceivable]
        setReceivablesDatabase(newData)
        localStorage.setItem("@project01_receivables_database", JSON.stringify(newData))
        return newData

    }

    const editReceivable = (data: IRegisterReceivable) => {

        const edittedReceivable = {
            id: data.id,
            saleId: data.saleId,
            cpfcnpj: data.cpfcnpj,
            description: data.description,
            originalValue: data.originalValue,
            received: data.received,
            payType: data.payType,
            obs: data.obs
        }

        const newDatabase = receivablesDatabase.map((receivable) => {
            if (receivable.id === idToEdit) {
                return edittedReceivable
            } else {
                return receivable
            }
        })

        setReceivablesDatabase(newDatabase)
        localStorage.setItem("@project01_receivable_database", JSON.stringify(newDatabase))
        setIdToEdit(0)

    }

    const deleteReceivable = (id: number) => {
        const newDataBase = receivablesDatabase.filter((receivable) => {
            return receivable.id !== id
        })
        setReceivablesDatabase(newDataBase)
        localStorage.setItem("@project01_receivable_database", JSON.stringify(newDataBase))
        setIdToEdit(0)
    }

    return (

        <ReceivablesContext.Provider value={{
            setIdEdit,
            registerReceivable,
            editReceivable,
            deleteReceivable,
            receivablesDatabase,
            idToEdit
        }}>
            {children}
        </ReceivablesContext.Provider>

    )
}