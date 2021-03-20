
const custom = {
    custom: []
}

const customSerachReducer = (state = custom, action) => {
    // console.log("Hello",action.payload);
    switch (action.type) {
        case 'ADD_CUSTOM':
            return {
                custom: [ action.payload]
            }
            case 'REMOVE_CUSTOM':
                return{
                    custom:[...action.payload]
                }
        default:
            return state;
    }
}
export default customSerachReducer;