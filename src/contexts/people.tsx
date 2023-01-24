import React, { createContext, useState, useEffect } from "react";

interface iRegisterPeople {
    id: number,
    name: string
}

interface iPeopleProviderFunctions {
    register_people: (data: iRegisterPeople) => void
    edit_people: (data: iRegisterPeople) => void
    delete_people: (data: iRegisterPeople) => void
    peopleDatabase: iRegisterPeople[]
}

interface iPeopleProviderProps {
    children: React.ReactNode
}

export const PeopleContext = createContext<iPeopleProviderFunctions>({} as iPeopleProviderFunctions);

export const PeopleProvider = ({children}: iPeopleProviderProps) => {

    const createKey = () => Math.floor(Math.random() * 1029384756102201)

    const [peopleDatabase, setPeopleDatabase] = useState([] as iRegisterPeople[])

    useEffect(()=>{
        const checkPeopleData = localStorage.getItem("@project01_people_database")

        if (checkPeopleData) {
            setPeopleDatabase(JSON.parse(checkPeopleData))
        }

    },[])

    const register_people = (data: iRegisterPeople) => {
        
        const new_person = {
            id: createKey(),
            name: data.name
        }

        const newData = [...peopleDatabase, new_person]
        setPeopleDatabase(newData)
        localStorage.setItem("@project01_people_database", JSON.stringify(newData))
        return newData

    }

    const edit_people = (data: iRegisterPeople) => {
        console.log(data)
    }

    const delete_people = (data: iRegisterPeople) => {
        console.log(data)
    }


    return(

        <PeopleContext.Provider value={{
            register_people,
            edit_people,
            delete_people,
            peopleDatabase
        }}>
          {children}  
        </PeopleContext.Provider>

    )
}