import styled from 'styled-components';

//Colorを読み込む
import { Color } from '../Color.js';

export const Container = styled.div`
    background: ${Color.black};
    .icon_show{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    }
    .show{
        display: block;
    }
    .unshow{
        display: none;
    }
`;
export const TitleContainer = styled.div`
    text-align: center;
    position: relative;
    h1{
        font-size: 7vw;
        margin: 0;
        color: ${Color.white};
        padding: 2rem 0;
    }
`;
