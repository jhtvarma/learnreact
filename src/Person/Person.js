import React from 'react';
import Radium, { StyleRoot } from 'radium';

//Functional Component - also referred as presentational, dumb and stateless
const person = (props) => {    
    console.log(props);
    console.log(props.children);
    return (<div>
        <p>I'm {props.name} and I'm {props.age} Years old</p>
        <p>{props.children}</p>
    </div>);
};

export default Radium(person);