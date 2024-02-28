import React, { useState } from 'react';

function ArrayStateExample() {
    const [items, setItems] = useState(['item1', 'item2', 'item3']);

    const addItem = () => {


        
        setItems([...items, `item${items.length + 1}`]);
    };

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addItem}>Добавить элемент</button>
        </div>
    );
}

export default ArrayStateExample;