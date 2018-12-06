//ファイルのインポート
import React, { Component } from 'react';
import {List} from './list.js'
import {Input} from './input.js'
import './App.css'


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
        //保存
        this.setState({
            todo : this.state.todo
        });
    }
    //取り消し機能
    deleteTodo(i){
        //コピー
        const todo_delete = this.state.todo.slice();
        //todo_delete[i] = (({title}) =>
        //    ({title: <del>{title}</del>}));

        //取り消し線
        todo_delete[i] = {title: <del>delete</del>};
        //保存
        this.setState({
            todo : todo_delete
        });
    }

    //変更と保存
    changeTodo(i){
        //コピー
        const todo_update = this.state.todo.slice();
        //todo_update[i] ={title: ''};
        todo_update[i] = {title: 'Update'};
        //保存
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
      </div>
    );
  }
}

export default App;
