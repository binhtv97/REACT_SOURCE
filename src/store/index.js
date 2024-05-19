import { combineReducers } from "redux";
import { createStore } from "redux";

// reducer
import { appReducer } from '../states/appReducer';
import { todoReducer } from '../states/todoReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  todo: todoReducer
})

export const store = createStore(rootReducer);
/* rootReducer
{
  app: {
    isLoading: false,
    user: null,
    theme: 'light'
  },
  todo: {
    todos: [], //
    status: 'New'
  }
}

// sync store <> localstore -> redux-persist

// update todo of store
1. dispatch action
2. set state of store
*/