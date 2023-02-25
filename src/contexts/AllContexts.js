import React, { createContext, useReducer } from "react";
import { oReducer, dReducer } from "../reducers/AllReducers";


export const OriginContext = createContext()
export const DestinationContext = createContext()

export const OconProvider = (props)=>{
    const [origin,dispatchOrigin] = useReducer(oReducer,{
        lat : null,
        long : null,
        address:"",
        name:""
    })
    return(
        <OriginContext.Provider value={{origin,dispatchOrigin}}>
           {props.children}
        </OriginContext.Provider>
    )
}

export const DconProvider = (props)=>{
    const[destination,dispatchDestination] =useReducer(dReducer,{
                lat:null,
                long:null,
                address:"",
                name:""
    })
    return(
        <DestinationContext.Provider
                value ={{destination,dispatchDestination}}
            >
            {props.children}
        </DestinationContext.Provider>
    )
}
