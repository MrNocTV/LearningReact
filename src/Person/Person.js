import React from 'react';
import Radium from 'radium';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Age: {props.age}, name: {props.name}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
}

export default Radium(person);