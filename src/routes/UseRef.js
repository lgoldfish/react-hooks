import React, { useRef } from 'react';
import { Button } from 'antd';

export default () => {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    console.log('inputEl', inputEl);
    inputEl.current.focus();
  };
  return (
    <div style={{ padding: 20 }}>
      <input type="text" ref={inputEl} />
      <br />
      <Button style={{ margin: 20 }} type="primary" onClick={onButtonClick}>Focus the input</Button>
    </div>
  );
};
