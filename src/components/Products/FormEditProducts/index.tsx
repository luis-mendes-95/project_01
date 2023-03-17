import { FormEdit } from "../../../styles/main";
import Modal from "../../Modal";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/modal";
import { ProductsContext } from "../../../contexts/products";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PeopleContext } from "../../../contexts/people";
import IRegisterProducts from "../../../interfaces/products.interface";
import ProductsSchema from "../../../schemas/products.schema";

const FormEditProducts = () => {

  const { setModalEditProducts } = useContext(ModalContext);
  const { productsDatabase, idToEdit, editProducts, deleteProducts } = useContext(ProductsContext);
  const { peopleDatabase } = useContext(PeopleContext);

  const {register, handleSubmit, formState: { errors } } = useForm<IRegisterProducts>({ resolver: yupResolver(ProductsSchema) });

  const productsToEdit = productsDatabase.filter((product: IRegisterProducts) => {
      return product.id === idToEdit;
    }
  );

  const submit = (data: IRegisterProducts) => {
    editProducts(data);
    setModalEditProducts();
  };

  return (

    <Modal>

      <FormEdit onSubmit={handleSubmit(submit)}>

        <div>
          <button
            onClick={() => {
              setModalEditProducts();
            }}
          >
            X
          </button>
        </div>

        <div className="divLabelAndInput">
          <label>CÓDIGO</label>
          <input
            placeholder="Insira o código do produto aqui"
            defaultValue={productsToEdit[0].code}
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
            defaultValue={productsToEdit[0].description}
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
          <input
            placeholder="Insira o preço de custo do produto aqui"
            defaultValue={productsToEdit[0].cost}
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
            defaultValue={productsToEdit[0].price}
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
            defaultValue={productsToEdit[0].margin}
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
            <option value={productsToEdit[0].supplier}>
              {productsToEdit[0].supplier}
            </option>
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
            defaultValue={productsToEdit[0].qty}
            {...register("qty")}
          />
        </div>
        {errors.qty?.message && (
          <p className="pError" aria-label="error">
            {errors.qty.message}
          </p>
        )}

        <button type="submit">Save</button>
        <button
          onClick={() => {
            setModalEditProducts();
            deleteProducts(idToEdit);
          }}
        >
          Delete
        </button>
        
      </FormEdit>

    </Modal>

  );
};

export default FormEditProducts;
