import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

const UseEffect = () => {
  const [isOnline, setIsOnline] = useState(true);
  const handleStatusChange = () => {
    setIsOnline(!isOnline);
  };
  const [count, setCount] = useState(0);
  const [string, setString] = useState('a');
  useEffect(() => {
    setTimeout(() => {
      console.log('count before is', count);
      setCount(preCount => preCount + 1);
      console.log('count after is', count);
      console.log('string is', string);
      setString('b');
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      handleStatusChange();
      console.log('string is', string);
    }, 3000);
    console.log('didUpdate');
    return () => {
      console.log('unmount');
    };
  }, []);
  return (
    <div>
      <h1>UseEffect{console.log('---')}</h1>
      <p>isOnline : <span style={{ color: 'red' }}>{String(isOnline)}</span> </p>
      <Button type="primary" onClick={handleStatusChange}>onLine</Button>
      <br />
      <p>Count : <span style={{ color: 'red' }}>{count}</span> </p>
      <Button type="primary" onClick={(_) => { setCount(preCount => preCount + 1); }}>setCount</Button>
      <p>String : <span style={{ color: 'red' }}>{string}</span></p>
    </div>
  );
};
export default UseEffect;
