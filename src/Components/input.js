import React, { Component } from 'react';
import { List } from './list.js';
import NotificationSystem from 'react-notification-system';

//styles
import { FormContainer } from '../Styles/Input/style.js';
import { AddButtonContainer } from '../Styles/Input/style.js';
import { AddButton } from '../Styles/Input/style.js';

export class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
        this.notificationSystem = React.createRef();
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
            const notification = this.notificationSystem.current;
            notification.addNotification({
                level: 'error',
                autoDismiss: 5,
                title: "記入がありません",
                message: "メモを記入してください"
            });
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
                const notification = this.notificationSystem.current;
                notification.addNotification({
                    level: 'error',
                    autoDismiss: 5,
                    title: "記入がありません",
                    message: "メモを記入してください"
                });
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
                <FormContainer>
                    <input type="text" value={this.state.value} autoFocus="focus" placeholder="メモを記入してください" onChange={e => handleOnChange(e)} onKeyUp={e => this.enterAdd(e)} />
                    <AddButtonContainer>
                        <AddButton onClick={() => this.addTodo()}>追加</AddButton>
                    </AddButtonContainer>
                </FormContainer>
                <List todos={this.state.todo}
                    show={this.show}
                    correctTodo={this.correctTodo}
                    deleteTodo={this.deleteTodo} />
                <NotificationSystem ref={this.notificationSystem} />
            </>
        )
    }
}