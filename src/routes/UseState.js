import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

const asyncFn = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(6);
  }, 2000);
});
const UseState = () => {
  console.log(1);
  const [count, setCount] = useState(0);
  const handleClickCount = () => {
    setCount(count + 1);
  };
  console.log(2);
  const [list, setList] = useState([]);
  const [object, setObject] = useState({ name: 'lishishi', age: 28 });
  console.log(3);
  useEffect(() => {
    console.log(4);
    console.log('count is', count);
    handleClickCount();
    console.log('count2 is', count);
    document.title = ` 你点了我 ${count} 次 `;
  }, []);
  console.log(5);

  console.log(6);
  const [asyncCount, setAsyncCount] = useState(() => {
    const initialState = 6;
    return initialState;
  });
  return (
    <div className="hook1">
      <h1>UseState</h1>
         点了我 <h1 style={{ display: 'inline-block' }}>{ count }</h1> 次！
      <Button type="primary" onClick={handleClickCount}>Count</Button>
      <Button onClick={_ => setCount(preCount => preCount + 1)}> + </Button>
      <Button onClick={_ => setCount(preCount => preCount - 1)}> - </Button>
      <hr />
      <Button type="primary" onClick={_ => setList(!list.length ? [{ name: 'liurushi' }, { name: 'suxiaoxiao' }, { name: 'lishishi' }, { name: 'chenyuanyan' }] : [])}> List </Button>
      <ul>
        {list.map((item, index) => (
          <li key={item.name + index}>{item.name}</li>
        ))}
      </ul>
      <hr />
      <Button type="primary" onClick={_ => setObject(preObject => ({ ...preObject, name: 'chenyuanyuan', age: 14 }))}>换一个</Button>
      <p>姓名：{object.name} 年龄：{ object.age}</p>
      <hr />
      <span>{asyncCount} h </span>
      <Button onClick={_ => setAsyncCount(asyncCount + 1)}>长久</Button>

      <style>{`
        .hook1 button {
            margin-left:10px;
        }
      `}
      </style>
    </div>
  );
};
export default UseState;
