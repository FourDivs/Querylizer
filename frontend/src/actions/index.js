export const userSignIn = (user) => {
  return {
    type: 'USER_SIGN_IN',
    payload: user,
  };
};

export const userLogout = () => {
  return {
    type: 'USER_LOGOUT',
  };
};

export const toggleCodeEditor = () => {
  return {
    type: 'TOGGLE_EDITOR',
  };
};

export const codeGenerateLoader = () => {
  return {
    type: 'TOGGLE_CODE_GENERATE_LOADER',
  };
};

export const codeValue = (value) => {
  return {
    type: 'CODE_VALUE',
    payload: value,
  };
};
