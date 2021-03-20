
const business = {
    busin: []
}


const topBusinessReducer = (state = business, action) => {
    switch (action.type) {
        case 'ADD_BUSI':
            return {
                busin: [...state.busin,...action.payload]
            }
        case 'SAVE_BUSI':
            return{
                ...state,
                busin:[action.payload,...state.busin]
            }
            case 'REMOVE_BUSINESS':
            return{
                busin:[...action.payload]
            }
            case 'UPDATE_BUSINESS':
                let a=action.payload.id;
                let b=state.busin.map((x,id)=>a===id?action.payload:x)
                return{
                busin:[...b]
                }
        default:
            return state;
    }
}

export default topBusinessReducer;