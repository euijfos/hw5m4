import React, { useState, useEffect } from 'react';

function EffectExample() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Вы нажали ${count} раз`;
    }, [count]);

    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 1)}>Увеличить счетчик</button>
        </div>
    );
}

export default EffectExample;