import React, {Component} from 'react';

export class Input extends Component {
    constructor(props){
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(){
        this.props.addTodo(this.refs.newText.value);
        this.refs.newText.value='';
    }
    render(){
        return (
            <div class="input_todo">
                <input type="text" ref="newText" placeholder="メモを記入してください" className="input_textarea" autoFocus="focus" />
                <div class="button_position">
                    <button onClick={this.addTodo} className="button_add">Addition</button>
                </div>
            </div>
        )
    }
}