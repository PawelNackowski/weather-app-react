import styled from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    max-width: fit-content;
    border-radius: 25px;
    padding: 15px;
    border: none;
    box-shadow: 10px -5px 12px -10px rgba(149, 149, 149, 1);
    background-color:rgba(255, 255, 255, 0.65);
`

export const StyledForm = styled.form`
    input {
        text-align: center;
        padding: 6px;
        border-radius: 25px 0 0 25px;
    }
    button {
        text-align: center;
        padding: 6px;
        border-radius: 0 25px 25px 0;
        background-color:rgb(44, 42, 177);
        color: white;
        font-weight: boldy;
    }
`