import styled from "styled-components";

export const HomePage = styled.div`
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    row-gap: 25px;
    background-color: black;
    color: white;
    padding: 30px 50px 25px 50px;
    h1 {
        font-size: 24px;
    }
`

export const Input = styled.div`
    background: #18181B;
    padding: 12px 20px 12px 20px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    width: 320px;
    height: 44px;
    svg {
        height: 20px;
        width: 20px;
        color: #71717A;
    }
    input {
        border: none;
        background: none;
        outline: none;
        color: #F4F4F5;
        margin-left: 10px;
        &::placeholder {
            color: #F4F4F5;
        }
    }
`

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 44px;
`

export const TitleInput = styled.div`
    display: flex;
    align-items: center;
    column-gap: 20px;
`

export const ButtonCart = styled.div`
    color: #f4f4f5;
    display: flex;
    column-gap: 8px;
    font-size: 14px;
    svg {
        height: 16px;
        width: 16px;
    }
    &:hover {
        color: #67E8F9;
    }
`