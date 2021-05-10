const initialState = {
  role: 1,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_ROLE') {
    return {
      ...state,
      role: action.inputValue,
    };
  }

  return state;
};

export default reducer;
