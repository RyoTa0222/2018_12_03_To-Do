import React from 'react';

export function List(props){
    return(
        <ul className="ul_todo">
            {props.todo.map((todo, i) => {
                return <li key={i}>
                    {todo.title}
                    <div className="btn_list_position">
                        <button onClick={() => props.deleteTodo(todo, i)} className="button button_delete">完了</button>
                        <button onClick={() => props.changeTodo(i)}  className="button button_change">変更</button>
                    </div>
                    {/*<button onClick={() => props.storageTodo(i)} className="button_storage">保存</button>*/}
                    </li>
            })}
        </ul>
    )
}