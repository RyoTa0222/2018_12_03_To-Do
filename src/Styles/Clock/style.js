import styled, { css } from 'styled-components';

//Colorを読み込む
import { Color } from '../Color.js';

export const ClockContainer = styled.div`
    font-size: 3rem;
    width: 70%;
    margin: 0 auto;
    text-align: right;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    -webkit-letter-spacing: 2px;
    letter-spacing: 2px;
    ${props => props.white && css`
    background: white;
    color: black;
  `}
    ${props => props.black && css`
    background: black;
    color: white;
  `}
`;