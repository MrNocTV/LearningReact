import React, { Component } from "react";
import Person from '../../components/Person/Person';
import classes from './App.css';
import styled from 'styled-components'
import ErrorBoundary from '../../ErrorBoundry/ErrorBoundry';

const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
    }
`

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
        const personIndex = this.state.persons.findIndex(person => person.id === id);

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
        let btnClasses = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundary>
                            key={index}
                            <Person
                            click={this.deletePersonHandler.bind(this, index)}
                            name={person.name}
                            age={person.age}
                            change={(event) => this.changeNameHandler(event, person.id)}
                        /></ErrorBoundary>
                    })}
                </div>
            );

            btnClasses = classes.Red;
        }

        const assignedClasses = [];
        if (this.state.persons.length !== 0) {
            assignedClasses.push(classes.red);
        }

        if (this.state.persons.length === 0) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <p className={assignedClasses.join(' ')}>Hello world</p>
                {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton> */}
                <button className={btnClasses} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default App;