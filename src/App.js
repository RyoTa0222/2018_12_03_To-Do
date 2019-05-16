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
