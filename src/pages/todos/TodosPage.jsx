import React from 'react';
import Todo from "../../components/todo/Todo";
import styles from "./Todos.module.css";


const posts=["todo 1", "todo 2", "todo 3"];

function TodosPage(props) {
    return (
        <>
            <h2>Todos page</h2>
            {posts.map((post,index)=> (
                <Todo key={index} todo={post}/>
            ))}

        </>
    );
}

export default TodosPage;