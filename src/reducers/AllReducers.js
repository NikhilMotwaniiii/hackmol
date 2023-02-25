export const oReducer = (state,action) => {
    switch(action.type){
        case 'ADD_ORIGIN':
            return{
            lat: action.payload.lat,
            long : action.payload.long,
            address : action.payload.address,
            name : action.payload.name
        }
        default:
            return state
    }
}
export const dReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_DESTINATION':
                return{
                    lat:action.payload.lat,
                    long:action.payload.long,
                    address:action.payload.address,
                    name:action.payload.name
                }
            default:
                return state
    }
}