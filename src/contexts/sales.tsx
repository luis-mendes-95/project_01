import React, { createContext, useState, useEffect } from "react";
import { IRegisterSales } from '../interfaces/sales.interface';
import { RegConfig } from "../contexts/regConfig";
import { useContext } from "react";

interface iSalesProviderFunctions {
  registerSales: (data: IRegisterSales) => void;
  editSales: (data: IRegisterSales) => void;
  setIdEdit: (id: number) => void;
  deleteSales: (id: number) => void;
  salesDatabase: IRegisterSales[];
  idToEdit: number;
}

interface iSalesProviderProps {
  children: React.ReactNode;
}

export const SalesContext = createContext<iSalesProviderFunctions>(
  {} as iSalesProviderFunctions
);

export const SalesProvider = ({ children }: iSalesProviderProps) => {

  const { createKey } = useContext(RegConfig)

  const [salesDatabase, setSalesDatabase] = useState([] as IRegisterSales[]);
  const [idToEdit, setIdToEdit] = useState(0);

  useEffect(() => {
    const checkSalesData = localStorage.getItem("@project01_sales_database");

    if (checkSalesData) {
      setSalesDatabase(JSON.parse(checkSalesData));
    }
  }, []);

  const registerSales = (data: IRegisterSales) => {
    const newSale = {
      id: createKey(),
      date: data.date,
      client: data.client,
      items: data.items,
      total: data.total,
      received: data.received,
    };

    const newData = [...salesDatabase, newSale];
    setSalesDatabase(newData);
    localStorage.setItem("@project01_sales_database", JSON.stringify(newData));
    return newData;
  };

  const setIdEdit = (id: number) => {
    setIdToEdit(id);
  };

  const editSales = (data: IRegisterSales) => {
    const edittedSale = {
      id: idToEdit,
      date: data.date,
      client: data.client,
      items: data.items,
      total: data.total,
      received: data.received,
    };

    const newDatabase = salesDatabase.map((sale) => {
      if (sale.id === idToEdit) {
        return edittedSale;
      } else {
        return sale;
      }
    });

    setSalesDatabase(newDatabase);
    localStorage.setItem(
      "@project01_sales_database",
      JSON.stringify(newDatabase)
    );
    setIdToEdit(0);
  };

  const deleteSales = (id: number) => {
    const newDataBase = salesDatabase.filter((sale) => {
      return sale.id !== id;
    });
    setSalesDatabase(newDataBase);
    localStorage.setItem(
      "@project01_sales_database",
      JSON.stringify(newDataBase)
    );
    setIdToEdit(0);
  };


  return (
    <SalesContext.Provider
      value={{
        registerSales,
        editSales,
        deleteSales,
        salesDatabase,
        idToEdit,
        setIdEdit
      }}
    >
      {children}
    </SalesContext.Provider>
  );
};


