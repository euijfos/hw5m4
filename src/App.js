import React, { useRef } from 'react';

function RefExample() {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>click</button>
        </div>
    );
}

export default RefExample;