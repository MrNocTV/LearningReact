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

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: Math.floor(Math.random() * 30) },
        { name: 'Trang', age: 27 }
      ],
      otherState: personsState.otherState
    })
  }

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        { name: event.target.value, age: Math.floor(Math.random() * 30) },
        { name: 'Trang', age: 27 }
      ],
      otherState: personsState.otherState
    })
  }

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={switchNameHandler.bind(this, 'FUCK')}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} click={switchNameHandler} change={nameChangeHandler}>Fuho</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Fuho</Person>
    </div>
  );
}

export default app;
