import Modal from "../../Modal";
import { ModalContext } from "../../../contexts/modal";
import { PeopleContext } from "../../../contexts/people";
import { useContext, useState } from "react";
import { FormAdd } from "../../../styles/main";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import IRegisterPeople from "../../../interfaces/people.interface";
import PeopleSchema from "../../../schemas/people.schema";

const FormNewPeople = () => {

  const { registerPeople } = useContext(PeopleContext);

  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterPeople>({resolver: yupResolver(PeopleSchema)});

  const { setModalAddPeople } = useContext(ModalContext);

  const [cpfCnpj, setCpfCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [phone, setPhone] = useState('');

  const handleCpfCnpjChange = (e: React.FormEvent<HTMLInputElement>): void => {
    
    let inputValue = e.currentTarget.value.replace(/\D/g, '');

    if (inputValue.length === 14) {
      inputValue = inputValue.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    } else if (inputValue.length === 11) {
      inputValue = inputValue.replace(/(\d{3})(\d)/, '$1.$2');
      inputValue = inputValue.replace(/(\d{3})(\d)/, '$1.$2');
      inputValue = inputValue.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
  
    setCpfCnpj(inputValue);

  }

  const handleCepChange = (e: React.FormEvent<HTMLInputElement>): void => {
    
    let inputValue = e.currentTarget.value.replace(/\D/g, '');

    if (inputValue.length === 8) {
      inputValue = inputValue.replace(/^(\d{5})(\d{3})$/, '$1-$2');
    }
  
    setCep(inputValue);

  }

  const handleCellPhoneChange = (e: React.FormEvent<HTMLInputElement>): void => {
    
    let inputValue = e.currentTarget.value.replace(/\D/g, '');

    if (inputValue.length === 11) {
      inputValue = inputValue.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2 $3-$4');
    } else {
      inputValue = inputValue.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    }
  
    setCellPhone(inputValue);

  }

  const handlePhoneChange = (e: React.FormEvent<HTMLInputElement>): void => {
    
    let inputValue = e.currentTarget.value.replace(/\D/g, '');

    if (inputValue.length === 11) {
      inputValue = inputValue.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2 $3-$4');
    } else {
      inputValue = inputValue.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    }
  
    setPhone(inputValue);

  }

  const submit = (data: IRegisterPeople) => {
    registerPeople(data);
    setModalAddPeople();
  };

  return (

    <Modal>

      <FormAdd onSubmit={handleSubmit(submit)}>

        <div className="divCloseButton">
          <button
            onClick={() => {
              setModalAddPeople();
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
            {...register("cpfCnpj")}
          />
        </div>
        {errors.cpfCnpj?.message && (
          <p className="pError" aria-label="error">
            {errors.cpfCnpj.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>NOME / RAZÃO SOCIAL</label>
          <input
            placeholder="Insira o nome ou razão social aqui"
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
            <option value="CLIENTE">CLIENTE</option>
            <option value="FORNECEDOR">FORNECEDOR</option>
            <option value="COLABORADOR">COLABORADOR</option>
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
            {...register("site")}
          />
        </div>
        {errors.site?.message && (
          <p className="pError" aria-label="error">
            {errors.site.message}
          </p>
        )}

        <div className="DivButtonsReg">

          <button type="submit" className="buttonSaveReg">Salvar</button>

          <button onClick={setModalAddPeople} className="buttonCancelReg">Cancelar</button>

        </div>

      </FormAdd>
      
    </Modal>
  );
};

export default FormNewPeople;
