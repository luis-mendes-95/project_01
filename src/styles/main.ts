import styled from "styled-components";

export const UlRegs = styled.ul`

    width: 25%;
    display: flex;
    flex-direction: column;
    gap: 10%;

    h2 {
        color: orange;
    }

    .div_title_ul_regs{
        width: 100%;
        background-color: black;
        display: flex;
        justify-content: center;
    }

    .div_reg_data_item{
        display: flex;
        width: 100%;
    }

    .h3_reg_data_item{
        background-color: black;
        color: orange;
        width: 50%;
        text-align: center;
    }

    .button_add_new{
        background-color: black;
        color: orange;
        width: 50%;
        text-align: center;
    }

    li {
        display: flex;
        width: 100%;
        margin: 2px 0;
    }

    p {
        width: 50%;
        text-align: center;
        border: 1pt solid black;
    }

    button {
        width: 50%;
        cursor: pointer;
        transition: 0.3s;
    }

    button:hover{
        background-color: orange;
        transition: 0.3s;
        color: black;
    }

`;

export const FormAdd = styled.form`

    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 5px;
    justify-content: center;
    align-items: center;

    .div_label_and_input{
        display: flex;
        flex-direction: row;
        gap: 15px;
        justify-content: space-between;
        width: 80%;

        label{
            width: 50%;
            text-align: right;
        }
    }
    
    input, select {
        width: 50%;
    }

    .div_close_button{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    button{
        cursor: pointer;
        transition: 0.3s;
    }

    button:hover{
        transition: 0.3s;
        transform: scale(1.1);
    }

    .p_error{
        color: red;
    }

`;

export const FormEdit = styled.form`

    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 5px;
    justify-content: center;
    align-items: center;

    .div_label_and_input{
        display: flex;
        flex-direction: row;
        gap: 15px;
        justify-content: space-between;
        width: 80%;

        label{
            width: 50%;
            text-align: right;
        }
    }
    
    input, select {
        width: 50%;
    }

    .div_close_button{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    button{
        cursor: pointer;
        transition: 0.3s;
    }

    button:hover{
        transition: 0.3s;
        transform: scale(1.1);
    }

    .p_error{
        color: red;
    }

`;