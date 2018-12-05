import React from 'react';


export function List(props){
    return(
        <ul className="ul_todo">
            {props.todo.map((todo, i) => {
                return <li key={i}>
                    <button onClick={() => props.deleteTodo(i)}>完了</button>
                    {todo.title}
                    <button onClick={() => props.changeTodo(i)}  className="button_change">変更</button>
                    {/*<button onClick={() => props.storageTodo(i)} className="button_storage">保存</button>*/}
                    </li>
            })}
        </ul>
    )
}