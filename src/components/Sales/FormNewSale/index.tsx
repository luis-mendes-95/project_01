
import React, { InputHTMLAttributes, useContext } from "react";
import { SalesContext } from "../../../contexts/sales";
import { useForm, Control, useFieldArray, useWatch } from "react-hook-form";
import { useState, useCallback } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalContext } from "../../../contexts/modal";
import { ProductsContext } from "../../../contexts/products";
import Modal from "../../Modal";
import { FormAdd } from "../../../styles/main";
import { PeopleContext } from "../../../contexts/people";

interface iItem {
  id?: number;
  code: number | null;
  description: string;
  price: number | null;
  disccount: number | null;
  qty: number | null;
  obs?: string;
}

interface iRegisterSales {
  id: number;
  date: string;
  client: string;
  items: Array<iItem>;
  total: number | null;
  payType?: string;
  received: number | null;
}

const FormNewSale = () => {

  interface iItemPrice {
    price: number;
  }

  const [itemPrice, setItemPrice] = useState<iItemPrice>({} as iItemPrice);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setItemPrice({
        ...itemPrice,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [itemPrice]
  );

  const createKey = () => Math.floor(Math.random() * 1029384756102201);

  const {
    // itemsQty,
    // setItemsQtySum,
    // SetItemsQtySub,
    // addSale,
    salesDatabase,
    register_sales,
  } = useContext(SalesContext);

  const {
    showModalAddSales,
    showModalEditSales,
    set_modal_add_sale,
    set_modal_edit_sale,
  } = useContext(ModalContext);

  const { productsDatabase } = useContext(ProductsContext);
  const { peopleDatabase } = useContext(PeopleContext);

  type FormValues = iRegisterSales;

  const saleSchema = yup.object().shape({
    client: yup.string(),
  });

  const get_date = () => {
    let day: string | number = new Date().getDate().toString();
    let week_day: string | number = new Date().getDay().toString();
    let year: string | number = new Date().getFullYear().toString();
    let month: string | number = new Date().getMonth().toString();
    let hour: string | number = new Date().getHours().toString();
    let minute: string | number = new Date().getMinutes().toString();
    let second: string | number = new Date().getSeconds().toString();

    if (week_day === "1") {
      week_day = "Segunda-feira";
    } else if (week_day === "2") {
      week_day = "Terça-Feira";
    } else if (week_day === "3") {
      week_day = "Quarta-feira";
    } else if (week_day === "4") {
      week_day = "Quinta-feira";
    } else if (week_day === "5") {
      week_day = "Sexta-feira";
    } else if (week_day === "6") {
      week_day = "Sábado";
    } else if (week_day === "7") {
      week_day = "Domingo";
    }

    if (month === "0") {
      month = "Janeiro";
    } else if (month === "1") {
      month = "Fevereiro";
    } else if (month === "2") {
      month = "Março";
    } else if (month === "3") {
      month = "Abril";
    } else if (month === "4") {
      month = "Maio";
    } else if (month === "5") {
      month = "Junho";
    } else if (month === "6") {
      month = "Julho";
    } else if (month === "7") {
      month = "Agosto";
    } else if (month === "8") {
      month = "Setembro";
    } else if (month === "9") {
      month = "Outubro";
    } else if (month === "10") {
      month = "Novembro";
    } else if (month === "11") {
      month = "Dezembro";
    }

    if (minute === "0") {
      minute = "00";
    } else if (minute === "1") {
      minute = "01";
    } else if (minute === "2") {
      minute = "02";
    } else if (minute === "3") {
      minute = "03";
    } else if (minute === "4") {
      minute = "04";
    } else if (minute === "5") {
      minute = "05";
    } else if (minute === "6") {
      minute = "06";
    } else if (minute === "7") {
      minute = "07";
    } else if (minute === "8") {
      minute = "08";
    } else if (minute === "9") {
      minute = "09";
    }

    const complete_date = `${day}/${month}/${year} ${hour}:${minute}:${second}`;

    return complete_date;
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(saleSchema),
    defaultValues: {
      id: createKey(),
      date: get_date(),
      client: "",
      items: [{ code: null, description: "", price: null, obs: "" }],
      total: null,
      payType: "",
      received: null,
    },
  });

  const { fields, append, prepend, remove } = useFieldArray({
    name: "items",
    control,
  });

  const submit = (data: iRegisterSales) => {
    let result = register_sales(data);
    set_modal_add_sale();
  };

  //   const getQtyToRender = () => {
  //     let temp = 1;

  //     let qtyToRender = [];

  //     for (let i = 1; i <= itemsQty; i++) {
  //       if (itemsQty === 0) {
  //         return qtyToRender;
  //       }

  //       if (temp <= itemsQty) {
  //         qtyToRender.push("add");
  //       }
  //     }

  //     return qtyToRender;
  //   };

  return (
    <Modal>
      <FormAdd onSubmit={handleSubmit(submit)} noValidate>
        <div className="div_close_button">
          <button
            onClick={() => {
              set_modal_add_sale();
            }}
          >
            X
          </button>
        </div>

        <div className="div_label_and_input">
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
          <p className="p_error" aria-label="error">
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
              <div className="div_label_and_input">
                <label>CÓDIGO</label>
                <input
                  placeholder="Digite aqui o código do produto"
                  {...register(`items.${index}.code`, { valueAsNumber: true })}
                />
              </div>

              <div className="div_label_and_input">
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

              <div className="div_label_and_input">
                <label>PREÇO</label>
                <input
                  placeholder="Digite o preço do produto"
                  {...register(`items.${index}.price`, {
                    valueAsNumber: true,
                  })}
                />
              </div>

              <div className="div_label_and_input">
                <label>DESCONTO</label>
                <input
                  placeholder="Digite o desconto, se houver"
                  {...register(`items.${index}.disccount`, {
                    valueAsNumber: true,
                  })}
                />
              </div>

              <div className="div_label_and_input">
                <label>QTD</label>
                <input
                  placeholder="Digite a quantidade"
                  {...register(`items.${index}.qty`, { valueAsNumber: true })}
                />
              </div>

              <div className="div_label_and_input">
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

        <div className="div_label_and_input">
          <label>TOTAL</label>
          <input placeholder="Total Geral da Venda" {...register("total")} />
        </div>
        {errors.total?.message && (
          <p className="p_error" aria-label="error">
            {errors.total.message}
          </p>
        )}

        <div className="div_label_and_input">
          <label>RECEBIDO</label>
          <input
            placeholder="Digite o valor recebido"
            {...register("received")}
          />
        </div>
        {errors.received?.message && (
          <p className="p_error" aria-label="error">
            {errors.received.message}
          </p>
        )}

        <div className="div_label_and_input">
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
