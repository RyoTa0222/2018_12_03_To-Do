import React, {Component} from 'react';

export class Input extends Component {
    constructor(props){
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.Enter = this.Enter.bind(this);
    }
    addTodo(){
        this.props.addTodo(this.refs.newText.value);
        this.refs.newText.value='';
    }

    Enter(event){
        if( event.keyCode === 13 ){
            this.props.addTodo(this.refs.newText.value);
            this.refs.newText.value='';
        }
    }

    render(){
        return (
            <div className="input_todo">
                <input type="text" ref="newText" autoFocus="focus" placeholder="メモを記入してください" className="input_textarea"  onKeyUp={this.Enter}/>
                <div className="button_input_position">
                    <button onClick={this.addTodo} className="button button_add">追加</button>
                </div>
            </div>
        )
    }
}