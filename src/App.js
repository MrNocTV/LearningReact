import React, { Component } from "react";
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { name: 'Loc', age: 25 },
            { name: 'Trang', age: 29 }
            ],
        otherState: 'other state',
        showPersons: false
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

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = (                 
                <div>
                    {this.state.persons.map(person => {
                        return <Person name={person.name} age={person.age} change={this.changeNameHandler}/>
                    })};
                </div>
            ); 
        }

        return (
            <div className="App">
                <h1>Hello world</h1>
                <button onClick={this.togglePersonsHandler}>Switch Name</button>
                {persons}
            </div>
        );
    }

}

export default App;