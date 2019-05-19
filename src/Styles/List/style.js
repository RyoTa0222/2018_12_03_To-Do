import styled from 'styled-components';

//Colorを読み込む
import { Color } from '../Color.js';

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
    margin:0 auto 30px;
    padding: 0;
    li{
        width: 70%;
        padding: 2rem 0;
        font-size: 2rem;
        line-height: 1.5rem;
        font-weight: bold;
        margin: 0 auto;
        position: relative;
        text-indent: 2rem;
        &::after{
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background:#a1a3a6;
            position: absolute;
            bottom: 0;
        }
        @media (max-width: 720px){
            width: 80%;
            padding: 1rem 0;
            font-size: 1rem;
            text-indent: 1rem;
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
            color:white;
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
    }
    @media (max-width: 720px){
        border: solid 1px ${Color.red};
    }
`;
export const ButtonChange = styled.button`
    border: solid 2px ${Color.green};
    color: ${Color.green};
    margin: 1rem;
    &::before, &::after{
        background: ${Color.green};
    }
    @media (max-width: 720px){
        border: solid 1px ${Color.green};
        margin: 1rem 0.5rem;
    }
`;