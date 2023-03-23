import Modal from "../../Modal";
import { ModalContext } from "../../../contexts/modal";
import { ProductsContext } from "../../../contexts/products";
import { useContext } from "react";
import { FormAdd } from "../../../styles/main";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PeopleContext } from "../../../contexts/people";
import IRegisterProducts from '../../../interfaces/products.interface'
import ProductsSchema from "../../../schemas/products.schema";

const FormNewProducts = () => {
  const { registerProducts } = useContext(ProductsContext);
  const { peopleDatabase } = useContext(PeopleContext);
  const { setModalAddProducts } = useContext(ModalContext);

  const { register, handleSubmit, formState: { errors }} = useForm<IRegisterProducts>({resolver: yupResolver(ProductsSchema)});

  const submit = (data: IRegisterProducts) => {
    registerProducts(data);
    setModalAddProducts();
  };

  return (

    <Modal>

      <FormAdd onSubmit={handleSubmit(submit)}>
        <div className="divCloseButton">
          <button
            onClick={() => {
              setModalAddProducts();
            }}
          >
            X
          </button>
        </div>

        <div className="divLabelAndInput">
          <label>CÓDIGO</label>
          <input
            placeholder="Insira o código do produto aqui"
            {...register("code")}
          />
        </div>
        {errors.code?.message && (
          <p className="pError" aria-label="error">
            {errors.code.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>DESCRIÇÃO</label>
          <input
            placeholder="Insira a descrição do produto aqui"
            {...register("description")}
          />
        </div>
        {errors.description?.message && (
          <p className="pError" aria-label="error">
            {errors.description.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>CUSTO</label>
          <input type="text"
            placeholder="Insira o preço de custo do produto aqui"
            {...register("cost")}
          />
        </div>
        {errors.cost?.message && (
          <p className="pError" aria-label="error">
            {errors.cost.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>PREÇO</label>
          <input
            placeholder="Insira o preço final do produto aqui"
            {...register("price")}
          />
        </div>
        {errors.price?.message && (
          <p className="pError" aria-label="error">
            {errors.price.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>MARGEM</label>
          <input
            placeholder="Insira a margem de contribuição aqui"
            {...register("margin")}
          />
        </div>
        {errors.margin?.message && (
          <p className="pError" aria-label="error">
            {errors.margin.message}
          </p>
        )}

        <div className="divLabelAndInput">
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
          <p className="pError" aria-label="error">
            {errors.supplier.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>ESTOQUE</label>
          <input
            placeholder="Insira a quantidade em estoque"
            {...register("qty")}
          />
        </div>
        {errors.qty?.message && (
          <p className="pError" aria-label="error">
            {errors.qty.message}
          </p>
        )}

        <button type="submit">Save</button>
      </FormAdd>

    </Modal>
    
  );
};

export default FormNewProducts;
