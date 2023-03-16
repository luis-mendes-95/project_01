import React, { createContext, useState } from "react";

interface iModalProviderFunctions {
  showModalAddPeople: boolean;
  showModalEditPeople: boolean;
  showModalAddProducts: boolean;
  showModalEditProducts: boolean;
  set_modal_add_people: () => void;
  set_modal_edit_people: () => void;
  set_modal_add_products: () => void;
  set_modal_edit_products: () => void;
  showModalAddSales: boolean;
  showModalEditSales: boolean;
  set_modal_add_sale: () => void;
  set_modal_edit_sale: () => void;
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

  const set_modal_add_people = () => {
    setShowModalAddPeople(!showModalAddPeople);
  };

  const set_modal_edit_people = () => {
    setShowModalEditPeople(!showModalEditPeople);
  };

  const set_modal_add_products = () => {
    setShowModalAddProducts(!showModalAddProducts);
  };

  const set_modal_edit_products = () => {
    setShowModalEditProducts(!showModalEditProducts);
  };

  const set_modal_add_sale = () => {
    setShowModalAddSales(!showModalAddSales);
  };

  const set_modal_edit_sale = () => {
    setShowModalEditSales(!showModalEditSales);
  };

  return (
    <ModalContext.Provider
      value={{
        showModalAddPeople,
        showModalEditPeople,
        showModalAddProducts,
        showModalEditProducts,
        set_modal_add_people,
        set_modal_edit_people,
        set_modal_add_products,
        set_modal_edit_products,
        showModalAddSales,
        showModalEditSales,
        set_modal_add_sale,
        set_modal_edit_sale
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
