import React, { Component } from 'react';

//styles
import { Modal } from '../Styles/Modal/style.js';
import { ButtonModalChange } from '../Styles/Modal/style.js';
import { ButtonModalClose } from '../Styles/Modal/style.js';

export class InputModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
        //イベントハンドラー関数にthisをバインド

    }
    componentWillMount() {
        var { todo } = this.props.infosModal;
        var { id } = this.props.infosModal;
        this.setState({
            todo: todo,
            id: id,
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
            <Modal>
                <input type="text" value={this.state.value} autoFocus="focus" placeholder="メモを記入してください" onChange={e => handleOnChange(e)} onKeyUp={e => this.props.enterModal(e)} />
                <ButtonModalClose onClick={this.props.closeModal} className="button button_modal_close button_modal">閉じる</ButtonModalClose>
                <ButtonModalChange onClick={() => this.props.changeTodo()} className="button button_modal_change button_modal">変更</ButtonModalChange>
            </Modal>
        )
    }
}