import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p>Fuck {props.age} you, {props.name}</p>
            <p onClick={() => props.click('YOU')}>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
}

export default person;