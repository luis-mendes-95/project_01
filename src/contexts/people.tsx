import React, { createContext, useState, useEffect } from "react";
import IRegisterPeople from '../interfaces/people.interface';
import { RegConfig } from "../contexts/regConfig";
import { useContext } from "react";

interface iPeopleProviderFunctions {
    setIdEdit: (id: number) => void
    registerPeople: (data: IRegisterPeople) => void
    editPeople: (data: IRegisterPeople) => void
    deletePeople: (id: number) => void
    peopleDatabase: IRegisterPeople[]
    idToEdit: number
}

interface iPeopleProviderProps {
    children: React.ReactNode
}

export const PeopleContext = createContext<iPeopleProviderFunctions>({} as iPeopleProviderFunctions);
 
export const PeopleProvider = ({children}: iPeopleProviderProps) => {

    const { createKey } = useContext(RegConfig)

    const [peopleDatabase, setPeopleDatabase] = useState([] as IRegisterPeople[])
    const [idToEdit, setIdToEdit] = useState(0)

    useEffect(()=>{

        const checkPeopleData = localStorage.getItem("@project01_people_database")

        if (checkPeopleData) {
            setPeopleDatabase(JSON.parse(checkPeopleData))
        }

    },[])

    const setIdEdit = (id: number) => {
        setIdToEdit(id)
    }

    const registerPeople = (data: IRegisterPeople) => {
        
        const newPerson = {
            id: createKey(),
            cpfCnpj: data.cpfCnpj,
            nomeRazao: data.nomeRazao,
            apelidoFantasia: data.apelidoFantasia,
            tipo: data.tipo,
            insEstadual: data.insEstadual,
            insMunicipal: data.insMunicipal,
            cep: data.cep,
            rua: data.rua,
            numero: data.numero,
            complemento: data.complemento,
            bairro: data.bairro,
            cidade: data.cidade,
            estado: data.estado,
            telefone: data.telefone,
            celular: data.celular,
            email: data.email,
            site: data.site
        }

        const newData = [...peopleDatabase, newPerson]
        setPeopleDatabase(newData)
        localStorage.setItem("@project01_people_database", JSON.stringify(newData))
        return newData

    }

    const editPeople = (data: IRegisterPeople) => {
       
        const edittedPerson = {
            id: idToEdit,
            cpfCnpj: data.cpfCnpj,
            nomeRazao: data.nomeRazao,
            apelidoFantasia: data.apelidoFantasia,
            tipo: data.tipo,
            insEstadual: data.insEstadual,
            insMunicipal: data.insMunicipal,
            cep: data.cep,
            rua: data.rua,
            numero: data.numero,
            complemento: data.complemento,
            bairro: data.bairro,
            cidade: data.cidade,
            estado: data.estado,
            telefone: data.telefone,
            celular: data.celular,
            email: data.email,
            site: data.site
        }

        const newDatabase = peopleDatabase.map((person)=>{
            if (person.id === idToEdit) {
                return edittedPerson
            } else {
                return person
            }
        })

        setPeopleDatabase(newDatabase)
        localStorage.setItem("@project01_people_database", JSON.stringify(newDatabase))
        setIdToEdit(0)

    }

    const deletePeople = (id: number) => {
        const newDataBase = peopleDatabase.filter((person)=>{
            return person.id !== id
        })
        setPeopleDatabase(newDataBase)
        localStorage.setItem("@project01_people_database", JSON.stringify(newDataBase))
        setIdToEdit(0)
    }

    return(

        <PeopleContext.Provider value={{
            setIdEdit,
            registerPeople,
            editPeople,
            deletePeople,
            peopleDatabase,
            idToEdit
        }}>
          {children}  
        </PeopleContext.Provider>

    )
}