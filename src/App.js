//ファイルのインポート
import React, { Component } from 'react';
import { List } from './list.js';
import { Input } from './input.js';
import { InputModal } from './InputModal.js';
import './App.css';
import Loader from 'react-loader-spinner';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

//親コンポーネント(app)
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            todo: [
                { title: 'Javascript覚える', complete: false },
                { title: 'jQuery覚えるのは保留', complete: false },
                { title: 'ES2015覚える', complete: false },
                { title: 'React覚える', complete: false },
                { title: '隼を倒す', complete: false },
            ],
            loaded: true,
            visible: false
        };

        //イベントハンドラー関数にthisをバインド

        this.correctTodo = this.correctTodo.bind(this);
        this.changeTodo = this.changeTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.show = this.show.bind(this);
        this.enterModal = this.enterModal.bind(this);
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({ loaded: false })
        }, 100);
    }

    componentDidMount() {
        //localstorageから値の取得
        var jsonObj = localStorage.getItem('Key');
        var jsObj = JSON.parse(jsonObj);
        //保存
        this.setState(
            { todo: jsObj }
        );
    }

    // //modalの表示
    show(i) {
        this.setState({
            visible: true
        });
    }

    //modalの非表示
    closeModal = () => {
        this.setState({
            visible: false
        });
    }

    //modalで入力した内容の更新
    changeTodo(value) {
        if (value !== '') {
            //内容の変更
            const modalInput = this.state.todo.slice();
            modalInput[this.state.id] = { title: value };

            //更新
            this.setState({
                todo: modalInput
            });
            //localstorageへの保存
            let setjson = JSON.stringify(this.state.todo);
            localStorage.setItem('Key', setjson);

            //modalの非表示
            this.setState({ visible: false });
        } else {
            return;
        }
    }
    //enterModalで入力した内容の更新
    enterModal(event, value) {
        if (event.keyCode === 13) {
            if (value !== '') {
                //内容の変更
                const modal_input = this.state.todo.slice();
                modal_input[this.state.id] = { title: value };
                //更新
                this.setState({
                    todo: modal_input
                });
                //localstorageへの保存
                let setjson = JSON.stringify(this.state.todo);
                localStorage.setItem('Key', setjson);

                //modalの非表示
                this.setState({ visible: false });
            } else {
                return;
            }
        }
    }

    //新規追加
    addTodo() {
        var { todo } = this.refs.inputValue.state;
        if (this.refs.inputValue.state.value !== '') {
            var todoValue = this.refs.inputValue.state.value;
            //追加
            todo.push({
                title: todoValue,
                complete: false
            });
            //更新
            this.setState({
                todo: todo
            });
            //localstorageへの保存
            let setjson = JSON.stringify(this.state.todo);
            localStorage.setItem('Key', setjson);
            //inputの中身を空にする
            this.refs.inputValue.state.value = '';

        } else {
            return 0;
        }
    }

    //Enter_新規追加
    enterAdd(e) {
        var { todo } = this.refs.inputValue.state;
        if (e.keyCode === 13) {
            if (this.refs.inputValue.state.value !== '') {
                var todoValue = this.refs.inputValue.state.value;
                //追加
                todo.push({
                    title: todoValue,
                    complete: false
                });
                //更新
                this.setState({
                    todo: todo
                });
                //localstorageへの保存
                let setjson = JSON.stringify(this.state.todo);
                localStorage.setItem('Key', setjson);
                //inputの中身を空にする
                this.refs.inputValue.state.value = '';
            } else {
                return 0;
            }
        }
    }

    //取り消し機能
    correctTodo(i) {
        //コピー
        const todoDelete = this.state.todo.slice();

        console.log(todoDelete[i]);
        //更新
        // this.setState({
        //     todo: todoDelete
        // });
    }

    render() {
        const { loaded } = this.state;
        //console.log(this.refs.newText.value)
        return (
            <>
                <div id="main_todo" className={(loaded) ? "unshow" : "show"}>
                    <div className="title_group">
                        <h1 className="title">TODOアプリ</h1>
                    </div>
                    <Input enterAdd={this.enterAdd}
                        addTodo={this.addTodo}
                        ref="inputValue"
                        infos={this.state.todo} />
                    <List todos={this.state}
                        show={this.show}
                        correctTodo={this.correctTodo} />
                </div>
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
                            />
                        </div>
                    </Rodal>
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
