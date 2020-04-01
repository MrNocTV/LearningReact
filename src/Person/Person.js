import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>Fuck {Math.floor(Math.random() * 30)} you, {props.name}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;