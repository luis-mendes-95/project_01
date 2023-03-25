import React, { useContext } from "react";
import { SalesContext } from "../../../contexts/sales";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalContext } from "../../../contexts/modal";
import { ProductsContext } from "../../../contexts/products";
import Modal from "../../Modal";
import { FormAdd } from "../../../styles/main";
import { PeopleContext } from "../../../contexts/people";
import { FormValues, IRegisterSales } from "../../../interfaces/sales.interface";
import { saleSchema } from "../../../schemas/sales.schema";

const FormEditSale = () => {

  const { setModalEditSale } = useContext(ModalContext);
  const { productsDatabase } = useContext(ProductsContext);
  const { peopleDatabase } = useContext(PeopleContext);
  const { salesDatabase, idToEdit, editSales, deleteSales } = useContext(SalesContext);

  const saleToEdit = salesDatabase.filter((sale: IRegisterSales) => {
    return sale.id === idToEdit;
    }
  );

  const {register, handleSubmit, control, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(saleSchema),
    defaultValues: {
      id: saleToEdit[0].id,
      date: saleToEdit[0].date,
      client: saleToEdit[0].client,
      items: saleToEdit[0].items,
      total: saleToEdit[0].total,
      payType: saleToEdit[0].payType,
      received: saleToEdit[0].received,
    },
  });



  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  const submit = (data: IRegisterSales) => {
    editSales(data);
    setModalEditSale();
  };

  return (

    <Modal>

      <FormAdd onSubmit={handleSubmit(submit)} noValidate>
        
        <div className="divCloseButton">
          <button
            onClick={() => {
              setModalEditSale();
            }}
          >
            X
          </button>
        </div>

        <div className="divLabelAndInput">
          <label>CLIENTE</label>
          <select {...register("client")}>
            <option value={saleToEdit[0].client}>{saleToEdit[0].client}</option>
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
              })
            }}>+</button>
                    <button className="buttonRed" onClick={(e) => {
              e.preventDefault()
              remove(1)
            }}>-</button>
        </div>

        {fields.map((field, index) => {
          return (
            <div key={field.id} className="divIndividualItemSale ">
              <div className="divLabelAndInput">
                <label>CÓDIGO</label>
                <input
                  placeholder="Digite aqui o código do produto"
                  
                  {...register(`items.${index}.code`, { valueAsNumber: true })}
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
          <label>TOTAL</label>
          <input placeholder="Total Geral da Venda"
          defaultValue={saleToEdit[0].total}
          {...register("total")} />
        </div>
        {errors.total?.message && (
          <p className="pError" aria-label="error">
            {errors.total.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>RECEBIDO</label>
          <input
          defaultValue={saleToEdit[0].received}
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
            <option value={saleToEdit[0].payType}>{saleToEdit[0].payType}</option>
            <option value="avista">A vista</option>
            <option value="debito">Débito</option>
            <option value="credito">Crédito</option>
            <option value="pix">Pix</option>
          </select>
        </div>

        <button type="submit">Save</button>
        <button onClick={()=>{
          setModalEditSale()
          deleteSales(idToEdit)}}>Delete</button>
        
      </FormAdd>

    </Modal>

  );
};

export default FormEditSale;
