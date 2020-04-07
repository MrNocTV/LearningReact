import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // const timeout = setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);

        // return () => {
        //     // clean up work
        //     clearTimeout(timeout)
        // };
    }); 

    const assignedClasses = [];
    let btnClasses = '';

    if (props.personsLength !== 0) {
        assignedClasses.push(classes.red);
    }

    if (props.personsLength === 0) {
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

export default React.memo(cockpit);