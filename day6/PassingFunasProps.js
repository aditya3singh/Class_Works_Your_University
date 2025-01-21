// 5.Passing Functions as Props: 
// •Create a component called Counter that accepts a function prop named onIncrement. When a 
// button is clicked, it should call this function to increase the count.


import React, { useState } from 'react';

function PassingFunasProps() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Current Count: {count}</h1> {/* Display the count */}
            <button onClick={handleIncrement}>Click here to Increment</button>
        </div>
    );
}

export default PassingFunasProps;
