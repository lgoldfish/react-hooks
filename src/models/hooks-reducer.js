import ReactHookRedux from 'react-hooks-redux';

export const { Provider, store } = ReactHookRedux({
  isDev: true,
  initialState: { name: 'react-hooks-redux', count: 0 },
});
const actionReducer = type => ({
  reducer(state) {
    console.log('action is', state, type);
    if (type === 'add') {
      return { ...state, count: state.count + 1 };
    } if (type === 'reduce') {
      return { ...state, count: state.count - 1 };
    }
    return state;
  },
});
export const handleCountAction = (type) => {
  store.dispatch(actionReducer(type));
};
