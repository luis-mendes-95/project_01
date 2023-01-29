import React, { createContext, useState, useEffect } from "react";

interface iRegisterPeople {
    id: number;
    cpfCnpj: string;
    nomeRazao: string;
    apelidoFantasia: string;
    tipo: string;
    insEstadual: string;
    insMunicipal: string;
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    telefone: string;
    celular: string;
    email: string;
    site: string;
  }

interface iPeopleProviderFunctions {
    set_id_edit: (id: number) => void
    register_people: (data: iRegisterPeople) => void
    edit_people: (data: iRegisterPeople) => void
    delete_people: (id: number) => void
    peopleDatabase: iRegisterPeople[]
    idToEdit: number
}

interface iPeopleProviderProps {
    children: React.ReactNode
}

export const PeopleContext = createContext<iPeopleProviderFunctions>({} as iPeopleProviderFunctions);

export const PeopleProvider = ({children}: iPeopleProviderProps) => {

    const createKey = () => Math.floor(Math.random() * 1029384756102201)

    const [peopleDatabase, setPeopleDatabase] = useState([] as iRegisterPeople[])
    const [idToEdit, setIdToEdit] = useState(0)

    useEffect(()=>{
        const checkPeopleData = localStorage.getItem("@project01_people_database")

        if (checkPeopleData) {
            setPeopleDatabase(JSON.parse(checkPeopleData))
        }

    },[])

    const set_id_edit = (id: number) => {
        setIdToEdit(id)
    }

    const register_people = (data: iRegisterPeople) => {
        
        const new_person = {
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
            telefone: data.telefone,
            celular: data.celular,
            email: data.email,
            site: data.site
        }

        const newData = [...peopleDatabase, new_person]
        setPeopleDatabase(newData)
        localStorage.setItem("@project01_people_database", JSON.stringify(newData))
        return newData

    }

    const edit_people = (data: iRegisterPeople) => {
       
        const editted_person = {
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
            telefone: data.telefone,
            celular: data.celular,
            email: data.email,
            site: data.site
        }

        const newDatabase = peopleDatabase.map((person)=>{
            if (person.id === idToEdit) {
                return editted_person
            } else {
                return person
            }
        })

        setPeopleDatabase(newDatabase)
        localStorage.setItem("@project01_people_database", JSON.stringify(newDatabase))
        setIdToEdit(0)

    }

    const delete_people = (id: number) => {
        const newDataBase = peopleDatabase.filter((person)=>{
            return person.id !== id
        })
        setPeopleDatabase(newDataBase)
        localStorage.setItem("@project01_people_database", JSON.stringify(newDataBase))
        setIdToEdit(0)
    }


    return(

        <PeopleContext.Provider value={{
            set_id_edit,
            register_people,
            edit_people,
            delete_people,
            peopleDatabase,
            idToEdit
        }}>
          {children}  
        </PeopleContext.Provider>

    )
}