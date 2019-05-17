import React, { Component } from 'react';
import { List } from './list.js';

export class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.addTodo = this.addTodo.bind(this);
        this.enterAdd = this.enterAdd.bind(this);
        this.show = this.show.bind(this);
    }
    componentWillMount() {
        var { todo } = this.props.infos;
        var { visible } = this.props.infos;
        var { id } = this.props.infos;
        this.setState({
            todo: todo,
            visible: visible,
            id: id,
        })
    }
    //modalの表示
    show(i) {
        this.setState({
            id: i,
            visible: true
        });
    }

    //新規追加
    addTodo() {
        var { todo } = this.state;
        var { value } = this.state;
        if (value !== '') {
            //追加
            todo.push({
                title: value,
                complete: false
            });
            //更新
            this.setState({
                todo: todo
            });
            //localstorageへの保存
            let setjson = JSON.stringify(this.state.todo);
            localStorage.setItem('Key', setjson);

        } else {
            return 0;
        }
        //inputの中身を空にする
        this.setState({
            value: '',
        })
    }

    //Enter_新規追加
    enterAdd(e) {
        var { todo } = this.state;
        var { value } = this.state;
        if (e.keyCode === 13) {
            if (value !== '') {
                //追加
                todo.push({
                    title: value,
                    complete: false
                });
                //更新
                this.setState({
                    todo: todo
                });
                //localstorageへの保存
                let setjson = JSON.stringify(this.state.todo);
                localStorage.setItem('Key', setjson);

            } else {
                return 0;
            }
        } else {
            return 0;
        }
        //inputの中身を空にする
        this.setState({
            value: '',
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
            <>
                <div className="input_todo">
                    <input type="text" value={this.state.value} autoFocus="focus" placeholder="メモを記入してください" className="input_textarea" onChange={e => handleOnChange(e)} onKeyUp={e => this.enterAdd(e)} />
                    <div className="button_input_position">
                        <button onClick={() => this.addTodo()} className="button button_add">追加</button>
                    </div>
                </div>
                <List todos={this.state.todo}
                    show={this.show}
                    correctTodo={this.correctTodo}
                    deleteTodo={this.deleteTodo} />
            </>
        )
    }
}