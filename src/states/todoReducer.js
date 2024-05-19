const initialState = {
  todos: [],
  status: 'New'
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case 'SET_TODO': {
      return {
        ...state,
        todos: payload
      }
    }
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [...state.todos, payload]
      }
    }
    case 'SET_STATUS': {
      return {
        ...state,
        status: payload
      }
    }
    default:
      return state;
  }
}