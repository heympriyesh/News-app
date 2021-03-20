
const technolgy={
    tech:[]
}


const technologyReducer=(state=technolgy,action)=>{
    switch(action.type){
        case 'ADD_TECH':
            return{
                tech:[...state.tech,...action.payload]
            }
        case 'SAVE_TECH':
            return{
                ...state,
                tech:[action.payload,...state.tech,]
            }
        case 'REMOVE_TECHNOLOGY':
                return{
                    tech:[...action.payload]
                }
                case 'UPDATE_TECHNOLOGY':
                    let a=action.payload.id;
                    let b=state.tech.map((x,id)=>a===id?action.payload:x)
                    return{
                    tech:[...b]
                    }
            default:
                return state;
    }
}

export default technologyReducer;