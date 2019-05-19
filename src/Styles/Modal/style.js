import styled from 'styled-components';

//Colorを読み込む
import { Color } from '../Color.js';

export const Modal = styled.div`
    width: 80%;
    position: relative;
    margin: 0 auto;
    input[type="text"]{
        width : 100%;
        padding: 16px 0;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 5px;
        border: solid 2px gray;
        word-break: keep-all;
        white-space: normal;
        text-indent: 1rem;
        &:focus{
            border: solid 2px gray;
            outline: none;
            background: #f3ecd8;
        }
        &:active{
            outline: none;
        }
    }
    &::-webkit-input-placeholder{
        font-size: 1rem;
        color: #bfc5ca;
        @media (max-width: 720px){
            font-size: 1rem;
            padding-left: 0.5rem;
            color: #bfc5ca;
        }
    }
    button{
        background:transparent;
        font-size: 1rem;
        font-weight: bold;
        display: inline-block;
        padding: 0.6rem 1rem;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        position: absolute;
        right:0;
        margin: 1.5rem 0;
        border: solid 2px gray;
        color: gray;
        &::after{
            transition: all 0.3s ease-in-out;
            content: '';
            position: absolute;
            z-index: -1;
            height: 100%;
            left: 0;
            top: 0;
            width: 0;
            background: gray;
        }
        &::before{
            content: '';
            position: absolute;
            z-index: -1;
            background: gray;
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

export const ButtonModalClose = styled.button`
    margin-right: 5rem !important;
`;

export const ButtonModalChange = styled.button`
    right: -5px;
`;