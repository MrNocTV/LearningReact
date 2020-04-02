import React, { Component } from "react";
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { id: '1', name: 'Loc', age: 25 },
            { id: '2', name: 'Trang', age: 29 }
        ],
        otherState: 'other state',
        showPersons: true
    }

    changeNameHandler = (event, id) => {
        console.log('change ' + id);
        const personIndex = this.state.persons.findIndex(person => person.id === id);
        console.log(personIndex)
        if (personIndex === undefined && personIndex === null) {
            return;
        }

        const person = { 
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    deletePersonHandler = (index) => {
        const persons = this.state.persons;
        persons.splice(index, 1);
        this.setState({persons: persons})
    }

    render() {
        let persons = null;

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        if (this.state.showPersons) {
            persons = (                 
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person 
                            key={index}
                            click={this.deletePersonHandler.bind(this, index)}
                            name={person.name} 
                            age={person.age}
                            change={(event) => this.changeNameHandler(event, person.id)}
                        />
                    })};
                </div>
            );

            style.backgroundColor = 'red';
        }

        return (
            <div className="App">
                <h1>Hello world</h1>
                <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default App;