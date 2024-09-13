import React from 'react';
import styles from './Description.module.css';

function Description(props) {
    return (
        <div>
            <span>{props.title}</span>
            <span>{props.description}</span>
        </div>
    );
}

export default Description;