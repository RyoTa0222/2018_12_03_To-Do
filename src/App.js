//ファイルのインポート
import React, { Component } from 'react';
import {List} from './list.js';
import {Input} from './input.js';
import {Input_modal} from './input_modal.js';
import './App.css';
import Loader from 'react-loader-spinner';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

//親コンポーネント(app)
class App extends Component {

    constructor(props){
        super(props);
        this.state = { visible: false };
        this.state = {
            id: 0,
            todo: [
                {title: 'Javascript覚える'},
                {title: 'jQuery覚える'},
                {title: 'ES2015覚える'},
                {title: 'React覚える'},
                {title: '隼を倒す'},
            ]};
        //イベントハンドラー関数にthisをバインド

        this.deleteTodo = this.deleteTodo.bind(this);
        this.changeTodo = this.changeTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.Enter_modal=this.Enter_modal.bind(this);
    }

    //ローディング
    componentWillMount() {
        setTimeout( function() {
            document.getElementById("icon_loading").style.display = "none";
                document.getElementById("main_todo").style.display = "block";}
            , 2000 );
    }

    //modalの表示
    show(i) {
        this.setState({
            id: i,
            todo: this.state.todo
        });
        this.setState(
            { visible: true }
            );
    }
　　 //modalの非表示
    hide() {
        this.setState({ visible: false });
    }

    //modalで入力した内容の更新
    changeTodo(value){
        if( value!== '' ){
            //内容の変更
            const modal_input = this.state.todo.slice();
            modal_input[this.state.id] = {title: value};
            //更新
            this.setState({
                todo : modal_input
            });
            //modalの非表示
            this.setState({ visible: false });
        }else{
        }
    }
    //Enter_modalで入力した内容の更新
    Enter_modal(event, value){
        if( event.keyCode === 13 ){
            if( value!=='' ){
                //内容の変更
                const modal_input = this.state.todo.slice();
                modal_input[this.state.id] = {title: value};
                //更新
                this.setState({
                    todo : modal_input
                });
                //modalの非表示
                this.setState({ visible: false });
            }else{
            }
        }
    }

    //新規追加
    addTodo(value){
        if(value !== ''){
            //追加
            this.state.todo.push({
                title: value
            });
            //更新
            this.setState({
                todo : this.state.todo
            });
        }else{
        }
    }

    //Enter_新規追加
    Enter(event, value){
        if( event.keyCode === 13 ){
            if( value !== '' ){
                //追加
                this.state.todo.push({
                    title: value
                });
                //更新
                this.setState({
                    todo : this.state.todo
                });
            }else{
            }
        }
    }

    //取り消し機能
    deleteTodo(todo, i){
        //コピー
        const todo_delete = this.state.todo.slice();
        //取り消し線
        todo_delete[i] = {title: <del>{todo.title}</del>};
        //更新
        this.setState({
            todo : todo_delete
        });
    }

    render() {
    return (
      <div className="todo">
          <div id="main_todo">
              <div className="title_group">
                  <h1 className="title">TODOアプリ</h1>
              </div>
              <Input Enter={this.Enter}
                     addTodo={this.addTodo}/>
              <List todo={this.state.todo}
                    deleteTodo={this.deleteTodo}
                    show={this.show}/>
          </div>
          <div id="rodal">
              <Rodal visible={this.state.visible}
                     onClose={this.hide.bind(this)}
                     width={400}
                     enterAnimation="slideUp"
                     leaveAnimation="slideUp">
                  <div>
                      <p>変更内容を入力してください。</p>

                      <Input_modal changeTodo={this.changeTodo}
                                   Enter_modal={this.Enter_modal}/>

                  </div>
              </Rodal>
          </div>
          <div id="icon_loading" className="icon_loading">
              <Loader
                  type="CradleLoader"
                  color="#000"
                  height="100"
                  width="100"
              />
          </div>
      </div>
    );
  }
}

export default App;
