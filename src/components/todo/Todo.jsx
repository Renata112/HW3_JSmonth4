import React from 'react';
import styles from './Todo.module.css'

function Todo({todo}) {
    return (
        <div>
            {todo}
        </div>
    );
}

export default Todo;