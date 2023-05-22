import React, { createContext, useState } from "react";

interface iModalProviderFunctions {

  showModalAddPeople: boolean;
  showModalAddSales: boolean;
  showModalAddProducts: boolean;
  showModalAddServiceOrder: boolean;
  showModalSignUp: boolean;
  showModalAddReceivable: boolean;

  showModalEditPeople: boolean;
  showModalEditSales: boolean;
  showModalEditProducts: boolean;
  showModalEditServiceOrder: boolean;
  showModalLogin: boolean;
  showModalEditReceivable: boolean;

  setModalAddPeople: () => void;
  setModalAddSale: () => void;
  setModalAddProducts: () => void;
  setModalAddServiceOrder: () => void;
  setModalSignUp: () => void;
  setModalAddReceivable: () => void;

  setModalEditPeople: () => void;
  setModalEditSale: () => void;
  setModalEditProducts: () => void;
  setModalEditServiceOrder: () => void;
  setModalLogin: () => void;
  setModalEditReceivable: () => void;

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
  const [showModalSignUp, setShowModalSignUp] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalAddReceivable, setShowModalAddReceivable] = useState(false);
  const [showModalEditReceivable, setShowModalEditReceivable] = useState(false);

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

  const setModalSignUp = () => {
    setShowModalSignUp(!showModalSignUp)
  }

  const setModalLogin = () => {
    setShowModalLogin(!showModalLogin)
  }

  const setModalAddReceivable = () => {
    setShowModalAddReceivable(!showModalAddReceivable);
  };

  const setModalEditReceivable= () => {
    setShowModalEditReceivable(!showModalEditReceivable);
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
        showModalSignUp,
        showModalLogin,
        showModalAddReceivable,
        showModalEditReceivable,
        setModalAddPeople,
        setModalEditPeople,
        setModalAddProducts,
        setModalEditProducts,
        setModalAddSale,
        setModalEditSale,
        setModalAddServiceOrder,
        setModalEditServiceOrder,
        setModalLogin,
        setModalSignUp,
        setModalAddReceivable,
        setModalEditReceivable
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
