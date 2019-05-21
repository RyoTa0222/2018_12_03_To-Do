import React, { Component } from 'react';
import moment from 'moment';

//styles
import { ClockContainer } from '../../Styles/Clock/style.js';


export class Clock extends Component {
    constructor(props) {
        super(props);
        var now = moment().format('HH:mm:ss');
        var o_clock = moment().format('HH');
        this.state = {
            time: now,
            o_clock: o_clock,
        };
        this.setTimer();
        console.log(this.state.o_clock)
    }
    setTimer() {
        setTimeout(
            this.updateClock.bind(this)
            , 1000);
    }

    updateClock() {
        var now = moment().format('HH:mm:ss');
        var o_clock = moment().format('HH');
        this.setState({
            time: now,
            o_clock: o_clock,
        })
        this.setTimer();
    }
    render() {
        var { time } = this.state;
        var { o_clock } = this.state;

        return (
            <>
                <ClockContainer>
                    <div data-clock>
                        <span>{("0" <= o_clock && o_clock < 13) ? "AM" : "PM"}</span>
                        <span>{time}</span>
                    </div>
                </ClockContainer>
            </>

        )
    }
}