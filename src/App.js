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
                { title: 'Javascript覚える', complete: true },
                { title: 'jQuery覚えるのは保留', complete: true },
                { title: 'ES2015覚える', complete: true },
                { title: 'React覚える', complete: true },
                { title: '隼を倒す', complete: true },
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
        this.closeModal = this.closeModal.bind(this);
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({ loaded: false })
        }, 2000);
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

    //modalの表示
    show(i) {
        this.setState({
            id: i,
            todo: this.state.todo,
            visible: true
        });
    }

    //modalの非表示
    closeModal = () => {
        this.setState(
            { visible: false }
        );
    }


    //modalで入力した内容の更新
    changeTodo(value) {
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
    addTodo(value) {
        if (value !== '') {
            //追加
            this.state.todo.push({
                title: value
            });
            //更新
            this.setState({
                todo: this.state.todo
            });
            //localstorageへの保存
            let setjson = JSON.stringify(this.state.todo);
            localStorage.setItem('Key', setjson);

        } else {
        }
    }

    //Enter_新規追加
    Enter(event, value) {
        if (event.keyCode === 13) {
            if (value !== '') {
                //追加
                this.state.todo.push({
                    title: value
                });
                //更新
                this.setState({
                    todo: this.state.todo
                });
                //localstorageへの保存
                let setjson = JSON.stringify(this.state.todo);
                localStorage.setItem('Key', setjson);
            } else {
            }
        }
    }
    //
    // //取り消し機能
    // correctTodo(todo, i){
    //     //コピー
    //     const todo_delete = this.state.todo.slice();
    //     //取り消し線
    //     todo_delete[i] = {title: {<del>todo.title</del>}};
    //     //更新
    //     this.setState({
    //         todo : todo_delete
    //     });
    // }

    //取り消し機能
    correctTodo(todo, i) {
        //コピー
        const todo_delete = this.state.todo.slice();
        //取り消し線
        todo_delete[i] = {
            id: 'Reset',
            title: todo.title
        };
        console.log(todo_delete[i]);
        //更新
        this.setState({
            todo: todo_delete
        });
        document.getElementById(this.state.todo.id).style.textDecoration = "line-through";
    }

    render() {
        const { loaded } = this.state;
        return (
            <>
                {!loaded && (
                    <>
                        <div id="main_todo" className="show">
                            <div className="title_group">
                                <h1 className="title">TODOアプリ</h1>
                            </div>
                            <Input Enter={this.Enter}
                                addTodo={this.addTodo} />
                            <List todo={this.state.todo}
                                correctTodo={this.correctTodo}
                                show={this.show}
                                complete={this.state.complete}
                            />
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
                    </>
                )}

                {loaded && (
                    <div className="icon_show">
                        <Loader loaded={this.state.loaded}
                            type="CradleLoader"
                            color="#000"
                            height="100"
                            width="100"
                        />
                    </div>
                )}
            </>
        );
    }
}

export default App;
