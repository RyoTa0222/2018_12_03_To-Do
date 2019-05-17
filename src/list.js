import React, { Component } from 'react';
import { InputModal } from './InputModal.js';
import Rodal from 'rodal';
export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.correctTodo = this.correctTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.show = this.show.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.changeTodo = this.changeTodo.bind(this);
        this.enterModal = this.enterModal.bind(this);
    }
    componentWillMount() {
        var informations = this.props.todos;
        this.setState({
            todo: informations,
        })
    }

    //modalの表示
    show(i) {
        this.setState({
            id: i,
            visible: true
        });
    }
    //modalの非表示
    closeModal() {
        this.setState({
            visible: false
        });
    }

    //取り消し機能
    correctTodo(i) {
        //コピー
        var { todo } = this.state;
        const todoCorrect = todo.slice();
        todoCorrect[i].complete = (todoCorrect[i].complete) ? false : true;
        //更新
        this.setState({
            todo: todoCorrect
        });
        //localstorageへの保存
        let setjson = JSON.stringify(this.state.todo);
        localStorage.setItem('Key', setjson);
    }

    //削除機能
    deleteTodo(i) {
        var { todo } = this.state;
        todo.splice(i, 1);
        this.setState({
            todo: todo
        })
        console.log("delete")
        console.log(this.state.todo)
        //localstorageへの保存
        let setjson = JSON.stringify(this.state.todo);
        localStorage.setItem('Key', setjson);
    }

    //modalで入力した内容の更新
    changeTodo() {
        var { todo } = this.state;
        var { value } = this.refs.InputModal.state;
        var { id } = this.state;
        var modalInput = todo.slice();
        if (value !== '') {
            //内容の変更
            modalInput[id] = { title: value, complete: false };
            //console.log(modalInput)
            //更新
            this.setState({
                todo: modalInput,
                visible: false
            });

            //localstorageへの保存
            let setjson = JSON.stringify(this.state.todo);
            localStorage.setItem('Key', setjson);

        } else {
            return;
        }
        this.refs.InputModal.state.value = '';
        console.log(this.state)
    }
    //enterModalで入力した内容の更新
    enterModal(e) {
        var { todo } = this.state;
        var { value } = this.refs.InputModal.state;
        var { id } = this.state;
        if (e.keyCode === 13) {
            if (value !== '') {
                //内容の変更
                var modalInput = todo.slice();
                modalInput[id] = { title: value, complete: false };
                //更新
                this.setState({
                    todo: modalInput,
                    visible: false
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
        this.refs.InputModal.state.value = '';
    }

    render() {
        return (
            <>
                <ul className="ul_todo">
                    {this.state.todo.map((todo, i) => {
                        return (
                            <li key={i} className={`name ${(todo.complete) ? "stroke" : ""}`}>
                                {todo.title}
                                <div className="btn_list_position">
                                    <button onClick={() => this.correctTodo(i)} className="button button_delete">{(todo.complete) ? "取消" : "完了"}</button>
                                    {!todo.complete && (
                                        <button onClick={() => this.show(i)} className="button button_change">変更</button>
                                    )}
                                    {todo.complete && (
                                        <button onClick={() => this.deleteTodo(i)} className="button button_change">削除</button>
                                    )}
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div id="rodal">
                    <Rodal visible={this.state.visible}
                        onClose={this.closeModal}
                        width={400}
                        enterAnimation="door"
                        leaveAnimation="door"
                        showCloseButton={false}>
                        <div className="modal_content">
                            <p>変更内容を入力してください。</p>

                            <InputModal closeModal={this.closeModal}
                                changeTodo={this.changeTodo}
                                enterModal={this.enterModal}
                                ref="InputModal"
                                infosModal={this.state}
                            />
                        </div>
                    </Rodal>
                </div>
            </>
        )
    }
}