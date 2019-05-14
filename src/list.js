import React, { Component } from 'react';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        var informations = this.props.todos;
        this.setState({
            informations
        })
    }
    render() {
        return (
            <ul className="ul_todo">
                {this.state.informations.todo.map((todo, i) => {
                    return (
                        <li key={i}>
                            {todo.title}
                            <div className="btn_list_position">
                                <button onClick={() => this.props.correctTodo(i)} className="button button_delete">完了</button>
                                <button onClick={() => this.props.show(i)} className="button button_change">変更</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}