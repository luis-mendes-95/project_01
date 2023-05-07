import { FormEdit } from "../../../styles/main";
import Modal from "../../Modal";
import { useContext, useState } from "react";
import { ModalContext } from "../../../contexts/modal";
import { ReceivablesContext } from "../../../contexts/receivables";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PeopleContext } from "../../../contexts/people";
import IRegisterReceivable from "../../../interfaces/receivables.interface";
import ReceivablesSchema from "../../../schemas/receivables.schema";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormEditReceivables = () => {
  const { setModalEditReceivables } = useContext(ModalContext);
  const { receivablesDatabase, idToEdit, editReceivable, deleteReceivable } = useContext(ReceivablesContext);
  const { peopleDatabase } = useContext(PeopleContext);

  const receivableToEdit = receivablesDatabase.filter(
    (receivable: IRegisterReceivable) => {
      return receivable.id === idToEdit;
    }
  );

  const [originalPrice, setOriginalPrice] = useState("R$ 0,00");
  const [paidOnSale, setPaidOnSale] = useState("R$ 0,00");
  const [owing, setOwing] = useState("R$ 0,00");
  const [received, setReceived] = useState("R$ 0,00");

  const handleOriginalPriceChange = (e: any): void => {
    let inputValue = e.currentTarget.value.replace(/\D/g, "");

    if (inputValue.length === 0) {
      setOriginalPrice("");
      return;
    }

    let originalPriceInCents = parseInt(inputValue, 10);
    let formattedOriginalPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(originalPriceInCents / 100);

    setOriginalPrice(formattedOriginalPrice);
  };

  const handleOwingChange = (): void => {
    let numberOriginalPrice = parseFloat(
      originalPrice.replace(/[^\d,]/g, "").replace(",", ".")
    );
    let numberpaidOnSale = parseFloat(paidOnSale.replace(/[^\d,]/g, "").replace(",", "."));
    let numberReceived = parseFloat(received.replace(/[^\d,]/g, "").replace(",", "."));

    const yetOwing = numberOriginalPrice - numberpaidOnSale - numberReceived;

    const result =
      "R$ " +
      yetOwing.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    setOwing(result);
  };

  const handleReceivedChange = (e: React.FormEvent<HTMLInputElement>): void => {
    let inputValue = e.currentTarget.value.replace(/\D/g, "");

    if (inputValue.length === 0) {
      setReceived("");
      return;
    }

    let receivedInCents = parseInt(inputValue, 10);
    let formattedReceived = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(receivedInCents / 100);

    setReceived(formattedReceived);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterReceivable>({ resolver: yupResolver(ReceivablesSchema) });

  const submit = (data: IRegisterReceivable) => {

  return (
    <Modal>
      <FormEdit onSubmit={handleSubmit(submit)}>
        <div className="divCloseButton">
          <button
            onClick={() => {
              setModalEditReceivables();
            }}
          >
            X
          </button>
        </div>
        <div className="divCloseButton">
          <button
            onClick={() => {
              setModalAddReceivable();
            }}
          >
            X
          </button>
        </div>

        <div className="divLabelAndInput">
          <label>FORNECEDOR/CLIENTE</label>
          <select {...register("supplier")}>
            <option value="">Selecione o cliente/fornecedor:</option>
            {peopleDatabase.map((person) => {
              return (
                <option key={person.id} value={person.nomeRazao}>
                  {person.nomeRazao}
                </option>
              );
            })}
          </select>
        </div>
        {errors.supplierCLient?.message && (
          <p className="pError" aria-label="error">
            {errors.supplierClient.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>DESCRIÇÃO</label>
          <input
            placeholder="Insira a descrição do valor a receber"
            defaultValue={receivableToEdit[0].description}
            {...register("description")}
          />
        </div>
        {errors.description?.message && (
          <p className="pError" aria-label="error">
            {errors.description.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>VALOR ORIGINAL</label>
          <input
            type="text"
            value={originalPrice}
            onInput={handleOriginalPriceChange}
            placeholder="Insira o valor original aqui"
            defaultValue={receivableToEdit[0].originalPrice}
            {...register("originalPrice")}
          />
        </div>
        {errors.originalPrice?.message && (
          <p className="pError" aria-label="error">
            {errors.originalPrice.message}
          </p>
        )}

        <div className="DivButtonsReg">
          <button type="submit" className="buttonSaveReg">
            Salvar
          </button>

          <button
            onClick={() => {
              setModalEditReceivables();
              deleteReceivable(idToEdit);
            }}
            className="buttonCancelReg"
          >
            Deletar
          </button>
        </div>

      </FormEdit>
    </Modal>
  );
};

export default FormEditReceivables;
