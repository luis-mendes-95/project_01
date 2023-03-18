import React, { createContext, useState } from "react";

interface iModalProviderFunctions {

  showModalAddPeople: boolean;
  showModalAddSales: boolean;
  showModalAddProducts: boolean;
  showModalAddServiceOrder: boolean;

  showModalEditPeople: boolean;
  showModalEditSales: boolean;
  showModalEditProducts: boolean;
  showModalEditServiceOrder: boolean;
  
  setModalAddPeople: () => void;
  setModalAddSale: () => void;
  setModalAddProducts: () => void;


  setModalEditPeople: () => void;
  setModalEditSale: () => void;
  setModalEditProducts: () => void;

  setModalAddServiceOrder: () => void;
  setModalEditServiceOrder: () => void;

}

interface iModalProviderProps {
  children: React.ReactNode;
}

export const ModalContext = createContext<iModalProviderFunctions>(
  {} as iModalProviderFunctions
);

export const ModalProvider = ({ children }: iModalProviderProps) => {
  
  const [showModalAddPeople, setShowModalAddPeople] = useState(false);
  const [showModalEditPeople, setShowModalEditPeople] = useState(false);
  const [showModalAddProducts, setShowModalAddProducts] = useState(false);
  const [showModalEditProducts, setShowModalEditProducts] = useState(false);
  const [showModalAddSales, setShowModalAddSales] = useState(false);
  const [showModalEditSales, setShowModalEditSales] = useState(false);
  const [showModalAddServiceOrder, setShowModalAddServiceOrder] = useState(false);
  const [showModalEditServiceOrder, setShowModalEditServiceOrder] = useState(false);

  const setModalAddPeople = () => {
    setShowModalAddPeople(!showModalAddPeople);
  };

  const setModalEditPeople = () => {
    setShowModalEditPeople(!showModalEditPeople);
  };

  const setModalAddProducts = () => {
    setShowModalAddProducts(!showModalAddProducts);
  };

  const setModalEditProducts = () => {
    setShowModalEditProducts(!showModalEditProducts);
  };

  const setModalAddSale = () => {
    setShowModalAddSales(!showModalAddSales);
  };

  const setModalEditSale = () => {
    setShowModalEditSales(!showModalEditSales);
  };


  const setModalAddServiceOrder = () => {
    setShowModalAddServiceOrder(!showModalAddServiceOrder);
  };

  const setModalEditServiceOrder = () => {
    setShowModalEditServiceOrder(!showModalEditServiceOrder);
  };

  return (
    <ModalContext.Provider
      value={{
        showModalAddPeople,
        showModalEditPeople,
        showModalAddProducts,
        showModalEditProducts,
        showModalAddSales,
        showModalEditSales,
        showModalAddServiceOrder,
        showModalEditServiceOrder,
        setModalAddPeople,
        setModalEditPeople,
        setModalAddProducts,
        setModalEditProducts,
        setModalAddSale,
        setModalEditSale,
        setModalAddServiceOrder,
        setModalEditServiceOrder
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
