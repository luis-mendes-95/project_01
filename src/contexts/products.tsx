import React, { createContext, useState, useEffect } from "react";
import IRegisterProducts from '../interfaces/products.interface';
import { RegConfig } from "../contexts/regConfig";
import { useContext } from "react";

interface iProductsProviderFunctions {
    setIdEdit: (id: number) => void
    registerProducts: (data: IRegisterProducts) => void
    editProducts: (data: IRegisterProducts) => void
    deleteProducts: (id: number) => void
    productsDatabase: IRegisterProducts[]
    idToEdit: number
}

interface iProductsProviderProps {
    children: React.ReactNode
}

export const ProductsContext = createContext<iProductsProviderFunctions>({} as iProductsProviderFunctions);

export const ProductsProvider = ({children}: iProductsProviderProps) => {

    const { createKey } = useContext(RegConfig)

    const [productsDatabase, setProductsDatabase] = useState([] as IRegisterProducts[])
    const [idToEdit, setIdToEdit] = useState(0)

    useEffect(()=>{
        const checkProductsData = localStorage.getItem("@project01_products_database")

        if (checkProductsData) {
            setProductsDatabase(JSON.parse(checkProductsData))
        }

    },[])

    const setIdEdit = (id: number) => {
        setIdToEdit(id)
    }

    const registerProducts = (data: IRegisterProducts) => {
        
        const newProduct = {
            id: createKey(),
            code: data.code,
            description: data.description,
            cost: data.cost,
            price: data.price,
            margin: data.margin,
            supplier: data.supplier,
            qty: data.qty
        }

        const newData = [...productsDatabase, newProduct]
        setProductsDatabase(newData)
        localStorage.setItem("@project01_products_database", JSON.stringify(newData))
        return newData

    }

    const editProducts = (data: IRegisterProducts) => {
       
        const edittedProduct = {
            id: idToEdit,
            code: data.code,
            description: data.description,
            cost: data.cost,
            price: data.price,
            margin: data.margin,
            supplier: data.supplier,
            qty: data.qty
        }

        const newDatabase = productsDatabase.map((product)=>{
            if (product.id === idToEdit) {
                return edittedProduct
            } else {
                return product
            }
        })

        setProductsDatabase(newDatabase)
        localStorage.setItem("@project01_products_database", JSON.stringify(newDatabase))
        setIdToEdit(0)

    }

    const deleteProducts = (id: number) => {
        const newDataBase = productsDatabase.filter((product)=>{
            return product.id !== id
        })
        setProductsDatabase(newDataBase)
        localStorage.setItem("@project01_products_database", JSON.stringify(newDataBase))
        setIdToEdit(0)
    }

    return(

        <ProductsContext.Provider value={{
            setIdEdit,
            registerProducts,
            editProducts,
            deleteProducts,
            productsDatabase,
            idToEdit
        }}>
          {children}  
        </ProductsContext.Provider>

    )
}