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
    font-size: 26px;
    margin: 8px;
    text-transform: capitalize;
`

export const Image = styled.img`
    width: 64px;
    height: 64px;
    margin-top: 18px;
`

export const StyledInput = styled.input`
    text-align: center;
    padding: 6px;
    border-radius: 12px 0 0 12px;
    border: none;
`
export const StyledButtonForm = styled.button`
    text-align: center;
    padding: 6px;
    padding-right: 10px;
    border-radius: 0 12px 12px 0;
    background-color:rgb(255, 255, 255);
    border: none;
    border-left: 1px solid black;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: rgb(87, 87, 204);
        color: white;
    }
    &:active {
        background-color: rgb(0, 0, 150);
        color: white;
    }
`

export const WeatherDetails = styled.div`
    padding: 10px 0;
`

export const StyledButtonRefresh = styled.button`
    margin-top: 10px;
    padding:6px 10px 6px 10px;
    border-radius: 12px;
    background-color:rgb(255, 255, 255);
    font-weight: bold;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: rgb(87, 87, 204);
        color: white;
        transform: scale(1.1);
        transition: transform 0.1s;
    }
    &:active {
        background-color: rgb(0, 0, 150);
        color: white;
        transform: scale(0.98);
    }
`
