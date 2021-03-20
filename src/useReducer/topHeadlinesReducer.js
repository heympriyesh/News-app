
const top = {
    top: []
}


const topHeadlinesReducer = (state = top, action) => {
    switch (action.type) {
        case 'ADD_TOP':
            return {
                top: [...state.top,...action.payload]
            }
        case 'SAVE_TOP':{
            return{
                ...state,
                top:[action.payload,...state.top]
            }
        }
        case 'REMOVE_TOPNEWS':
            return{
                top:[...action.payload]
            }
        case 'UPDATE_TOPNEWS':
            let a=action.payload.id;
            let b=state.top.map((x,id)=>a===id?action.payload:x)
            return{
            top:[...b]
            }
        default:
            return state;
    }
}

export default topHeadlinesReducer;