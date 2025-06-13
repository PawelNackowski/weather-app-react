import styled from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 280px;
    border-radius: 25px;
    padding: 15px;
    border: none;
    box-shadow: 10px -5px 12px -10px rgba(149, 149, 149, 1);
    background-color:rgba(255, 255, 255, 0.65);
    word-wrap: break-word;
    text-align: center;
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    `
export const Header = styled.h1`
    margin: 10px;
    text-transform: capitalize;
`

export const Image = styled.img`
    width: 64px;
    height: 64px;
    margin-top: 10px;
`

export const StyledInput = styled.input`
    text-align: center;
    padding: 6px;
    border-radius: 25px 0 0 25px;
`
export const StyledButtonForm = styled.button`
    text-align: center;
    padding: 6px;
    border-radius: 0 25px 25px 0;
    background-color:rgb(4, 0, 255);
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: rgb(0, 0, 200);
    }
    &:active {
        background-color: rgb(0, 0, 150);
    }
`

export const WeatherDetails = styled.div`
    padding: 10px 0;
`

export const StyledButtonRefresh = styled.button`
    margin-top: 10px;
    padding:6px 10px 6px 10px;
    border-radius: 25px;
    background-color:rgb(4, 0, 255);
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: rgb(0, 0, 200);
        transform: scale(1.1);
        transition: transform 0.1s;
    }
    &:active {
        background-color: rgb(0, 0, 150);
        transform: scale(0.98);
    }
`
