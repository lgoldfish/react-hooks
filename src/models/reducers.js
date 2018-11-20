import { combineReducers } from 'redux';

const initState = {
  show: true,
};
const isShowReducer = (state = initState, action) => {
  switch (action.type) {
    case 'true':
      return { show: true };
    default:
      return state;
  }
};
const reducers = combineReducers({
  isShowReducer,
});
export default reducers;
