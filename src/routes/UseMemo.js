import React, { useMemo, useState } from 'react';
import { Button } from 'antd';

export default () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const computeExpensiveValue = a => a * 10;
  const memoizedValue = useMemo(() => computeExpensiveValue(count), [count]);
  return (
    <div>
      <h1>useMemo</h1>
      <p>count : <span style={{ color: 'red' }}>{memoizedValue}</span></p>
      <Button onClick={() => { setCount(preCount => preCount + 1); }}> useMemo</Button>
    </div>
  );
};
