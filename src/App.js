//ファイルのインポート
import React, { Component } from 'react';
import {List} from './list.js'
import {Input} from './input.js'
//import {Dialog} from './dialog.js'
import './App.css'
import Loader from 'react-loader-spinner'


//親コンポーネント(app)
class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            todo: [
                {title: 'Javascript覚える'},
                {title: 'jQuery覚える'},
                {title: 'ES2015覚える'},
                {title: 'React覚える'},
                {title: '隼人を倒す'},
            ]};
        //イベントハンドラー関数にthisをバインド
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.changeTodo = this.changeTodo.bind(this);
      //  this.storageTodo = this.storageTodo.bind(this);
    }
    //新規追加
    addTodo(value){
        //追加
        this.state.todo.push({
            title: value
        });
        //更新
        this.setState({
            todo : this.state.todo
        });
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

    //変更と保存
    changeTodo(i){
        //コピー
        const todo_update = this.state.todo.slice();
        //dialog表示
        const dialog = window.prompt("メモを記入してください", "");
        //変更
        todo_update[i] = {title: dialog};
        //更新
        this.setState({
            todo : todo_update
        });
    }



    render() {
    return (
      <div className="todo">
          <div className="title_group">
              <h1 className="title">TODOアプリ</h1>
          </div>
          <List todo={this.state.todo}
                deleteTodo={this.deleteTodo}
                changeTodo={this.changeTodo}/>
          <Input addTodo={this.addTodo} />
          <Loader
              type="CradleLoader"
              color="#00BFFF"
              height="100"
              width="100"
          />
      </div>
    );
  }
}

export default App;
