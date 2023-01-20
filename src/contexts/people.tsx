import React, { createContext } from "react";

interface iRegisterPeople {
    name: string
}

interface iPeopleProviderFunctions {
    register_people: (data: iRegisterPeople) => void
    edit_people: (data: iRegisterPeople) => void
    delete_people: (data: iRegisterPeople) => void
}

interface iPeopleProviderProps {
    children: React.ReactNode
}

export const PeopleContext = createContext<iPeopleProviderFunctions>({} as iPeopleProviderFunctions);

export const PeopleProvider = ({children}: iPeopleProviderProps) => {

    const register_people = (data: iRegisterPeople) => {
        console.log(data)
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
            delete_people
        }}>
          {children}  
        </PeopleContext.Provider>

    )
}