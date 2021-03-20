export const addData=(data)=>{
    return{
        type:'ADD_DATA',
        payload:data
    }
}
export const topBusiness=(data)=>{
    return{
        type:'ADD_BUSI',
        payload:data
    }
}
export const topData=(data)=>{
    return{
        type:'ADD_TOP',
        payload:data
    }
}
export const topTech=(data)=>{
    return{
        type:'ADD_TECH',
        payload:data
    }
}
export const topSports = (data) => {
    return {
        type: 'ADD_SPORTS',
        payload: data
    }
}
export const topEntertain = (data) => {
    return {
        type: 'ADD_ENTERTAIN',
        payload: data
    }
}
export const topSearch=(data)=>{
    return{
        type:'ADD_SEARCH',
        payload:data
    }
}
export const topCustom=(data)=>{
    return{
        type:'ADD_CUSTOM',
        payload:data
    }
}
export const saveTech=(value)=>{
    return{
        type:"SAVE_TECH",
        payload:value
    }
}
export const saveEnter=(data)=>{
    return{
        type: 'SAVE_ENTERTAIN',
        payload:data
    }
}
export const saveBusiness=(data)=>{
    return{
        type:'SAVE_BUSI',
        payload:data
    }
}
export const saveSports=(data)=>{
    return{
        type:'SAVE_SPORTS',
        payload:data
    }
}
export const saveTop=(data)=>{
    return{
        type:'SAVE_TOP',
        payload:data
    }
}
export const deleteItem=(data)=>{
    return{
        type:'DELETE_ITEM',
        payload:data
    }
}
export const remove=(data)=>{
    return{
        type:'REMOVE',
        payload:data
    }
}
export const removeEntertain=(data)=>{
    return{
        type:'REMOVE_ENTERTAIN',
        payload:data
    }
}
export const removeTechnology=(data)=>{
    return{
            type:'REMOVE_TECHNOLOGY',
            payload:data
        }
}
export const removeBusiness=(data)=>{
    return{
            type:'REMOVE_BUSINESS',
            payload:data
        }
}
export const removeSports=(data)=>{
    return{
            type:'REMOVE_SPORTS',
            payload:data
        }
}
export const removeCustom=(data)=>{
    return{
            type:'REMOVE_CUSTOM',
            payload:data
        }
}
export const removeTopnews=(data)=>{
    return{
            type:'REMOVE_TOPNEWS',
            payload:data
        }
}
// Update Redux
export const updateTopnews=(data)=>{
    return{
        type:'UPDATE_TOPNEWS',
        payload:data
    }
}
export const updateSports=(data)=>{
    return{
        type:'UPDATE_SPORTS',
        payload:data
    }
}
export const updateBusiness=(data)=>{
    return{
        type:'UPDATE_BUSINESS',
        payload:data
    }
}
export const updateTechnology=(data)=>{
    return{
        type:'UPDATE_TECHNOLOGY',
        payload:data
    }
}
export const updateEntertainment=(data)=>{
    return{
        type:'UPDATE_ENTERTAINMENT',
        payload:data
    }
}