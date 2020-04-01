import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Loc', age: 25 },
      { name: 'Trang', age: 29 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name}>Fuho</Person>
        <Person name={this.state.persons[1].name}>Fuho</Person>
      </div>
    );
  }
}

export default App;
