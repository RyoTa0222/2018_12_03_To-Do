import React, { Component } from 'react';
import moment from 'moment';
import styled, { css } from 'styled-components';

const ClockContainer = styled.div`
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

export class Clock extends Component {
    constructor(props) {
        super(props);
        var now = moment().format('HH:mm:ss');
        this.state = {
            time: now,
            bg_white: true,
        };
        this.setTimer();
    }
    setTimer() {
        setTimeout(
            this.updateClock.bind(this)
            , 1000);
    }

    updateClock() {
        var now = moment().format('HH:mm:ss');
        this.setState({
            time: now
        })
        this.setTimer();
    }
    render() {
        var { time, bg_white } = this.state;

        return (
            <>
                {bg_white && (
                    <ClockContainer white >
                        {time}
                    </ClockContainer>
                )}
                {!bg_white && (
                    <ClockContainer black >
                        {time}
                    </ClockContainer>
                )}

            </>

        )
    }
}