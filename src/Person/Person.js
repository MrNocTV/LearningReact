import React from 'react';

const person = (props) => {
    console.log(props)
return <p>Fuck { Math.floor(Math.random() * 30) } you, {props.name}</p>
}

export default person;