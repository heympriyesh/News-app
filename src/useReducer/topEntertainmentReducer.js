
const Entertainment = {
    enter: []
}


const topEntertainmentReducer = (state = Entertainment, action) => {
    switch (action.type) {
        case 'ADD_ENTERTAIN':
            // state=action.payload.map((x,id)=>{x,id});
            // console.log("From the entertainment section",state)
            return {
                enter: [...state.enter,...action.payload]
            }
        case 'SAVE_ENTERTAIN':
            return{
                ...state,
                enter:[action.payload,...state.enter]
            }
        case 'REMOVE_ENTERTAIN':
            return{
                enter:[...action.payload]
            }
            case 'UPDATE_ENTERTAINMENT':
                let a=action.payload.id;
                let b=state.enter.map((x,id)=>a===id?action.payload:x)
                console.log("value of entertainment from redu",action.payload);
                return{
                enter:[...b]
                }
        default:
            return state;
    }
}

export default topEntertainmentReducer;