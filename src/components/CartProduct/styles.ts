import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    flex-direction: column;
    gap: 20px;
    span {
        display: flex;
        align-items: center;
        justify-content: end;
        font-size: 12px;
        cursor: pointer;
        color: #DC2626;
        svg {
            margin-left: 3px;
        }
    }
`

export const Products = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    row-gap: 15px;
    margin-bottom: 15px;
`

export const Product = styled.div`
    position: relative;
    display: flex;
    width: 98%;
    align-items: center;
    background: #18181B;
    img {
        max-height: 285px;
    }
    svg {
        cursor: pointer;
        font-size: 12px;
        top: 15px;
        right: 15px;
        color: #DC2626;
        position: absolute;
    }
`

export const Infos = styled.div`
    height: 100%;
    width: 100%;
    padding-right: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-size: 26px;
    }
`

export const Price = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    p {
        font-size: 18px;
    }
    span {
        font-size: 26px;
        color: #67E8F9;
        font-weight: 500;
    }
`

export const Total = styled.div`
    background: #18181B;
    display: flex;
    justify-content: space-between;
    width: 410px;
    height: 183px;
    p {
        font-size: 14px;
        margin: 20px;
    }
`

export const TotalPrice = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    span {
        font-size: 34px;
        color: #67E8F9;
        margin: 5px 10px 0 0;
    }
    button {
        width: 138px;
        height: 34px;
        background: #67E8F9;
        color: black;
        font-size: 14px;
        font-weight: 600;
        border: none;
        margin: 0 15px 10px 0;
        cursor: pointer;
        &:hover {
            transition: 0.3s;
            background: black;
            color: #67E8F9;
        }
    }
`

export const EmptyCartMessage = styled.p`
  font-size: 18px;
  color: #999;
  text-align: center;
  margin-top: 20px;
`;