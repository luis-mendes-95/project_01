import React, { createContext, useState, useEffect } from "react";
import { IReceivableGenerated } from '../interfaces/receivables.interface';
import { RegConfig } from "../contexts/regConfig";
import { useContext } from "react";

interface iReceivablesProviderFunctions {
    setIdEdit: (id: number) => void;
    registerReceivable: (data: IReceivableGenerated) => void;
    editReceivable: (data: IReceivableGenerated) => void;
    deleteReceivable: (id: number) => void;
    receivablesDatabase: IReceivableGenerated[]
    idToEdit: number;
}

interface iReceivablesProviderProps {
    children: React.ReactNode
}

export const ReceivablesContext = createContext<iReceivablesProviderFunctions>({} as iReceivablesProviderFunctions);

export const ReceivablesProvider = ({ children }: iReceivablesProviderProps) => {

    const { createKey } = useContext(RegConfig)

    const [receivablesDatabase, setReceivablesDatabase] = useState([] as IReceivableGenerated[])
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

    const registerReceivable = (data: IReceivableGenerated) => {

        const newReceivable = {
            id: createKey(),
            date: data.date,
            client: data.client,
            items: data.items,
            total: data.total,
            payType: data.payType,
            received: data.received
        }

        const newData = [...receivablesDatabase, newReceivable]
        setReceivablesDatabase(newData)
        localStorage.setItem("@project01_receivables_database", JSON.stringify(newData))
        return newData

    }

    const editReceivable = (data: IReceivableGenerated) => {

        const edittedReceivable = {
            id: idToEdit,
            date: data.date,
            client: data.client,
            items: data.items,
            total: data.total,
            payType: data.payType,
            received: data.received
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