import React, { Component } from 'react';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
        };
    }
    componentWillMount() {
        var informations = this.props.todos;
        this.setState({
            todo: informations,
        })
    }
    render() {

        return (
            <ul className="ul_todo">
                {this.state.todo.map((todo, i) => {
                    return (
                        <li key={i} className={(this.props.todos[i].complete) ? "stroke" : ""}>
                            {todo.title}
                            <div className="btn_list_position">
                                <button onClick={() => this.props.correctTodo(i)} className="button button_delete">{(this.props.todos[i].complete) ? "取消" : "完了"}</button>
                                <button onClick={() => this.props.show(i)} className="button button_change">変更</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}