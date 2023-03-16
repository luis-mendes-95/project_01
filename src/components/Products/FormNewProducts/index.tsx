import Modal from "../../Modal";
import { ModalContext } from "../../../contexts/modal";
import { ProductsContext } from "../../../contexts/products";
import { useContext } from "react";
import { FormAdd } from "../../../styles/main";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PeopleContext } from "../../../contexts/people";

interface iRegisterProducts {
  id: number;
  code: number;
  description: string;
  cost: number;
  price: number;
  margin: number;
  supplier: string;
  qty: number;
}

const FormNewProducts = () => {
  const { register_products } = useContext(ProductsContext);
  const { peopleDatabase } = useContext(PeopleContext);

  const ProductsSchema = yup.object().shape({
    description: yup.string().required("É necessário inserir uma descrição"),
    price: yup.string().required("É necessário inserir o preço"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterProducts>({
    resolver: yupResolver(ProductsSchema),
  });

  const { set_modal_add_products } = useContext(ModalContext);

  const submit = (data: iRegisterProducts) => {
    register_products(data);
    set_modal_add_products();
  };

  return (
    <Modal>
      <FormAdd onSubmit={handleSubmit(submit)}>
        <div className="div_close_button">
          <button
            onClick={() => {
              set_modal_add_products();
            }}
          >
            X
          </button>
        </div>

        <div className="div_label_and_input">
          <label>CÓDIGO</label>
          <input
            placeholder="Insira o código do produto aqui"
            {...register("code")}
          />
        </div>
        {errors.code?.message && (
          <p className="p_error" aria-label="error">
            {errors.code.message}
          </p>
        )}

        <div className="div_label_and_input">
          <label>DESCRIÇÃO</label>
          <input
            placeholder="Insira a descrição do produto aqui"
            {...register("description")}
          />
        </div>
        {errors.description?.message && (
          <p className="p_error" aria-label="error">
            {errors.description.message}
          </p>
        )}

        <div className="div_label_and_input">
          <label>CUSTO</label>
          <input
            placeholder="Insira o preço de custo do produto aqui"
            {...register("cost")}
          />
        </div>
        {errors.cost?.message && (
          <p className="p_error" aria-label="error">
            {errors.cost.message}
          </p>
        )}

        <div className="div_label_and_input">
          <label>PREÇO</label>
          <input
            placeholder="Insira o preço final do produto aqui"
            {...register("price")}
          />
        </div>
        {errors.price?.message && (
          <p className="p_error" aria-label="error">
            {errors.price.message}
          </p>
        )}

        <div className="div_label_and_input">
          <label>MARGEM</label>
          <input
            placeholder="Insira a margem de contribuição aqui"
            {...register("margin")}
          />
        </div>
        {errors.margin?.message && (
          <p className="p_error" aria-label="error">
            {errors.margin.message}
          </p>
        )}

        <div className="div_label_and_input">
          <label>FORNECEDOR</label>
          <select {...register("supplier")}>
            <option value="">Selecione o fornecedor:</option>
            {peopleDatabase.map((person) => {
              return (
                <option key={person.id} value={person.nomeRazao}>{person.nomeRazao}</option>
              );
            })}
          </select>
        </div>

        {errors.supplier?.message && (
          <p className="p_error" aria-label="error">
            {errors.supplier.message}
          </p>
        )}

        <div className="div_label_and_input">
          <label>ESTOQUE</label>
          <input
            placeholder="Insira a quantidade em estoque"
            {...register("qty")}
          />
        </div>
        {errors.qty?.message && (
          <p className="p_error" aria-label="error">
            {errors.qty.message}
          </p>
        )}

        <button type="submit">Save</button>
      </FormAdd>
    </Modal>
  );
};

export default FormNewProducts;
