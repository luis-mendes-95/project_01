import React, { createContext, useState, useEffect } from "react";
import IRegisterAccount from '../interfaces/account.interface';
import IRegisterAccountLogin from '../interfaces/accountLogin.interface';
import { RegConfig } from "../contexts/regConfig";
import { useContext } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface iAccountProviderFunctions {
    login: (data: IRegisterAccountLogin) => void
    signUp: (data: IRegisterAccount) => void
    is_superuser: boolean
    is_staff: boolean
    tokenUserLoggedIn: string
    idUserLoggedIn: number
}

interface iAccountProviderProps {
    children: React.ReactNode
}

export const AccountContext = createContext<iAccountProviderFunctions>({} as iAccountProviderFunctions);

export const AccountProvider = ({children}: iAccountProviderProps) => {

    const [AccountDatabase, setAccountDatabase] = useState([] as IRegisterAccount[])
    const [idUserLoggedIn, setIdUserLoggedIn] = useState(0)
    const [tokenUserLoggedIn, setTokenUserLoggedIn] = useState('')
    const [is_superuser, setIsSuperUser] = useState(false)
    const [is_staff, setIsStaff] = useState(false)

    const setIdUser = (id: number) => {
        setIdUserLoggedIn(id)
    }

    const setTokenUser = (str: string) => {
        setTokenUserLoggedIn('')
    }

    const signUp = (data: IRegisterAccount) => {
        
        const newAccount = {
            firstName: data.firstName,
            lastName: data.lastName,
            company: data.company,
            email: data.email,
            username: data.username,
            password: data.password
            
        }

        //REQUISIÇÃO DE POST DE USUÁRIO STAFF NA API
        toast.success("USUÁRIO CADASTRADO")
        return console.log('retorno da requisição')

    }

    const login = (data: IRegisterAccountLogin) => {
       
        const loginData = {
            username: data.username,
            password: data.password
        }

        //REQUISIÇÃO POST DE LOGIN NA API

        setIdUser(0) // ->>>> RESULTADO DA REQUISIÇÃO AQUI
        setTokenUser('resultado do login')
        setIsSuperUser(false) //RESULTADO DA REQUISIÇÃO
        setIsStaff(false) //RESULTADO DA REQUISIÇÃO

        //ENCAMINHA PARA A HOME LOGADA
        

    }

    return(

        <AccountContext.Provider value={{
            login,
            signUp,
            idUserLoggedIn,
            is_staff,
            is_superuser,
            tokenUserLoggedIn
        }}>
          {children}  
        </AccountContext.Provider>

    )
}