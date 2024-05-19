const initialState = {
  isLoading: false,
  user: null,
  theme: 'light'
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case 'SET_LOADING': {
      return {
        ...state,
        isLoading: payload
      }
    }
    case 'SET_USER': {
      return {
        ...state,
        user: payload
      }
    }
    case 'SET_THEME': {
      return {
        ...state,
        theme: payload
      }
    }
    default:
      return state;
  }
}