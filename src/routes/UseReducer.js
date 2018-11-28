import React, { useReducer } from 'react';
import { Button } from 'antd';

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const UseReducer = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });
  return (
    <div>
     count is : <span style={{ color: 'red' }}>{state.count}</span>
      <Button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </Button>
      <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
      <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
    </div>
  );
};
