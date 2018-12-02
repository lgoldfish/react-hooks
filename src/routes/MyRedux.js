import React, { useContext, createContext } from 'react';

function reducerInAction(state, action) {
  if (typeof action.reducer === 'function') {
    return action.reducer(state);
  }
  return state;
}
export default function createStore(params) {
  const { reducer, initialState } = {
    reducer: reducerInAction,
    initialState: {},
  };
  const AppContext = React.createContext();
  const store = {
    initialState,
    dispatch: undefined,
    useContext() {
      return useContext(AppContext);
    },
  };
  const Provider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    if (!store.dispatch) {
      store.dispatch = async (action) => {
        if (typeof action === 'function') {
          await action(dispatch, store.initialState);
        } else {
          dispatch(action);
        }
      };
    }
    return <AppContext.Provider {...props} value={state} />;
  };
  return { Provider, store };
}
