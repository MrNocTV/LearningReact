import React from 'react';
import styled from 'styled-components';
// import './Person.css'

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

    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>Age: {props.age}, name: {props.name}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </StyledDiv>
    )
}

export default person;