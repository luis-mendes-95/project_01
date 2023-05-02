import { ModalContext } from "../../../contexts/modal";
import { useContext } from "react";
import { DivAdvertising } from "../../../styles/main"

const HomeLogin = () => {

  return (

    <DivAdvertising>
      <h2>
        LIFE PROJECT
      </h2>
      <h1>
      GERENCIAR SEU NEGÓCIO FÍSICO E VIRTUAL EM UM SÓ LUGAR RÁPIDO E FÁCIL!
      </h1>
      <ul className="ul_features">
        <li>
        👥Cadastro de Pessoas Físicas e Jurídicas
        </li>
        <li>
        👕Produtos e estoque
        </li>
        <li>
        👨‍🎨Pedidos e Ordens de Serviço
        </li>
        <li>
        💰Contas a receber e a pagar
        </li>
        <li>
        🛒Loja Virtual
        </li>
      </ul>
    </DivAdvertising>

  );
};

export default HomeLogin;