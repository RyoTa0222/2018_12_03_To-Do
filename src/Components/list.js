import React, { Component } from 'react';
import { InputModal } from './InputModal.js';
import Rodal from 'rodal';
import NotificationSystem from 'react-notification-system';
import moment from 'moment';

//styles
import { Notification } from '../Styles/List/style.js';
import { ListContainer } from '../Styles/List/style.js';
import { ModalContainer } from '../Styles/List/style.js';
import { ButtonContainer } from '../Styles/List/style.js';
import { ButtonDelete } from '../Styles/List/style.js';
import { ButtonChange } from '../Styles/List/style.js';
import { DateContainer } from '../Styles/List/style.js';

export class List extends Component {
    constructor(props) {
        super(props);
        var Month = moment().format('M');
        var Day = moment().format('D');
        this.state = {
            Month: Month,
            Day: Day,
        };
        console.log(this.state)
        this.notificationSystem = React.createRef();
        this.notificationSystemModal = React.createRef();
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
                    <h2><i className="far fa-trash-alt"></i>削除してもよろしいですか</h2>
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
        var month = moment().format('M');
        var day = moment().format('D');
        if (value !== '') {
            //内容の変更
            modalInput[id] = { title: value, complete: false, Month: month, Day: day, };
            //console.log(modalInput)
            //更新
            this.setState({
                todo: modalInput,
                visible: false
            });
        } else {
            const notification = this.notificationSystemModal.current;
            notification.addNotification({
                level: 'error',
                autoDismiss: 5,
                title: "記入がありません",
                message: "変更内容を記入してください"
            });
        }
        //localstorageへの保存
        let setjson = JSON.stringify(modalInput);
        localStorage.setItem('Key', setjson);
        this.refs.InputModal.state.value = '';
    }

    //enterModalで入力した内容の更新
    enterModal(e) {

        var { todo } = this.state;
        var { value } = this.refs.InputModal.state;
        var { id } = this.state;
        var month = moment().format('M');
        var day = moment().format('D');

        if (e.keyCode === 13) {
            if (value !== '') {
                //内容の変更
                var modalInput = todo.slice();
                modalInput[id] = { title: value, complete: false, Month: month, Day: day };
                //更新
                this.setState({
                    todo: modalInput,
                    visible: false
                });

            } else {
                const notification = this.notificationSystemModal.current;
                notification.addNotification({
                    level: 'error',
                    autoDismiss: 5,
                    title: "記入がありません",
                    message: "変更内容を記入してください"
                });
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
        return (
            <>
                <ListContainer>
                    {this.state.todo.map((todo, i) => {
                        return (
                            <li key={i} className={`name ${(todo.complete) ? "stroke" : ""}`}>
                                <DateContainer>
                                    <div>
                                        <span data-date="month">{todo.Month}</span><span data-date="day">{todo.Day}</span>
                                    </div>
                                </DateContainer>
                                {todo.title}
                                <ButtonContainer>
                                    <ButtonDelete onClick={() => this.correctTodo(i)} data-button={(todo.complete) ? "delete" : "complete"} >{(todo.complete) ? "取消" : "完了"}</ButtonDelete>
                                    {!todo.complete && (
                                        <ButtonChange onClick={() => this.show(i)}>変更</ButtonChange>
                                    )}
                                    {todo.complete && (
                                        <ButtonChange data-delete onClick={() => this.addNotification(i)}>削除</ButtonChange>
                                    )}
                                </ButtonContainer>
                            </li>
                        )
                    })}
                </ListContainer>
                <NotificationSystem ref={this.notificationSystem} />
                <NotificationSystem ref={this.notificationSystemModal} />
                <div id="rodal">
                    <Rodal visible={this.state.visible}
                        onClose={this.closeModal}
                        width={400}
                        enterAnimation="door"
                        leaveAnimation="door"
                        showCloseButton={false}>
                        <ModalContainer>
                            <p>変更内容を入力してください。</p>

                            <InputModal closeModal={this.closeModal}
                                changeTodo={this.changeTodo}
                                enterModal={this.enterModal}
                                ref="InputModal"
                                infosModal={this.state}
                            />
                        </ModalContainer>
                    </Rodal>
                </div>
            </>
        )
    }
}