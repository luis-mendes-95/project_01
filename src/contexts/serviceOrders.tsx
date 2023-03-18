import React, { createContext, useState, useEffect } from "react";
import { IRegisterServiceOrder } from '../interfaces/serviceOrder.interface';
import { RegConfig } from "../contexts/regConfig";
import { useContext } from "react";

interface IServiceOrderProviderFunctions {
  registerServiceOrder: (data: IRegisterServiceOrder) => void;
  editServiceOrder: (data: IRegisterServiceOrder) => void;
  setIdEdit: (id: number) => void;
  deleteServiceOrder: (id: number) => void;
  serviceOrdersDatabase: IRegisterServiceOrder[];
  idToEdit: number;
}

interface IServiceOrderProps {
  children: React.ReactNode;
}

export const ServiceOrderContext = createContext<IServiceOrderProviderFunctions>(
  {} as IServiceOrderProviderFunctions
);

export const ServiceOrderProvider = ({ children }: IServiceOrderProps) => {

  const { createKey } = useContext(RegConfig)

  const [serviceOrdersDatabase, setServiceOrdersDatabase] = useState([] as IRegisterServiceOrder[]);
  const [idToEdit, setIdToEdit] = useState(0);

  useEffect(() => {
    const checkServiceOrderData = localStorage.getItem("@project01_service_orders_database");

    if (checkServiceOrderData) {
      setServiceOrdersDatabase(JSON.parse(checkServiceOrderData));
    }
  }, []);

  const registerServiceOrder = (data: IRegisterServiceOrder) => {
    const newServiceOrder = {
      id: createKey(),
      date: data.date,
      client: data.client,
      items: data.items,
    };

    const newData = [...serviceOrdersDatabase, newServiceOrder];
    setServiceOrdersDatabase(newData);
    localStorage.setItem("@project01_service_orders_database", JSON.stringify(newData));
    return newData;
  };

  const setIdEdit = (id: number) => {
    setIdToEdit(id);
  };

  const editServiceOrder = (data: IRegisterServiceOrder) => {
    const edittedServiceOrder = {
      id: idToEdit,
      date: data.date,
      client: data.client,
      items: data.items
    };

    const newDatabase = serviceOrdersDatabase.map((serviceOrder) => {
      if (serviceOrder.id === idToEdit) {
        return edittedServiceOrder;
      } else {
        return serviceOrder;
      }
    });

    setServiceOrdersDatabase(newDatabase);
    localStorage.setItem(
      "@project01_service_orders_database",
      JSON.stringify(newDatabase)
    );
    setIdToEdit(0);
  };

  const deleteServiceOrder = (id: number) => {
    const newDataBase = serviceOrdersDatabase.filter((serviceOrder) => {
      return serviceOrder.id !== id;
    });
    setServiceOrdersDatabase(newDataBase);
    localStorage.setItem(
      "@project01_service_orders_database",
      JSON.stringify(newDataBase)
    );
    setIdToEdit(0);
  };

  return (
    <ServiceOrderContext.Provider
      value={{
        registerServiceOrder,
        editServiceOrder,
        deleteServiceOrder,
        serviceOrdersDatabase,
        idToEdit,
        setIdEdit,
      }}
    >
      {children}
    </ServiceOrderContext.Provider>
  );
};
