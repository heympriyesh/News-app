
const Sports = {
    sports: []
}


const topBusinessReducer = (state = Sports, action) => {
    switch (action.type) {
        case 'ADD_SPORTS':
            return {
                sports: [...state.sports,...action.payload]
            }
        case 'SAVE_SPORTS':
            return{
                sports:[action.payload,...state.sports]
            }
            case 'REMOVE_SPORTS':
            return{
                sports:[...action.payload]
            }
            case 'UPDATE_SPORTS':
            let a=action.payload.id;
            let b=state.sports.map((x,id)=>a===id?action.payload:x)
            return{
            sports:[...b]
            }
        default:
            return state;
    }
}

export default topBusinessReducer;