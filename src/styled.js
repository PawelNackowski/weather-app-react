import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 20px;

    @media (max-width: 480px) {
        flex-direction: column;
        height: auto;
        padding: 20px;
    }
`
