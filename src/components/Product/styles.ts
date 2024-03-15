import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

export const DivProduct = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 384px;
    height: 417px;
    background: #18181B;
    img {
        max-height: 349px;
        margin-bottom: 10px;
    }
    cursor: default;
    `

export const DescProduct = styled.div`
    background: black;
    border: 2px solid #71717A;
    width: 240px;
    height: 48px;
    border-radius: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
    p {
        font-size: 14px;
        margin-left: 20px;
    }
    `
export const DivPrice = styled.div`
    height: 44px;
    width: 83px;
    background: #172554;
    border-radius: 20px;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
`