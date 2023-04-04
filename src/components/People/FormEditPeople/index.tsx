import { FormEdit } from "../../../styles/main";
import Modal from "../../Modal";
import { useContext, useState } from "react";
import { ModalContext } from "../../../contexts/modal";
import { PeopleContext } from "../../../contexts/people";
import { useForm } from "react-hook-form";
import IRegisterPeople from "../../../interfaces/people.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import PeopleSchema from "../../../schemas/people.schema";

const FormEditPeople = () => {
  const { setModalEditPeople } = useContext(ModalContext);
  const { peopleDatabase, idToEdit, editPeople, deletePeople } =
    useContext(PeopleContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterPeople>({ resolver: yupResolver(PeopleSchema) });

  const peopleToEdit = peopleDatabase.filter((person) => {
    return person.id === idToEdit;
  });

  const [cpfCnpj, setCpfCnpj] = useState(peopleToEdit[0].cpfCnpj);
  const [cep, setCep] = useState(peopleToEdit[0].cep);
  const [cellPhone, setCellPhone] = useState(peopleToEdit[0].celular);
  const [phone, setPhone] = useState(peopleToEdit[0].telefone);

  const handleCpfCnpjChange = (e: React.FormEvent<HTMLInputElement>): void => {
    let inputValue = e.currentTarget.value.replace(/\D/g, "");

    if (inputValue.length === 14) {
      inputValue = inputValue.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
        "$1.$2.$3/$4-$5"
      );
    } else if (inputValue.length === 11) {
      inputValue = inputValue.replace(/(\d{3})(\d)/, "$1.$2");
      inputValue = inputValue.replace(/(\d{3})(\d)/, "$1.$2");
      inputValue = inputValue.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    setCpfCnpj(inputValue);
  };

  const handleCepChange = (e: React.FormEvent<HTMLInputElement>): void => {
    let inputValue = e.currentTarget.value.replace(/\D/g, "");

    if (inputValue.length === 8) {
      inputValue = inputValue.replace(/^(\d{5})(\d{3})$/, "$1-$2");
    }

    setCep(inputValue);
  };

  const handleCellPhoneChange = (
    e: React.FormEvent<HTMLInputElement>
  ): void => {
    let inputValue = e.currentTarget.value.replace(/\D/g, "");

    if (inputValue.length === 11) {
      inputValue = inputValue.replace(
        /^(\d{2})(\d{1})(\d{4})(\d{4})$/,
        "($1) $2 $3-$4"
      );
    } else {
      inputValue = inputValue.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
    }

    setCellPhone(inputValue);
  };

  const handlePhoneChange = (e: React.FormEvent<HTMLInputElement>): void => {
    let inputValue = e.currentTarget.value.replace(/\D/g, "");

    if (inputValue.length === 11) {
      inputValue = inputValue.replace(
        /^(\d{2})(\d{1})(\d{4})(\d{4})$/,
        "($1) $2 $3-$4"
      );
    } else {
      inputValue = inputValue.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
    }

    setPhone(inputValue);
  };

  const submit = (data: IRegisterPeople) => {
    editPeople(data);
    setModalEditPeople();
  };

  return (
    <Modal>
      <FormEdit onSubmit={handleSubmit(submit)}>
        <div className="divCloseButton">
          <button
            onClick={() => {
              setModalEditPeople();
            }}
          >
            X
          </button>
        </div>

        <div className="divLabelAndInput">
          <label>CPF/CNPJ</label>
          <input
            maxLength={18}
            onInput={handleCpfCnpjChange}
            value={cpfCnpj}
            placeholder="Insira o cpf ou cnpj aqui"
            defaultValue={peopleToEdit[0].cpfCnpj}
            {...register("cpfCnpj")}
          />
        </div>
        {errors.cpfCnpj?.message && (
          <p className="p_error" aria-label="error">
            {errors.cpfCnpj.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>NOME / RAZÃO SOCIAL</label>
          <input
            placeholder="Insira o nome ou razão social aqui"
            defaultValue={peopleToEdit[0].nomeRazao}
            {...register("nomeRazao")}
          />
        </div>
        {errors.nomeRazao?.message && (
          <p className="pError" aria-label="error">
            {errors.nomeRazao.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>APELIDO / NOME FANTASIA</label>
          <input
            placeholder="Insira o apelido ou nome fantasia aqui"
            defaultValue={peopleToEdit[0].apelidoFantasia}
            {...register("apelidoFantasia")}
          />
        </div>
        {errors.apelidoFantasia?.message && (
          <p className="pError" aria-label="error">
            {errors.apelidoFantasia.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>TIPO</label>
          <select {...register("tipo")}>
            <option value="">Selecione o tipo de cadastro</option>
            {peopleToEdit[0].tipo === "CLIENTE" ? (
              <option value="CLIENTE" selected>
                CLIENTE
              </option>
            ) : (
              <option value="CLIENTE">CLIENTE</option>
            )}
            {peopleToEdit[0].tipo === "FORNECEDOR" ? (
              <option value="FORNECEDOR" selected>
                FORNECEDOR
              </option>
            ) : (
              <option value="FORNECEDOR">FORNECEDOR</option>
            )}
            {peopleToEdit[0].tipo === "COLABORADOR" ? (
              <option value="COLABORADOR" selected>
                COLABORADOR
              </option>
            ) : (
              <option value="COLABORADOR">COLABORADOR</option>
            )}
          </select>
        </div>
        {errors.tipo?.message && (
          <p className="pError" aria-label="error">
            {errors.tipo.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>INSCRIÇÃO ESTADUAL</label>
          <input
            placeholder="Insira a inscrição estadual aqui"
            defaultValue={peopleToEdit[0].insEstadual}
            {...register("insEstadual")}
          />
        </div>
        {errors.insEstadual?.message && (
          <p className="pError" aria-label="error">
            {errors.insEstadual.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>INSCRIÇÃO MUNICIPAL</label>
          <input
            placeholder="Insira a inscrição municipal aqui"
            defaultValue={peopleToEdit[0].insMunicipal}
            {...register("insMunicipal")}
          />
        </div>
        {errors.insMunicipal?.message && (
          <p className="pError" aria-label="error">
            {errors.insMunicipal.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>CEP</label>
          <input
            maxLength={9}
            value={cep}
            onInput={handleCepChange}
            placeholder="Insira o CEP aqui"
            defaultValue={peopleToEdit[0].cep}
            {...register("cep")}
          />
        </div>
        {errors.cep?.message && (
          <p className="pError" aria-label="error">
            {errors.cep.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>RUA</label>
          <input
            placeholder="Insira o nome da rua aqui"
            defaultValue={peopleToEdit[0].rua}
            {...register("rua")}
          />
        </div>
        {errors.rua?.message && (
          <p className="pError" aria-label="error">
            {errors.rua.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>Nº</label>
          <input
            placeholder="Insira o Nº aqui"
            defaultValue={peopleToEdit[0].numero}
            {...register("numero")}
          />
        </div>
        {errors.numero?.message && (
          <p className="pError" aria-label="error">
            {errors.numero.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>COMPLEMENTO</label>
          <input
            placeholder="Insira o complemento aqui"
            defaultValue={peopleToEdit[0].complemento}
            {...register("complemento")}
          />
        </div>
        {errors.complemento?.message && (
          <p className="pError" aria-label="error">
            {errors.complemento.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>BAIRRO</label>
          <input
            placeholder="Insira o bairro aqui"
            defaultValue={peopleToEdit[0].bairro}
            {...register("bairro")}
          />
        </div>
        {errors.bairro?.message && (
          <p className="pError" aria-label="error">
            {errors.bairro.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>CIDADE</label>
          <input
            placeholder="Insira a cidade aqui"
            defaultValue={peopleToEdit[0].cidade}
            {...register("cidade")}
          />
        </div>
        {errors.cidade?.message && (
          <p className="pError" aria-label="error">
            {errors.cidade.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>ESTADO</label>
          <input
            maxLength={2}
            placeholder="Insira a cidade aqui"
            {...register("estado")}
          />
        </div>
        {errors.estado?.message && (
          <p className="pError" aria-label="error">
            {errors.estado.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>TELEFONE</label>
          <input
            maxLength={16}
            value={phone}
            onInput={handlePhoneChange}
            placeholder="Insira o telefone aqui"
            defaultValue={peopleToEdit[0].telefone}
            {...register("telefone")}
          />
        </div>
        {errors.telefone?.message && (
          <p className="pError" aria-label="error">
            {errors.telefone.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>CELULAR</label>
          <input
            maxLength={16}
            value={cellPhone}
            onInput={handleCellPhoneChange}
            placeholder="Insira o celular aqui"
            defaultValue={peopleToEdit[0].celular}
            {...register("celular")}
          />
        </div>
        {errors.celular?.message && (
          <p className="pError" aria-label="error">
            {errors.celular.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>E-MAIL</label>
          <input
            placeholder="Insira o e-mail aqui"
            defaultValue={peopleToEdit[0].email}
            {...register("email")}
          />
        </div>
        {errors.email?.message && (
          <p className="pError" aria-label="error">
            {errors.email.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>SITE</label>
          <input
            placeholder="Insira o site aqui"
            defaultValue={peopleToEdit[0].site}
            {...register("site")}
          />
        </div>
        {errors.site?.message && (
          <p className="pError" aria-label="error">
            {errors.site.message}
          </p>
        )}

        <div className="DivButtonsReg">
          <button type="submit" className="buttonSaveReg">
            Salvar
          </button>

          <button
            onClick={() => {
              setModalEditPeople();
              deletePeople(idToEdit);
            }}
            type="submit"
            className="buttonCancelReg"
          >
            Deletar
          </button>
        </div>
        
      </FormEdit>
    </Modal>
  );
};

export default FormEditPeople;
