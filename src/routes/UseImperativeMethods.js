import React, {
  useRef, useImperativeMethods, useState, forwardRef,
} from 'react';
import { Button } from 'antd';
import UseState from './UseState';

const Child = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useImperativeMethods(ref, () => ({
    handleClick: () => {
    //   inputRef.current.focus();
      console.log('useImperativeMethods');
      setCount(count + 1);
    },
  }));
  return (
    <div>
      <p>count : <span style={{ color: 'red' }}>{count}</span></p>
      <input type="text" ref={ref} />
    </div>
  );
});
export default () => {
  const inputRef = useRef(null);
  const child2 = useRef(null);
  const onButtonClick = () => {
    console.log('inputEl', inputRef);
    inputRef.current.handleClick();
  };
  return (
    <div style={{ padding: 20 }}>
      <Child style={{ margin: 20 }} ref={inputRef} />
      <Button style={{ margin: 20 }} type="primary" onClick={onButtonClick}>Focus the input</Button>
    </div>
  );
};
