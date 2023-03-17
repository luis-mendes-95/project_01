import React, { createContext, useState } from "react";

interface iModalProviderFunctions {
  showModalAddPeople: boolean;
  showModalEditPeople: boolean;
  showModalAddProducts: boolean;
  showModalEditProducts: boolean;
  setModalAddPeople: () => void;
  setModalEditPeople: () => void;
  setModalAddProducts: () => void;
  setModalEditProducts: () => void;
  showModalAddSales: boolean;
  showModalEditSales: boolean;
  setModalAddSale: () => void;
  setModalEditSale: () => void;
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

  return (
    <ModalContext.Provider
      value={{
        showModalAddPeople,
        showModalEditPeople,
        showModalAddProducts,
        showModalEditProducts,
        setModalAddPeople,
        setModalEditPeople,
        setModalAddProducts,
        setModalEditProducts,
        showModalAddSales,
        showModalEditSales,
        setModalAddSale,
        setModalEditSale
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
