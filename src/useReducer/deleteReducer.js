
const delte={
    data:[]
}

export const deleteReducer=(state=delte,action)=>{
    switch(action.type){
        case 'DELETE_ITEM':
            return{
                data:[action.payload]
            }
        case 'REOVE':
            return{
                data:[action.payload]
            }
            default:
                return state
    }
}