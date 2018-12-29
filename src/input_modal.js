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
        this.Enter_modal=this.Enter_modal.bind(this);
    }
    changeTodo(){
        this.props.changeTodo(this.refs.modalText.value);
        this.refs.modalText.value='';

    }

    Enter_modal(event){
        if( event.keyCode === 13 ){
            this.props.changeTodo(this.refs.modalText.value);
            this.refs.modalText.value='';
        }
    }

    render(){
        return (
            <div className="input_todo">
                <input type="text" ref="modalText" autoFocus="focus" placeholder="メモを記入してください" className="input_textarea" onKeyUp={this.Enter_modal} />
                <div className="button_input_position">
                    <button onClick={this.changeTodo}  className="button button_add">変更</button>
                </div>
            </div>
        )
    }
}