import React, { Component } from 'react';

export class InputModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            todo: '',
        }
        //イベントハンドラー関数にthisをバインド

    }
    componentWillMount() {
        var informations = this.props.infosModal;
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
            <div className="input_modal">
                <input type="text" value={this.state.value} autoFocus="focus" placeholder="メモを記入してください" className="input_textarea" onChange={e => handleOnChange(e)} onKeyUp={e => this.props.enterModal(e)} />
                <button onClick={this.props.closeModal} className="button button_modal_close button_modal">閉じる</button>
                <button onClick={() => this.props.changeTodo()} className="button button_modal_change button_modal">変更</button>
            </div>
        )
    }
}