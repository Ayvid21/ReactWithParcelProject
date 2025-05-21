import React, { useState } from 'react';

const Header = ( props ) => {
    // useState is a react hook that allows us to use state in functional components
    // useState returns an array with two elements
    // 1. the current state value
    // 2. a function that allows us to update the state value
    // const arr = useState('Mario');
    // const name = arr[0];
    // const setName = arr[1]; 

    const [name, setName] = useState('Mario');
    let name1 = 'Maria'; // not rerender on change 
    return(
        <div>
            {/* using useState hook */}
            <h2>Hello, {name} !</h2>
            <h2>Hello, {name1} !</h2>
            <button onClick={() => setName('Mariyam')}>Change Name</button>
            <button onClick={() => {name1 = 'Maryam'}}>Change Namam</button>

            {/* using props is an object */}
            <h2>Country Name: {props.country}</h2>
        </div>
    );
}

export default Header;