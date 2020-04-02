import React, { Component } from "react";
import Person from './Person/Person';
import './App.css';
import Radium from 'radium';

class App extends Component {

    state = {
        persons: [
            { id: '1', name: 'Loc', age: 25 },
            { id: '2', name: 'Trang', age: 29 }
        ],
        otherState: 'other state',
        showPersons: false
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

        this.setState({ persons: persons });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    deletePersonHandler = (index) => {
        const persons = this.state.persons;
        persons.splice(index, 1);
        this.setState({ persons: persons })
    }

    render() {
        let persons = null;

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
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
                    })}
                </div>
            );

            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }

        const classes = [];
        if (this.state.persons.length !== 0) {
            classes.push('red');
        }

        if (this.state.persons.length === 0) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <p className={classes.join(' ')}>Hello world</p>
                <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default Radium(App);