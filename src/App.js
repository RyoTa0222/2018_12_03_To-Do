//ファイルのインポート
import React, { Component } from 'react';

import { Input } from './input.js';

import './App.css';
import Loader from 'react-loader-spinner';

import 'rodal/lib/rodal.css';
import { Clock } from './clock';

//親コンポーネント(app)
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [
                { title: 'Javascript覚える', complete: false },
                { title: 'jQuery覚えるのは保留', complete: false },
                { title: 'ES2015覚える', complete: false },
                { title: 'React覚える', complete: false },
                { title: '隼を倒す', complete: false },
            ],
            id: 0,
            loaded: true,
            visible: false,
        };

        //イベントハンドラー関数にthisをバインド

        //this.correctTodo = this.correctTodo.bind(this);
        //this.changeTodo = this.changeTodo.bind(this);
        //this.addTodo = this.addTodo.bind(this);
        //this.enterAdd = this.enterAdd.bind(this);
        //this.show = this.show.bind(this);
        //this.enterModal = this.enterModal.bind(this);
        //this.deleteTodo = this.deleteTodo.bind(this);
    }

    UNSAFE_componentWillMount() {
        setTimeout(() => {
            this.setState({ loaded: false })
        }, 100);
        //localstorageから値の取得
        var jsonObj = localStorage.getItem('Key');
        var jsObj = JSON.parse(jsonObj);
        if (!jsonObj) {
            //localstorageに書き込み
            let setjson = JSON.stringify(this.state.todo);
            localStorage.setItem('Key', setjson);
            //保存
            this.setState(
                { todo: jsObj }
            );
        } else {
            //保存
            this.setState(
                { todo: jsObj }
            );
        }
    }

    // //modalの表示
    // show(i) {
    //     this.setState({
    //         id: i,
    //         visible: true
    //     });
    // }



    // //modalで入力した内容の更新
    // changeTodo() {
    //     var { todo } = this.state;
    //     var { value } = this.refs.inputModal.state;
    //     var modalInput = todo.slice();
    //     if (value !== '') {
    //         //内容の変更
    //         modalInput[this.state.id] = { title: value, complete: false };
    //         console.log(modalInput)
    //         //更新
    //         this.setState({
    //             todo: modalInput,
    //             visible: false
    //         });

    //         //localstorageへの保存
    //         let setjson = JSON.stringify(this.state.todo);
    //         localStorage.setItem('Key', setjson);

    //     } else {
    //         return;
    //     }

    //     this.refs.inputModal.state.value = '';
    // }
    // //enterModalで入力した内容の更新
    // enterModal(e) {
    //     var { todo } = this.state;
    //     var { value } = this.refs.inputModal.state;
    //     if (e.keyCode === 13) {
    //         if (value !== '') {
    //             //内容の変更
    //             var modalInput = todo.slice();
    //             modalInput[this.state.id] = { title: value, complete: false };
    //             //更新
    //             this.setState({
    //                 todo: modalInput,
    //                 visible: false
    //             });
    //             //localstorageへの保存
    //             let setjson = JSON.stringify(this.state.todo);
    //             localStorage.setItem('Key', setjson);

    //         } else {
    //             return 0;
    //         }
    //     } else {
    //         return 0;
    //     }
    //     this.refs.inputModal.state.value = '';
    // }

    // //新規追加
    // addTodo() {
    //     var { todo } = this.refs.inputValue.state;
    //     var { value } = this.refs.inputValue.state;
    //     if (value !== '') {
    //         //追加
    //         todo.push({
    //             title: value,
    //             complete: false
    //         });
    //         //更新
    //         this.setState({
    //             todo: todo
    //         });
    //         //localstorageへの保存
    //         let setjson = JSON.stringify(this.state.todo);
    //         localStorage.setItem('Key', setjson);

    //     } else {
    //         return 0;
    //     }
    //     //inputの中身を空にする
    //     this.refs.inputValue.state.value = '';
    // }

    // //Enter_新規追加
    // enterAdd(e) {
    //     var { todo } = this.refs.inputValue.state;
    //     var { value } = this.refs.inputValue.state;
    //     if (e.keyCode === 13) {
    //         if (value !== '') {
    //             //追加
    //             todo.push({
    //                 title: value,
    //                 complete: false
    //             });
    //             //更新
    //             this.setState({
    //                 todo: todo
    //             });
    //             //localstorageへの保存
    //             let setjson = JSON.stringify(this.state.todo);
    //             localStorage.setItem('Key', setjson);

    //         } else {
    //             return 0;
    //         }
    //     } else {
    //         return 0;
    //     }
    //     //inputの中身を空にする
    //     this.refs.inputValue.state.value = '';
    // }

    // //取り消し機能
    // correctTodo(i) {
    //     //コピー
    //     var { todo } = this.state;
    //     const todoCorrect = todo.slice();
    //     todoCorrect[i].complete = (todoCorrect[i].complete) ? false : true;
    //     //更新
    //     this.setState({
    //         todo: todoCorrect
    //     });
    //     //localstorageへの保存
    //     let setjson = JSON.stringify(this.state.todo);
    //     localStorage.setItem('Key', setjson);
    // }

    // //削除機能
    // deleteTodo(i) {
    //     var { todo } = this.state;
    //     todo.splice(i, 1);
    //     console.log(todo)
    //     this.setState({
    //         todo: todo
    //     })
    //     //localstorageへの保存
    //     let setjson = JSON.stringify(this.state.todo);
    //     localStorage.setItem('Key', setjson);
    // }

    render() {
        const { loaded } = this.state;
        return (
            <>
                <div id="main_todo" className={(loaded) ? "unshow" : "show"}>
                    <div className="title_group">
                        <h1 className="title">TODOアプリ</h1>
                    </div>
                    <Clock />
                    <Input enterAdd={this.enterAdd}
                        addTodo={this.addTodo}
                        ref="inputValue"
                        infos={this.state}
                    />
                    {/* <List todos={this.state.todo}
                        show={this.show}
                        correctTodo={this.correctTodo}
                        deleteTodo={this.deleteTodo} /> */}
                </div>

                <div className={(loaded) ? "icon_show" : "unshow"}>
                    <Loader loaded={this.state.loaded}
                        type="CradleLoader"
                        color="#000"
                        height="100"
                        width="100"
                    />
                </div>
            </>
        )
    }
}

export default App;
