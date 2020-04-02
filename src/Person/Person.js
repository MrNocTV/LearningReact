import React from 'react';
import Radium from 'radium';
import './Person.css'

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>Age: {props.age}, name: {props.name}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
}

export default Radium(person);