const INITIAL_STATE = [];

function rootReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case 'ADD':
            return [...state, action.payload]
        case 'REMOVE':
            let result = state.filter(s => (
                s.id !== action.payload
            ))
            return result
        default:
            return state;
    }
}

export default rootReducer;