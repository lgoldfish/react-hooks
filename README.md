# react-hooks  [HOOKS](https://reactjs.org/docs/hooks-intro.html)

>hooks概念在React Conf 2018被提出来，并将在未来的版本中被引入，hooks遵循函数式编程的理念，主旨是在函数组件中引入类组件中的状态和生命周期，并且这些状态和生命周期函数也可以被抽离，实现复用的同时，减少函数组件的复杂性和易用性。

```
 npm install react@16.7.0-alpha.2
 npm install react-dom@16.7.0-alpha.2

 npm install eslint-plugin-react-hooks@next
    // Your ESLint configuration
    {
    "plugins": [
        // ...
        "react-hooks"
    ],
    "rules": {
        // ...
        "react-hooks/rules-of-hooks": "error"
    }
    }
``` 
## Hooks API Reference
```
   ** Basic Hooks **
    useState
    useEffect
    useContext

   ** Additional Hooks **
    useReducer
    useCallback
    useMemo
    useRef
    useImperativeMethods
    useMutationEffect
    useLayoutEffect
```
## State Hook
>>>定义组件状态

```
    const useStateExample = () => {
        const [count, setCount] = useState(0);
        const [list, setList] = useState([]);
        const [object, setObject] = useState({ name: 'lishishi', age: 28 });
    }

```
>>> State Hooks的定义必须在函数组件的最高一级，不能在嵌套，循环等语句中使用

一个函数组件可以存在多个State Hooks，并且useState返回的是一个数组，数组的每一个元素是没有标识信息的，完全依靠调用useState的顺序来确定哪个状态对应于哪个变量，所以必须保证使用useState在函数组件的最外层
```
 const useStateExample = () => {
     if(Math.random() > 1) {
        const [count, setCount] = useState(0);
        const [list, setList] = useState([]);
     }else {
        const [object, setObject] = useState({ name: 'lishishi', age: 28 });
     }
    }
```

## Effect Hook 
>>>实现生命周期 

```javascript
    useEffect(() => {
        //componentDidMount和componentDidUpdate周期的函数体
        return ()=>{ 
        //componentWillUnmount周期的函数体
        }
    })
    // ---------------------
    useEffect(() => {
        //仅在componentDidMount的时候执行
    },[]);
    // -----------------------
    useEffect(() => {
        //仅在componentDidMount的时候执行
        //只有stateName的值发生改变
    },[stateName]);

```

>>> 如果存在多个useState和useEffect时，必须按顺序书写，定义一个useState后，紧- 接着就使用一个useEffect函数。

useEffect函数必须位于函数组件的最高一级

```
useState('Mary')           
useEffect(persistForm)    
useState('Poppins')       
useEffect(updateTitle)

```

