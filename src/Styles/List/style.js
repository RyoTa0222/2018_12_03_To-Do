import styled from 'styled-components';

//Colorを読み込む
import { Color } from '../Color.js';

export const DateContainer = styled.div`
    display: inline-block;
    margin-right: 1rem;
    height: 90px;
    width: 90px;
    font-size: 1.4rem;
    div{
        width: 60px;
        height: 60px;
        position: relative;
        &::after{
                content: '';
                display: inline;
                position: absolute;
                bottom: 50%;
                left: 0;
                width: 100%;
                height: 2px;
                border-radius: 5px;
                background: white;
                transform: rotate(-45deg);
            }
        span{
            position: absolute;
        }
        span[data-date='month']{
            top: 5px;
            left: 5px;
        }
        span[data-date='day']{
            bottom: 5px;
            right: 5px;
    }
`;

export const Notification = styled.div`
    text-align: center;
    h2{
        font-size: 14px;
        margin-bottom: 8px;
        i{
            margin-right: 4px;
        }
    }
    button{
        background: rgba(54, 156, 199, .1);
        padding: 4px 1rem;
        width: 65%;
        border: solid 2px rgb(54, 156, 199);
        border-radius: 6px;
        color: rgb(54, 156, 199);
        cursor: pointer;
        text-align: center;
        font-weight: bold;
        margin-bottom: 4px;
        &:hover {
            background: rgba(54, 156, 199, .4);
        }
    }
`;
export const ListContainer = styled.ul`
    list-style: none;
    margin:0 auto;
    padding: 0;
    padding-bottom: 8rem;
    li{
        width: 70%;
        padding: 2rem 0;
        font-size: 2rem;
        line-height: 1.5rem;
        font-weight: bold;
        margin: 0 auto;
        position: relative;
        text-indent: 6rem;
        color: ${Color.white};
        &::after{
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background:${Color.underline};
            position: absolute;
            bottom: 0;
        }
        @media (max-width: 720px){
            width: 80%;
            padding: 1rem 0;
            font-size: 1rem;
            text-indent: 1rem;
        }
        ${DateContainer}{
            position: absolute;
            left: 0;
            top: 0;
            text-indent: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    li.stroke{
        text-decoration: line-through;
    }
`;
export const ModalContainer = styled.div`
    margin-top: 2rem;
    margin-left: -0.5rem;
    p{
        margin-left: 2.5rem;
    }
`;
export const ButtonContainer = styled.div`
    position:absolute;
    right: 0;
    top: 4px;
    @media (max-width: 720px){
        font-weight: normal;
        top: -2px;
    }
    button{
        margin: 1rem 8px;
        background:transparent;
        font-size: 1rem;
        font-weight: bold;
        display: inline-block;
        padding: 0.6rem 1rem;
        border-radius: 5px;
        position: relative;
        transition: all 0.3s ease-in-out;
        z-index: 100;
        &::after{
            transition: all 0.3s ease-in-out;
            content: '';
            position: absolute;
            z-index: -1;
            height: 100%;
            left: 0;
            top: 0;
            width: 0;
        }
        &::before{
            content: '';
            position: absolute;
            z-index: -1;
        }
        &:hover{
            color: ${Color.white};
            cursor: pointer;
            &::after{
                width: 100%;
            }
        }
        &:focus{
            outline:none;
        }
        @media (max-width: 720px){
            font-size: 0.6rem;
            padding: 0.3rem 0.5rem;
        }
    }
`;
export const ButtonDelete = styled.button`
    border: solid 2px ${Color.red};
    color: ${Color.red};
    &::before, &::after{
        background: ${Color.red};
        z-index: 1000;
    }
    @media (max-width: 720px){
        border: solid 1px ${Color.red};
    }
    &[data-button = 'delete']{
        border: solid 2px ${Color.purple};
        color: ${Color.purple};
        &::before, &::after{
            background: ${Color.purple};
        }
        @media (max-width: 720px){
            border: solid 1px ${Color.purple};
        }
    }
`;
export const ButtonChange = styled.button`
    border: solid 2px ${Color.changeColor};
    color: ${Color.changeColor};
    margin: 1rem;
    &::before, &::after{
        background: ${Color.changeColor};
    }
    &[data-delete = 'true']{
        border: solid 2px ${Color.deleteColor};
        color: ${Color.deleteColor};
        &::before, &::after{
            background: ${Color.deleteColor};
        }
    }
    @media (max-width: 720px){
        border: solid 1px ${Color.changeColor};
        margin: 1rem 0.5rem;
        &[data-delete = 'true']{
            border: solid 1px ${Color.deleteColor};
        }
    }
`;
