import React, { useContext, useState } from "react";
import { SalesContext } from "../../../contexts/sales";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalContext } from "../../../contexts/modal";
import { ProductsContext } from "../../../contexts/products";
import { RegConfig } from "../../../contexts/regConfig";
import Modal from "../../Modal";
import { FormAdd } from "../../../styles/main";
import { PeopleContext } from "../../../contexts/people";
import { FormValues, IRegisterSales } from "../../../interfaces/sales.interface";
import { saleSchema } from "../../../schemas/sales.schema";

const FormNewSale = () => {

       const {registerSales } = useContext(SalesContext);
    const { setModalAddSale } = useContext(ModalContext);
   const { productsDatabase } = useContext(ProductsContext);
     const { peopleDatabase } = useContext(PeopleContext);
  const { createKey, getDate} = useContext(RegConfig)

  const [disccount, setDisccount] = useState("");
  const [received, setReceived ] = useState("")

  const handleDisccountChange = (e: React.FormEvent<HTMLInputElement>): void => {
    let inputValue = e.currentTarget.value.replace(/\D/g, "");

    if (inputValue.length === 0) {
      setDisccount("");
      return;
    }

    let costInCents = parseInt(inputValue, 10);
    let formattedCost = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(costInCents / 100);

    setDisccount(formattedCost);

  };

  const handleReceivedChange = (e: React.FormEvent<HTMLInputElement>): void => {
    let inputValue = e.currentTarget.value.replace(/\D/g, "");

    if (inputValue.length === 0) {
      setDisccount("");
      return;
    }

    let costInCents = parseInt(inputValue, 10);
    let formattedCost = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(costInCents / 100);

    setReceived(formattedCost);

  };

  const {register, handleSubmit, control, formState: { errors }, setValue } = useForm<FormValues>({
    resolver: yupResolver(saleSchema),
    defaultValues: {
      id: createKey(),
      date: getDate(),
      client: "",
      items: [{ code: null, description: "", price: null, disccount: null, qty: null, cost: null, margin: null, obs: "" }],
      total: 0,
      payType: "",
      received: 0,
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  const completeItemFields = (e: React.FormEvent<HTMLInputElement>, index: number): void => {

    const codeProduct: any = e.currentTarget.value

    const productToFillFields = productsDatabase.filter(product => product.code === codeProduct)

    if (productToFillFields.length > 0) {
          fields[index].code = productToFillFields[0].code
          fields[index].cost = productToFillFields[0].cost
          fields[index].description = productToFillFields[0].description
          fields[index].margin = productToFillFields[0].margin
          fields[index].price = productToFillFields[0].price

          setValue(`items.${index}`, fields[index])

    }
  
  };

  const submit = (data: IRegisterSales) => {
    registerSales(data);
    setModalAddSale();
  };

  return (

    <Modal>

      <FormAdd onSubmit={handleSubmit(submit)} noValidate>
        
        <div className="divCloseButton">
          <button
            onClick={() => {
              setModalAddSale();
            }}
          >
            X
          </button>
        </div>

        <div className="divLabelAndInput">
          <label>CLIENTE</label>
          <select {...register("client")}>
            <option value="">Selecione o cliente</option>
            {peopleDatabase.map((person) => {
              return (
                <option key={person.id} value={person.nomeRazao}>{person.nomeRazao}</option>
              );
            })}
          </select>
        </div>
        {errors.client?.message && (
          <p className="pError" aria-label="error">
            {errors.client.message}
          </p>
        )}

        <div className="divFormFields">

        <label>ITENS:</label>
        <div className="divButtonsControlForms">
        <button className="buttonGreen" onClick={(e) => {
              e.preventDefault()
              append({
                code: null,
                description: "",
                price: null,
                disccount: null,
                qty: null,
                cost: null,
                margin: null,
                obs: "" 
              }
              )
            }}>+</button>
                    <button className="buttonRed" onClick={(e) => {
              e.preventDefault()
              remove(1)
            }}>-</button>
        </div>

      {/*  ********************************************** ITEM INDIVIDUAL ************************************************************** */}

        {fields.map((field, index) => {
          return (
            <div key={field.id} className="divIndividualItemSale ">
              <div className="divLabelAndInput">
                <label>CÓDIGO</label>
                <input
                  placeholder="Digite aqui o código do produto"
                  {...register(`items.${index}.code`, { valueAsNumber: true })}
                  onBlur={(e)=>{
                    completeItemFields(e, index)
                  }}
                />
              </div>

              <div className="divLabelAndInput">
              <label>PRODUTO</label>
                <select {...register(`items.${index}.description`)}>
                  <option value="">SELECIONE O PRODUTO</option>
                  {productsDatabase.map((product) => {
                    return (
                      <option key={product.id} value={product.description}>
                        {product.description}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="divLabelAndInput">
                <label>PREÇO</label>
                <input
                  placeholder="Digite o preço do produto"
                  {...register(`items.${index}.price`, {
                    valueAsNumber: true,
                  })}
                />
              </div>

              <div className="divLabelAndInput">
                <label>DESCONTO</label>
                <input
                  value={disccount}
                  onInput={handleDisccountChange}
                  placeholder="Digite o desconto, se houver"
                  {...register(`items.${index}.disccount`, {
                    valueAsNumber: true,
                  })}
                />
              </div>

              <div className="divLabelAndInput">
                <label>QTD</label>
                <input
                  placeholder="Digite a quantidade"
                  {...register(`items.${index}.qty`, { valueAsNumber: true })}
                />
              </div>

              <div className="divLabelAndInput">
                <label>CUSTO</label>
                <input
                  placeholder="Custo do produto"
                  {...register(`items.${index}.cost`, { valueAsNumber: true })}
                />
              </div>

              <div className="divLabelAndInput">
                <label>MARGEM</label>
                <input
                  placeholder="Margem do produto"
                  {...register(`items.${index}.margin`, { valueAsNumber: true })}
                />
              </div>

              <div className="divLabelAndInput">
                <label>OBS</label>
                <textarea
                  placeholder="Digite aqui informações a respeito deste item"
                  {...register(`items.${index}.obs`)}
                />
              </div>
            </div>
          );
        })}

        </div>

        <div className="divLabelAndInput">
          <label>CUSTO</label>
          <input 
          placeholder="Total Geral da Venda" {...register("totalCost")} />
        </div>

        <div className="divLabelAndInput">
          <label>MARGEM</label>
          <input 
          placeholder="Total Geral da Venda" {...register("totalMargin")} />
        </div>

        <div className="divLabelAndInput">
          <label>TOTAL</label>
          <input 
          placeholder="Total Geral da Venda" {...register("total")} />
        </div>
        {errors.total?.message && (
          <p className="pError" aria-label="error">
            {errors.total.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>RECEBIDO</label>
          <input
            value={received}
            onInput={handleReceivedChange}
            placeholder="Digite o valor recebido"
            {...register("received")}
          />
        </div>
        {errors.received?.message && (
          <p className="pError" aria-label="error">
            {errors.received.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>MÉTODO PAGAMENTO</label>
          <select {...register("payType")}>
            <option value="">Selecione o método de pagamento:</option>
            <option value="avista">A vista</option>
            <option value="debito">Débito</option>
            <option value="credito">Crédito</option>
            <option value="pix">Pix</option>
          </select>
        </div>

        <button type="submit">Save</button>
      </FormAdd>

    </Modal>

  );
};

export default FormNewSale;
