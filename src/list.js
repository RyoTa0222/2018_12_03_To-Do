import React, { Component } from 'react';
import { InputModal } from './InputModal.js';
import Rodal from 'rodal';
import NotificationSystem from 'react-notification-system';
import styled from 'styled-components';
const Notification = styled.div`
    text-align: center;
    button{
        background: rgba(54, 156, 199, .1);
        padding: 4px 1rem;
        width: 80%;
        border: solid 2px rgb(54, 156, 199);
        border-radius: 6px;
        color: rgb(54, 156, 199);
        cursor: pointer;
        text-align: center;
        font-weight: bold;
        &:hover {
            background: rgba(54, 156, 199, .4);
        }
    }
`;

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.notificationSystem = React.createRef();

        this.addNotification = this.addNotification.bind(this);
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
    //通知機能
    addNotification(i) {
        const notification = this.notificationSystem.current;
        notification.addNotification({
            level: 'info',
            autoDismiss: 20,
            children: (
                <Notification>
                    <h2><i class="far fa-trash-alt"></i>削除してもよろしいですか</h2>
                    <button onClick={() => this.deleteTodo(i)}>Delete</button>
                </Notification>
            )
        });
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
        let setjson = JSON.stringify(todo);
        localStorage.setItem('Key', setjson);
    }

    //削除機能
    deleteTodo(i) {
        var { todo } = this.state;
        todo.splice(i, 1);
        this.setState({
            todo: todo
        })
        //localstorageへの保存
        let setjson = JSON.stringify(todo);
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
        } else {
            return;
        }
        //localstorageへの保存
        let setjson = JSON.stringify(modalInput);
        localStorage.setItem('Key', setjson);
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

            } else {
                return 0;
            }
        } else {
            return 0;
        }
        //localstorageへの保存
        let setjson = JSON.stringify(modalInput);
        localStorage.setItem('Key', setjson);
        this.refs.InputModal.state.value = '';
    }

    render() {
        console.log(this.state)
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
                                        <button onClick={() => this.addNotification(i)} className="button button_change">削除</button>
                                    )}
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <NotificationSystem ref={this.notificationSystem} />
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