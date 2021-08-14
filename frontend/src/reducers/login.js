const loggedReducer = (state = null, action) => {
  switch (action.type) {
    case 'USER_SIGN_IN':
      state = action.payload;
      return state;

    case 'USER_LOGOUT':
      state = null;
      return state;
    default:
      return state;
  }
};

export default loggedReducer;
