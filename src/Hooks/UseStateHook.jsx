import React, { useState } from 'react';

const UseStateHook = () => {
 // 1. Declare a state variable named "count" initialized to 0
  const [count, setCount] = useState(0);

  // 2. Define handler functions to update the state
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  // 3. Render the UI with the state value and buttons
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment} style={{ margin: '5px', padding: '10px' }}>
        Increment
      </button>
      <button onClick={decrement} style={{ margin: '5px', padding: '10px' }}>
        Decrement
      </button>
      <button onClick={reset} style={{ margin: '5px', padding: '10px' }}>
        Reset
      </button>
    </div>
  );
}

export default UseStateHook