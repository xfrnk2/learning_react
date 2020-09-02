import React from 'react';
import Child from './Child';

const Parent = () => {
    let persons = [
        {
            name: "태호",
            age: 20
        },
        {
            name: "태호",
            age: 15
        },
        {
            name: "태호",
            age: 10
        }
    ];

    return (
        <div>
            Parent
            
            {persons.map((person) => {
                return <Child person={person}></Child>
            })}

        </div>
    );
}

export default Parent;