export const userSignIn = (user) => {
    return {
        type: 'USER_SIGN_IN',
        payload: user
    }
}

export const userLogout = () => {
    return {
        type: 'USER_LOGOUT',
    }
}