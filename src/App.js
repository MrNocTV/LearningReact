import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Loc', age: 25 },
      { name: 'Trang', age: 29 }
    ],
    otherState: 'other state'
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Loc', age: 25 },
        { name: 'Trang', age: 27 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name}>Fuho</Person>
      <Person name={personsState.persons[1].name}>Fuho</Person>
    </div>
  );
}




export default app;
