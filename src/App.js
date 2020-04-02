import React, { Component } from "react";
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { name: 'Loc', age: 25 },
            { name: 'Trang', age: 29 }
            ],
        otherState: 'other state'
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 25 },
                { name: 'Trang', age: 29 }
            ]
        });
    }

    changeNameHandler = (event) => {
        this.setState({
            persons: [
                {name: event.target.value, age: Math.floor(Math.random() * 30)},
                {name: 'Trang', age: 27}
            ]
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Hello world</h1>
                <button onClick={this.switchNameHandler.bind(this, 'FUCK')}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} change={this.changeNameHandler}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Fuho</Person>
            </div>
        );
    }

}

export default App;