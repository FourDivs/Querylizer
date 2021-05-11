const codeState = {
    toggleEditor: false,
    codeValue: "CLICK ON GENERATE CODE BUTTON TO GET CODE",
    codeGenerateLoader: false

}
const codeEditor = (state = codeState, action) =>
{
    switch (action.type) {
        case 'TOGGLE_EDITOR':
            state = {...state, toggleEditor: !state.toggleEditor};
            return state;
        
        case 'TOGGLE_CODE_GENERATE_LOADER':
            state = {...state, codeGenerateLoader: !state.codeGenerateLoader};
            return state;

        case 'CODE_VALUE':
            state = {...state, codeValue: action.payload};
            return state;
        
        default:
            return state;
    }
}

export default codeEditor;