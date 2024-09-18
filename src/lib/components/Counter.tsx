import { useCounterStore } from '$lib/stores/counterStore';
// src/components/Counter.tsx
import React from 'react';

const Counter = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      <h1>{count}</h1>
      <button type={'button'} onClick={increment}>
        Increment
      </button>
      <button type={'button'} onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
