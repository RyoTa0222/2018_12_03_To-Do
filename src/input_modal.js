import React, {Component} from 'react';

export class Input_modal extends Component {
    constructor(props){
        super(props);
        this.state = { visible: false };
        this.state = {
            id: 0,
            todo: [
                {title: 'Javascript覚える'},
                {title: 'jQuery覚える'},
                {title: 'ES2015覚える'},
                {title: 'React覚える'},
                {title: '隼人を倒す'},
            ]};
        this.changeTodo = this.changeTodo.bind(this);
        this.enterModal=this.enterModal.bind(this);

    }
    //modalの入力内容の更新
    changeTodo(){
        this.props.changeTodo(this.refs.modalText.value);
        this.refs.modalText.value='';

    }

    //Enterによるmodalの入力内容の更新
    enterModal(event){
        if( event.keyCode === 13 ){
            this.props.changeTodo(this.refs.modalText.value);
            this.refs.modalText.value='';
        }
    }



    render(){
        return (
            <div className="input_modal">
                <input type="text" ref="modalText" autoFocus="focus" placeholder="メモを記入してください" className="input_textarea" onKeyUp={this.enterModal} />
                <button onClick={this.closeModal}  className="button button_modal_close button_modal">閉じる</button>
                <button onClick={this.changeTodo}  className="button button_modal_change button_modal">変更</button>
            </div>
        )
    }
}