import React, { useContext } from "react";
import { SalesContext } from "../../../contexts/sales";
import { ServiceOrderContext } from "../../../contexts/serviceOrders";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalContext } from "../../../contexts/modal";
import { ProductsContext } from "../../../contexts/products";
import { RegConfig } from "../../../contexts/regConfig";
import Modal from "../../Modal";
import { FormAdd } from "../../../styles/main";
import { PeopleContext } from "../../../contexts/people";
import { FormValues, IRegisterServiceOrder } from "../../../interfaces/serviceOrder.interface";
import { saleSchema } from "../../../schemas/sales.schema";

const FormNewServiceOrder = () => {

  const { registerServiceOrder } = useContext(ServiceOrderContext);
  const { setModalAddServiceOrder } = useContext(ModalContext);
  const { productsDatabase } = useContext(ProductsContext);
  const { salesDatabase } = useContext(SalesContext);
  const { serviceOrdersDatabase } = useContext(ServiceOrderContext)
  const { peopleDatabase } = useContext(PeopleContext);
  const { createKey, getDate } = useContext(RegConfig);

  const { register, handleSubmit, control, formState: { errors } } = useForm<FormValues> ({
    resolver: yupResolver(saleSchema),
    defaultValues: {
      id: createKey(),
      date: getDate(),
      client: "",
      items: [{ code: null, description: "", workDescription: "" }]
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  const submit = (data: IRegisterServiceOrder) => {
    console.log('funfando')
    registerServiceOrder(data);
    setModalAddServiceOrder();
  };

  return (

    <Modal>

      <FormAdd onSubmit={handleSubmit(submit)} noValidate>

        <div className="divCloseButton">
          <button
            onClick={(e) => {
              e.preventDefault()
              setModalAddServiceOrder();
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
                qty: null,
                workDescription: ""
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
                  <label>QTD</label>
                  <input
                    placeholder="Digite a quantidade"
                    {...register(`items.${index}.qty`, { valueAsNumber: true })}
                  />
                </div>

                <div className="divLabelAndInput">
                  <label>A fazer:</label>
                  <textarea
                    placeholder="Digite aqui instruções do serviço"
                    {...register(`items.${index}.workDescription`)}
                  />
                </div>
              </div>
            );
          })}

        </div>

        <button type="submit">Save</button>

      </FormAdd>

    </Modal>

  );
};

export default FormNewServiceOrder;
