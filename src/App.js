import React, { Component } from 'react';
import './App.css'
//子コンポーネント(List)
function List(props){
    return(
        <ul class="ul_todo">
            {props.todo.map((todo, i) => {
                return <li key={i}><a href="#" onClick={() => props.deleteTodo(i)}>delete</a>
                    {todo.title}</li>
            })}
        </ul>
    )
}

//子コンポーネント(Input)
class Input extends Component {
    constructor(props){
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(){
        this.props.addTodo(this.refs.newText.value);
        this.refs.newText.value='';
    }
    render(){
        return (
            <div class="input_todo">
                <input type="text" ref="newText" placeholder="メモを記入してください" className="input_textarea"/>
                <div class="button_position">
                    <button onClick={this.addTodo} className="button_add">Addition</button>
                </div>
            </div>
        )
    }
}


//親コンポーネント(app)
class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            todo: [
                {title: 'Javascript覚える'},
                {title: 'jQuery覚える'},
                {title: 'ES2015覚える'},
                {title: 'React覚える'}
            ]
        };
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
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

    render() {
    return (
      <div class="todo">
          <div class="title_group">
              <h1 className="title">TODOアプリ</h1>
          </div>
          <List todo={this.state.todo} deleteTodo={this.deleteTodo}/>
          <Input addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
