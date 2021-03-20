
const initialState = {
    value: []
}

const singupReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return {
                ...state,
               value:[...state.value,action.payload]
            }

        default:
            return state;
    }
}
export default singupReducer;