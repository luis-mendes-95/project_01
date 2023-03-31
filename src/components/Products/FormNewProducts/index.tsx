import Modal from "../../Modal";
import { ModalContext } from "../../../contexts/modal";
import { ProductsContext } from "../../../contexts/products";
import { useContext, useState } from "react";
import { FormAdd } from "../../../styles/main";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PeopleContext } from "../../../contexts/people";
import IRegisterProducts from "../../../interfaces/products.interface";
import ProductsSchema from "../../../schemas/products.schema";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormNewProducts = () => {
  const { registerProducts, productsDatabase } = useContext(ProductsContext);
  const { peopleDatabase } = useContext(PeopleContext);
  const { setModalAddProducts } = useContext(ModalContext);

  const [cost, setCost] = useState("");
  const [price, setPrice] = useState("");
  const [margin, setMargin] = useState("");

  const handleCostChange = (e: React.FormEvent<HTMLInputElement>): void => {
    let inputValue = e.currentTarget.value.replace(/\D/g, "");

    if (inputValue.length === 0) {
      setCost("");
      return;
    }

    let costInCents = parseInt(inputValue, 10);
    let formattedCost = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(costInCents / 100);

    setCost(formattedCost);
  };

  const handleMarginChange = (): void => {
    let numberPrice = parseFloat(
      price.replace(/[^\d,]/g, "").replace(",", ".")
    );
    let numberCost = parseFloat(cost.replace(/[^\d,]/g, "").replace(",", "."));

    const margin = numberPrice - numberCost;

    const result =
      "R$ " +
      margin.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    setMargin(result);
  };

  const handlePriceChange = (e: React.FormEvent<HTMLInputElement>): void => {
    let inputValue = e.currentTarget.value.replace(/\D/g, "");

    if (inputValue.length === 0) {
      setPrice("");
      return;
    }

    let costInCents = parseInt(inputValue, 10);
    let formattedCost = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(costInCents / 100);

    setPrice(formattedCost);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterProducts>({ resolver: yupResolver(ProductsSchema) });

  const submit = (data: IRegisterProducts) => {
    const checkCodeExistence = productsDatabase.filter(
      (product) => product.code === data.code
    );

    if (checkCodeExistence.length > 0) {
      return toast.error("CÓDIGO DE PRODUTO DUPLICADO");
    }

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
          <input
            type="text"
            value={cost}
            onInput={handleCostChange}
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
            value={price}
            onInput={handlePriceChange}
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
            value={margin}
            onFocus={handleMarginChange}
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
                <option key={person.id} value={person.nomeRazao}>
                  {person.nomeRazao}
                </option>
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

        <div className="DivButtonsReg">
          <button type="submit" className="buttonSaveReg">
            Salvar
          </button>

          <button onClick={setModalAddProducts} className="buttonCancelReg">
            Cancelar
          </button>
        </div>

      </FormAdd>
    </Modal>
  );
};

export default FormNewProducts;
