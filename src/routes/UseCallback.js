import React, { useState, useCallback } from 'react';
import { Button } from 'antd';

export default () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const memoizedCallback = useCallback(
    () => {
      console.log('useCallback');
      console.log(count);
      return count;
    },
    [count2],
  );
  const handleAddCount = () => {
    console.log(count);
    setCount(preCount => preCount + 1);
  };
  return (
    <div>
      <h1>useCallBack</h1>
      <p>count: <span style={{ color: 'red' }}>{count}</span></p>
      <p>memoizedCallback : <span style={{ color: 'red' }}>{memoizedCallback()}</span></p>
      <Button style={{ marginRight: 20 }} type="primary" onClick={memoizedCallback}>callBack</Button>
      <Button type="primary" onClick={handleAddCount}>setcount</Button>
    </div>
  );
};
