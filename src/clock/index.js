import React, {Component} from 'react';
import moment from 'moment';
import styled from 'styled-components';

const ClockContainer = styled.div`
    font-size: 3rem;
    width: 70%;
    margin: 0 auto;
    text-align: right;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    -webkit-letter-spacing: 2px;
    letter-spacing: 2px;
`;

export class Clock extends Component {
    constructor(props){
        super(props);
        var now = moment().format('HH:mm:ss');
        this.state = {
            time: now
        };
        this.setTimer();
    }
    setTimer() {
        setTimeout(
            this.updateClock.bind(this)
        , 1000);
    }

    updateClock(){
        var now = moment().format('HH:mm:ss');
        this.setState({
            time: now
        })
        this.setTimer();
    }
    render(){
        var {time} = this.state;
        return(
             <ClockContainer>{time} </ClockContainer>
        )
    }
}