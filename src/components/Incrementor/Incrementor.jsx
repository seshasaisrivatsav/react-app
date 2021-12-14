import React, { useState } from 'react';

const Incrementor = () => {
    const [increment, setIncrement] = useState(1);

    const onIncrementClick = () => {
        setIncrement(increment+1);
    };

    const resetIncrement = () => {
      setIncrement(1);
    };

    const onDecrementClick = () => {
        setIncrement(increment-1);
    };

    return (
        <div className="make-center">
            <button onClick={onIncrementClick}> Increment </button>
            <button onClick={onDecrementClick}> Decrement </button>
            <h2>Current Value: {increment}</h2>
            <button onClick={resetIncrement} value="Reset"> Reset </button>
        </div>
    );
};

export default Incrementor;