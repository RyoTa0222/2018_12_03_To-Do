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
            ]
        };
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.changeTodo = this.changeTodo.bind(this);
        this.storageTodo = this.storageTodo.bind(this);
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

    //削除機能
    deleteTodo(i){
        //削除
        this.state.todo.splice(i, 1);
        //保存
        this.setState({
            todo : this.state.todo
        });
    }

    //変更と保存
    changeTodo(i){
        this.state.todo.replace(
            (this.state.todo[i].title), '<input type="text"  placeholder="メモを記入してください" />'
    )
    }
    storageTodo(i){

    }


    render() {
    return (
      <div className="todo">
          <div className="title_group">
              <h1 className="title">TODOアプリ</h1>
          </div>
          <List todo={this.state.todo} deleteTodo={this.deleteTodo}/>
          <Input addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
