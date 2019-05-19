import styled from 'styled-components';

//Colorを読み込む
import { Color } from '../Color.js';

export const FormContainer = styled.div`
    width: 70%;
    position: relative;
    margin: 3rem auto 3rem;
    @media (max-width: 720px){
         width: 80%;
    }
    input[type="text"]{
        width : 100%;
        padding: 16px 0;
        font-size: 2rem;
        font-weight: bold;
        border-radius: 5px;
        border: solid 2px #00aeef;
        word-break: keep-all;
        white-space: normal;
        text-indent: 1rem;
        &:focus{
            border: solid 2px #00aeef;
            outline: none;
            background: rgba(173,224,238,0.3);
        }
        &:active{
            outline: none;
        }
        @media (max-width: 720px){
            padding: 1rem 0;
            font-size: 1rem;
        }
    }
    &::-webkit-input-placeholder{
        font-size: 2rem;
        padding-left: 0.5rem;
        color: #bfc5ca;
        @media (max-width: 720px){
            font-size: 1rem;
            padding-left: 0.5rem;
            color: #bfc5ca;
        }
    }
    
`;

export const AddButtonContainer = styled.div`
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    z-index: 100;
    button{
        margin: 1rem 0;
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

export const AddButton = styled.button`
    border: solid 2px deepskyblue;
    color: deepskyblue;
    background: white !important;
    display: block !important;
    margin: 0 1rem !important;
    z-index: -2 !important;
    &::before, &::after{
        background: deepskyblue;
    }
    @media (max-width: 720px){
        border: solid 1px deepskyblue;
        margin: 0 0.5rem;
    }
`;