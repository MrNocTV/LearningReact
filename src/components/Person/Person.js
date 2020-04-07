import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import classes from  './Person.css'
import PropTypes from 'prop-types';
import withClass from '../../hoc/withClass';

const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    margin-bottom: 16px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px
    }
`;

const person = (props) => {

    const inputElementRef = useRef(null);

    useEffect(() => {
        inputElementRef.current.focus();
    }, []);

    console.log('[Person.js] rendering...')
    return (
        // <div className="Person" style={style}>
        // <StyledDiv>
        [   <p key="123" onClick={props.click}>Age: {props.age}, name: {props.name}</p>,
            <input 
                key="456" 
                type="text" 
                ref={inputElementRef}
                onChange={props.change} 
                value={props.name} 
            />
        ]
        // </StyledDiv>
    )
}

person.propTypes = {
    click: PropTypes.func,
    age: PropTypes.number,
    name: PropTypes.string,
    change: PropTypes.func
};

export default withClass(person, classes.Person);