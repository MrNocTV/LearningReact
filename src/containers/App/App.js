import React, { Component } from "react";
import classes from './App.css';
import styled from 'styled-components'
import Persons from '../../components/Persons/Persons';
import Cockpit from '../../components/Cockpit/Cockpit';

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

    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
        this.state = {
            persons: [
                { id: '1', name: 'Loc', age: 25 },
                { id: '2', name: 'Trang', age: 29 }
            ],
            otherState: 'other state',
            showPersons: false
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
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
        console.log('[App.js] render');

        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons 
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.changeNameHandler}
            />
        }

        return (
            <div className={classes.App}>
                <Cockpit 
                    showPersons={this.state.showPersons} 
                    personsLength={this.state.persons.length} 
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;