import React, { createContext, useState, useEffect } from "react";

interface iRegisterProducts {
    id: number;
    code: number;
    description: string;
    cost: number;
    price: number;
    margin: number;
    supplier: string;
    qty: number;
  }

interface iProductsProviderFunctions {
    set_id_edit: (id: number) => void
    register_products: (data: iRegisterProducts) => void
    edit_products: (data: iRegisterProducts) => void
    delete_products: (id: number) => void
    productsDatabase: iRegisterProducts[]
    idToEdit: number
}

interface iProductsProviderProps {
    children: React.ReactNode
}

export const ProductsContext = createContext<iProductsProviderFunctions>({} as iProductsProviderFunctions);

export const ProductsProvider = ({children}: iProductsProviderProps) => {

    const createKey = () => Math.floor(Math.random() * 1029384756102201)

    const [productsDatabase, setProductsDatabase] = useState([] as iRegisterProducts[])
    const [idToEdit, setIdToEdit] = useState(0)

    useEffect(()=>{
        const checkProductsData = localStorage.getItem("@project01_products_database")

        if (checkProductsData) {
            setProductsDatabase(JSON.parse(checkProductsData))
        }

    },[])

    const set_id_edit = (id: number) => {
        setIdToEdit(id)
    }

    const register_products = (data: iRegisterProducts) => {
        
        const new_person = {
            id: createKey(),
            code: data.code,
            description: data.description,
            cost: data.cost,
            price: data.price,
            margin: data.margin,
            supplier: data.supplier,
            qty: data.qty
        }

        const newData = [...productsDatabase, new_person]
        setProductsDatabase(newData)
        localStorage.setItem("@project01_products_database", JSON.stringify(newData))
        return newData

    }

    const edit_products = (data: iRegisterProducts) => {
       
        const editted_products = {
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
                return editted_products
            } else {
                return product
            }
        })

        setProductsDatabase(newDatabase)
        localStorage.setItem("@project01_products_database", JSON.stringify(newDatabase))
        setIdToEdit(0)

    }

    const delete_products = (id: number) => {
        const newDataBase = productsDatabase.filter((product)=>{
            return product.id !== id
        })
        setProductsDatabase(newDataBase)
        localStorage.setItem("@project01_products_database", JSON.stringify(newDataBase))
        setIdToEdit(0)
    }


    return(

        <ProductsContext.Provider value={{
            set_id_edit,
            register_products,
            edit_products,
            delete_products,
            productsDatabase,
            idToEdit
        }}>
          {children}  
        </ProductsContext.Provider>

    )
}