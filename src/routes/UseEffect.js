import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  const [isOnline, setIsOnline] = useState(null);
  const handleStatusChange = (status) => {
    setIsOnline(status.isOnline);
  };
  useEffect(() => {
    console.log('didUpdate');
    return () => {
      console.log('unmount');
    };
  });
  return (
    <div>
          UseEffect
    </div>
  );
};
export default UseEffect;
