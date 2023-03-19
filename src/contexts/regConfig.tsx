import currency from "currency.js";
import React, { createContext } from "react";

interface IRegConfigProviderFunctions {
  createKey: () => number;
  getDate: () => string;
  formatCurrency: (value: any) => void; // função acoplada à biblioteca currency
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // função também acoplada à outra função criada para manejar a currency lib
}

interface IRegConfigProviderProps {
  children: React.ReactNode;
}

export const RegConfig = createContext<IRegConfigProviderFunctions>(
  {} as IRegConfigProviderFunctions
);

export const RegConfigProvider = ({ children }: IRegConfigProviderProps) => {

  const createKey = () => Math.floor(Math.random() * 1029384756102201);

  const getDate = () => {
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

  const formatCurrency = (value: any): any => {

    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { //função também acoplada à biblioteca currency para formatar o valor do input para moeda BRL
    const value = event.target.value
    // .replace(".", "");
    const formattedValue = formatCurrency(Number(value));
    event.target.value = formattedValue;
  };


  return (
    <RegConfig.Provider
      value={{
        createKey,
        getDate,
        formatCurrency,
        handleInputChange
      }}
    >
      {children}
    </RegConfig.Provider>
  );
};
