import loggedReducer from "./login"
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    user: loggedReducer
})

export default allReducers