//ファイルのインポート
import React, { Component } from 'react';
import { Input } from './input.js';
import Loader from 'react-loader-spinner';
import 'rodal/lib/rodal.css';
import { Clock } from './clock';

//Styles
import { Container } from '../Styles/Common/style.js';
import { TitleContainer } from '../Styles/Common/style.js';

//親コンポーネント(app)
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [
                { title: 'Javascript覚える', complete: false, Month: "4", Day: "10", },
                { title: 'jQuery覚えるのは保留', complete: false, Month: "4", Day: "20", },
                { title: 'ES2015覚える', complete: false, Month: "5", Day: "1", },
                { title: 'React覚える', complete: false, Month: "5", Day: "5", },
                { title: '隼を倒す', complete: false, Month: "5", Day: "12", },
            ],
            id: 0,
            loaded: true,
            visible: false,
        };
    }

    UNSAFE_componentWillMount() {
        setTimeout(() => {
            this.setState({ loaded: false })
        }, 1000);
        //localstorageから値の取得
        var jsonObj = localStorage.getItem('Key');
        var jsObj = JSON.parse(jsonObj);
        if (!jsonObj) {
            //localstorageに書き込み
            let setjson = JSON.stringify(this.state.todo);
            localStorage.setItem('Key', setjson);
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
            <Container>
                <div id="main_todo" className={(loaded) ? "unshow" : "show"}>
                    <TitleContainer>
                        <h1>TODOアプリ</h1>
                    </TitleContainer>
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
            </Container>
        )
    }
}

export default App;
