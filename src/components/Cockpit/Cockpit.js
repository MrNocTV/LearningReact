import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClasses = '';

    if (props.persons.length !== 0) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length === 0) {
        assignedClasses.push(classes.bold);
    }

    if (props.showPersons) {
        btnClasses = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <p className={assignedClasses.join(' ')}>Hello world</p>
            <button className={btnClasses} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;