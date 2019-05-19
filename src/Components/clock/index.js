import React, { Component } from 'react';
import moment from 'moment';

//styles
import { ClockContainer } from '../../Styles/Clock/style.js';


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