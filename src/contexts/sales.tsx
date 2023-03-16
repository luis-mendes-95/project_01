import React, { createContext, useState, useEffect } from "react";

interface iItem {
  id?: number;
  code: number | null;
  description: string;
  price: number | null;
  disccount: number | null;
  qty: number | null;
  obs?: string;
}

interface iRegisterSales {
  id: number;
  date: string;
  client: string;
  items: Array<iItem>;
  total: number | null;
  payType?: string;
  received: number | null;
}

interface iSalesProviderFunctions {
  register_sales: (data: iRegisterSales) => void;
  edit_sales: (data: iRegisterSales) => void;
  set_id_edit: (id: number) => void;
  delete_sales: (id: number) => void;
  salesDatabase: iRegisterSales[];
  idToEdit: number;
}

interface iSalesProviderProps {
  children: React.ReactNode;
}

export const SalesContext = createContext<iSalesProviderFunctions>(
  {} as iSalesProviderFunctions
);

export const SalesProvider = ({ children }: iSalesProviderProps) => {
  const createKey = () => Math.floor(Math.random() * 1029384756102201);

  const [salesDatabase, setSalesDatabase] = useState([] as iRegisterSales[]);
  const [idToEdit, setIdToEdit] = useState(0);

  useEffect(() => {
    const checkSalesData = localStorage.getItem("@project01_sales_database");

    if (checkSalesData) {
      setSalesDatabase(JSON.parse(checkSalesData));
    }
  }, []);

  const register_sales = (data: iRegisterSales) => {
    const new_sale = {
      id: createKey(),
      date: data.date,
      client: data.client,
      items: data.items,
      total: data.total,
      received: data.received,
    };

    const newData = [...salesDatabase, new_sale];
    setSalesDatabase(newData);
    localStorage.setItem("@project01_sales_database", JSON.stringify(newData));
    return newData;
  };

  const set_id_edit = (id: number) => {
    setIdToEdit(id);
  };

  const edit_sales = (data: iRegisterSales) => {
    const editted_sale = {
      id: idToEdit,
      date: data.date,
      client: data.client,
      items: data.items,
      total: data.total,
      received: data.received,
    };

    const newDatabase = salesDatabase.map((sale) => {
      if (sale.id === idToEdit) {
        return editted_sale;
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

  const delete_sales = (id: number) => {
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
        register_sales,
        edit_sales,
        delete_sales,
        salesDatabase,
        idToEdit,
        set_id_edit,
      }}
    >
      {children}
    </SalesContext.Provider>
  );
};
