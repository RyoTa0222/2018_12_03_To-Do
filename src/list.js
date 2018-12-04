import React from 'react';


export function List(props){
    return(
        <ul className="ul_todo">
            {props.todo.map((todo, i) => {
                return <li key={i}><a href="#" onClick={() => props.deleteTodo(i)}>delete</a>
                    {todo.title}</li>
            })}
        </ul>
    )
}