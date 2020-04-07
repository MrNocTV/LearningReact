import React from 'react';
import Person from '../Person/Person';

const persons = (props) => {
    return props.persons.map((person, index) => {
        return <Person
                key={index}
                click={() => props.clicked(index)}
                name={person.name}
                age={person.age}
                change={(event) => props.changed(event, person.id)}
            />
    })
};

export default persons;