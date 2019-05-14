import React, { Component } from 'react';

export class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            todo: '',
        }
    }
    componentWillMount() {
        var informations = this.props.infos;
        this.setState({
            todo: informations,
        })
    }
    render() {

        const handleOnChange = (e) => {
            var { value } = e.target;
            this.setState({
                value: value,
            })
        }
        return (
            <div className="input_todo">
                <input type="text" value={this.state.value} autoFocus="focus" placeholder="メモを記入してください" className="input_textarea" onChange={e => handleOnChange(e)} onKeyUp={e => this.props.enterAdd(e)} />
                <div className="button_input_position">
                    <button onClick={() => this.props.addTodo()} className="button button_add">追加</button>
                </div>
            </div>
        )
    }
}