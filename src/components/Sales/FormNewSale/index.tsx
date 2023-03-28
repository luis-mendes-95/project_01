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

  const [received, setReceived ] = useState("")

  const handleDisccountChange = (e: React.FormEvent<HTMLInputElement>, index: number): void => {

    let inputValue = e.currentTarget.value.replace(/\D/g, "");

    if (inputValue.length === 0) {
      fields[index].disccount = "R$ 0,00"
      return;
    }

    let costInCents = parseInt(inputValue, 10);
    let formattedCost = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(costInCents / 100);

    setValue(`items.${index}.disccount`, formattedCost)

  };

  const handleReceivedChange = (e: React.FormEvent<HTMLInputElement>): void => {
    let inputValue = e.currentTarget.value.replace(/\D/g, "");

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
      items: [{ code: null, description: "", price: null, disccount: 'R$ 0,00', qty: 1, cost: 'R$ 0,00', margin: null, subTotal: 'R$ 0,00', obs: "" }],
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

    if (fields[index].code !== codeProduct) {
      const productToFillFields = productsDatabase.filter(product => product.code === codeProduct)

      if (productToFillFields.length > 0) {
            fields[index].code = productToFillFields[0].code
            fields[index].cost = productToFillFields[0].cost
            fields[index].disccount = "R$ 0,00"
            fields[index].description = productToFillFields[0].description
            fields[index].margin = productToFillFields[0].margin
            fields[index].price = productToFillFields[0].price
            fields[index].qty = 1
            fields[index].subTotal = productToFillFields[0].price
  
            setValue(`items.${index}`, fields[index])
  
      }
    }


  
  };

  const calculateDisccount = (e: React.FormEvent<HTMLInputElement>, index: number): void => {

    const thisItem = productsDatabase.filter(product => product.code === fields[index].code)[0]

    let disccount: any = parseFloat(e.currentTarget.value.replace(/[^\d,]/g, "").replace(",", "."));

    const margin: any = thisItem.margin

    const price: any = thisItem.price

    let newPrice: any = parseFloat(price.replace(/[^\d,]/g, "").replace(",", ".")) - disccount

    newPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(newPrice / 1);

    let newMargin: any = parseFloat(margin.replace(/[^\d,]/g, "").replace(",", ".")) - disccount

    newMargin = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(newMargin / 1);

    disccount = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(disccount / 1);

    fields[index].margin = newMargin
    fields[index].price = newPrice
    fields[index].disccount = disccount
    fields[index].subTotal = newPrice

    setValue(`items.${index}`, fields[index])

  };

  const calculateQty = (e: React.FormEvent<HTMLInputElement>, index: number): void => {

    const thisItem = productsDatabase.filter(product => product.code === fields[index].code)[0]

    let qty = parseInt(e.currentTarget.value)

    let disccount: any = fields[index].disccount

    disccount = parseFloat(disccount.replace(/[^\d,]/g, "").replace(",", "."));

    const margin: any = thisItem.margin

    const price: any = thisItem.price

    const cost: any = thisItem.cost

    let newCost: any = parseFloat(cost.replace(/[^\d,]/g, "").replace(",", ".")) * qty

    newCost = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(newCost / 1);

    let newPrice: any = parseFloat(price.replace(/[^\d,]/g, "").replace(",", ".")) - disccount

    newPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(newPrice / 1);

    let subTotal: any = (parseFloat(price.replace(/[^\d,]/g, "").replace(",", ".")) - disccount) * qty

    subTotal = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(subTotal / 1);

    let newMargin: any = (parseFloat(margin.replace(/[^\d,]/g, "").replace(",", ".")) - disccount) * qty

    newMargin = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(newMargin / 1);

    disccount = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(disccount / 1);

    fields[index].margin = newMargin
    fields[index].price = newPrice
    fields[index].disccount = disccount
    fields[index].qty = qty
    fields[index].subTotal = subTotal
    fields[index].cost = newCost


    setValue(`items.${index}`, fields[index])

  
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
                obs: "" ,
                subTotal: null
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
                  onInput={(e)=>{
                    handleDisccountChange(e, index)
                  }}
                  placeholder="Digite o desconto, se houver"
                  {...register(`items.${index}.disccount`, {
                    valueAsNumber: true,
                  })}
                  onBlur={(e)=>{
                    calculateDisccount(e, index)
                  }}
                />
              </div>

              <div className="divLabelAndInput">
                <label>QTD</label>
                <input
                  placeholder="Digite a quantidade"
                  {...register(`items.${index}.qty`, { valueAsNumber: true })}
                  onBlur={(e)=>{
                    calculateQty(e, index)
                  }}
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
                <label>SUBTOTAL</label>
                <input
                  placeholder="Subtotal deste item"
                  {...register(`items.${index}.subTotal`, { valueAsNumber: true })}
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
