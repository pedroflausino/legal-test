import styled from "styled-components";

export const CartPage = styled.div`
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: black;
    color: white;
    padding: 30px 50px 25px 50px;
    h1 {
        font-size: 24px;
    }
`

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 44px;
`

export const ButtonCart = styled.div`
    color: #67E8F9;
    cursor: pointer;
    display: flex;
    column-gap: 8px;
    font-size: 14px;
    svg {
        height: 16px;
        width: 16px;
    }
`