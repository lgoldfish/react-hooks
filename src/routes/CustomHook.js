import React, { useState, useEffect } from 'react';

const useCustomHook = (options = {}) => {
  const [string, setString] = useState('a');
  const handleStatusChange = (status) => {
    setString(status);
  };
  let timer = '';
  useEffect(() => {
    timer = setTimeout(() => {
      handleStatusChange(options.status);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return [string, setString];
};
const CustomHook = () => {
  const options = {
    status: 'b',
  };
  const [isOnline, setIsOnline] = useCustomHook(options);
  console.log('string', isOnline);
  useEffect(() => {
    setTimeout(() => {
      setIsOnline('c');
    }, 4000);
  }, []);
  return (
    <div>
      <li>isOnline is : <span style={{ color: 'red' }}>{String(isOnline)}</span> </li>
    </div>
  );
};
export default CustomHook;
