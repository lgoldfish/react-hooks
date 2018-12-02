import React, { useReducer } from 'react';
import { Button } from 'antd';
import { handleCountAction, Provider, store } from '../models/hooks-reducer';

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
const UseReducer = () => {
  const reudxstate = store.useContext();
  const { name, count } = reudxstate;
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="useReducer">
     count is : <span style={{ color: 'red' }}>{state.count}</span>
      <Button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </Button>
      <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
      <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
      <h1>hook redux </h1>
      <p>name : <span style={{ color: 'red' }}>{name}</span> ; count : <span style={{ color: 'red' }}>{count}</span></p>
      <style>{`
        .useReducer {
          padding-top:20px;
        }
        .useReducer button {
            margin: 0 10px;
        }
      `}
      </style>
    </div>
  );
};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'reset':
//       return { count: action.payload };
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };
// const UseReducer = () => {
//   const initialCount = 6;
//   const [state, dispatch] = useReducer(reducer, initialState, { type: 'reset', payload: initialCount });
//   return (
//     <div className="useReducer">
//      count is : <span style={{ color: 'red' }}>{state.count}</span>
//       <Button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
//         Reset
//       </Button>
//       <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
//       <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
//       <style>{`
//         .useReducer {
//           padding-top:20px;
//         }
//         .useReducer button {
//             margin: 0 10px;
//         }
//       `}
//       </style>
//     </div>
//   );
// };

export default UseReducer;
