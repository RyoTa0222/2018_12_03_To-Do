import styled from 'styled-components';

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
    -webkit-text-stroke: 2px transparent;
    text-stroke: 2px transparent;
    position: relative;
    span:first-child{
      margin-right: 6px;
    }
    span{
      background: ${Color.gradation};
      color: black;
      -webkit-background-clip: text;
      background-clip: text;
      padding: 0 5px;
    }
`;