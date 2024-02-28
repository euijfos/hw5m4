import React, { useState } from 'react';

function ObjectStateExample() {
    const [person, setPerson] = useState({ name: 'Ayana', age: 17 });

    const handleAgeChange = () => {

        setPerson({ ...person, age: person.age + 1 });
    };

    return (
        <div>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <button onClick={handleAgeChange}>Увеличить возраст</button>
        </div>
    );
}
export default ObjectStateExample;