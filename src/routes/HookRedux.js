import React, { useContext } from 'react';
import { Button } from 'antd';
import { handleCountAction, Provider, store } from '../models/hooks-reducer';

const HookRedux = (props) => {
  const state = store.useContext();
  const { name, count } = state;
  return (
    <div>
      <h1>hook Redux</h1>
      <p>name : <span style={{ color: 'red' }}>{name}</span> ; count : <span style={{ color: 'red' }}>{count}</span></p>
      <Button style={{ marginRight: 20 }} onClick={handleCountAction.bind(null, 'add')} type="primary">add redux</Button>
      <Button onClick={handleCountAction.bind(null, 'reduce')} type="primary">reduce redux</Button>
    </div>
  );
};
export default HookRedux;
