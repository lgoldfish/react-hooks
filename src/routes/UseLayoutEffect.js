import React, {
  useEffect, useState, useLayoutEffect, useMutationEffect,
} from 'react';
import * as good from 'react';
import { Button } from 'antd';

// console.log('googd', good);

export default () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect', count);
  });
  useLayoutEffect(() => {
    console.log('useLayoutEffect', count);
  });
  useMutationEffect(() => {
    console.log('useMutationEffect', count);
  });
  const handleClick = () => {
    setCount(preCount => preCount + 1);
  };
  return (
    <div style={{ padding: 20 }}>
      <p>count : <span style={{ color: 'red' }}>{count}</span></p>
      <Button type="primary" onClick={handleClick}>count + </Button>
    </div>
  );
};
