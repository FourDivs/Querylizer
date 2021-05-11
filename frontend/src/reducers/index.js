import loggedReducer from "./login"
import codeEditor from "./codeEditor.js"
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    user: loggedReducer,
    codeEditor: codeEditor
})

export default allReducers