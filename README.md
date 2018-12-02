# react-hooks  [HOOKS](https://reactjs.org/docs/hooks-intro.html)

- hooks概念在React Conf 2018被提出来，并将在未来的版本中被引入，hooks遵循函数式编程的理念，主旨是在函数组件中引入类组件中的状态和生命周期，并且这些状态和生命周期函数也可以被抽离，实现复用的同时，减少函数组件的复杂性和易用性。
-  函数组件 (functional component) 内部能够”钩住“ React 内部的 state 和 life-cycles。
- 真正功能强大的地方是使我们能够更轻松地复用组件逻辑（custom hooks）
- 让FunctionalComponent具有ClassComponent的功能

## 设计Hooks主要是解决ClassComponent的几个问题：
- 很难复用逻辑（只能用HOC，或者render props），会导致组件树层级很深
- 会产生巨大的组件（指很多代码必须写在类里面）
- 类组件很难理解，比如方法需要bind，this指向不明确

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
## Rules of Hooks 
- 只能在顶层调用Hooks 。不要在循环，条件或嵌套函数中调用Hook
- 只能在functional component中使用

## State Hook
>>>定义组件状态
- 避免组件的 state 结构过于臃肿，能够独立处理每个 state
- 写法非常直观，一眼就可以看出和这个 state 相关的两个变量

```
    const useStateExample = () => {
        const [count, setCount] = useState(0);
        const [list, setList] = useState([]);
        const [object, setObject] = useState({ name: 'lishishi', age: 28 });
    }

```
- State Hooks的定义必须在函数组件的最高一级，不能在嵌套，循环等语句中使用

- 一个函数组件可以存在多个State Hooks，并且useState返回的是一个数组，数组的每一个元素是没有标识信息的，完全依靠调用useState的顺序来确定哪个状态对应于哪个变量，所以必须保证使用useState在函数组件的最外层
- 最主要的原因就是你不能确保这些条件语句每次执行的次数是一样的，也就是说如果第一次我们创建了state1 => hook1, state2 => hook2, state3 => hook3这样的对应关系之后，下一次执行因为something条件没达成，导致useState(1)没有执行，那么运行useState(2)的时候，拿到的hook对象是state1的，那么整个逻辑就乱套了，所以这个条件是必须要遵守的！

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
>>>实现生命周期 （life-cycles）
- 类似 redux 中的 subscribe，每当 React 因为 state 或是 props 而重新 render 的之后，就会触发 useEffect 里的这个 callback listener（在第一次 render 和每次 update 后触发）
- 在生命周期内做的操作很多都会产生一些 side-effect（副作用）的操作，比如更新 DOM，fetch 数据，等等。

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
        //只有stateName\props.id的值发生改变
    },[stateName,props.id]);
   
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
        }
         if (prevProps.id !== this.props.id) {
        }
    }

```

- useEffect函数必须位于函数组件的最高一级

```
useState('Mary')           
useEffect(persistForm)    
useState('Poppins')       
useEffect(updateTitle)

```
## Context Hook 
>>> 替代了 <Context.Consumer> 使用 render props 的写法，使组件树更加简洁。

## Reducer Hook
>>> 相当于组件自带的 redux reducer，负责接收 dispatch 分发的 action 并更新 state
##  [配合hooks重新实现react-redux](https://npm.taobao.org/package/react-hooks-redux)
>>> useReducer + useContext 钩子上进行一层很简单的封装以达到和以往 react-redux \ redux-thunk \ redux-logger 类似的功能

```
    npm install react-hooks-redux

```

## React.memo() React 16.6.0 
- PureComponent 要依靠 class 才能使用。而 React.memo() 可以和 functional component 一起使用
 

 ```
    const MySnowyComponent = React.memo(function MyComponent(props) {
    // only renders if props have changed!
    });

    // can also be an es6 arrow function
    const OtherSnowy = React.memo(props => {
    return <div>my memoized component</div>;
    });

    // and even shorter with implicit return
    const ImplicitSnowy = React.memo(props => (
    <div>implicit memoized component</div>
    ));

 ```
 ## useRef 
 ## useCallBack
 >>> -  e.g. shouldComponentUpdate ; This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders
 
 ```
 const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);

 ```
 ## useMemo 

- useMemo will only recompute the memoized value when one of the inputs has changed
- useCallback(fn, inputs) is equivalent to useMemo(() => fn, inputs)

```
 const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

```

## useImperativeMethods

- useImperativeMethods customizes the instance value that is exposed to parent components when using ref
- useImperativeMethods(ref, createInstance, [inputs])

## useMutationEffect  useLayoutEffect useEffect 差别
>>> 
- useMutationEffect
It fires synchronously before Layout phase i.e. during the same phase that React performs its DOM mutations. Use it to perform blocking custom DOM mutations without taking any DOM measurement/reading layout.

- useLayoutEffect
It fires synchronously after all DOM mutations but before Paint phase. Use this to read layout(styles or layout information) from the DOM and then perform blocking custom DOM mutations based on layout.

- useEffect
It runs after the render is committed to the screen i.e. after Layout and Paint phase. Use this whenever possible to avoid blocking visual updates
 
# 注意
 - 目前react-hot-loader不能和hooks一起使用

## [Mixin => HOC => Render Prop => hooks](https://segmentfault.com/a/1190000016876476?utm_source=tag-newest)