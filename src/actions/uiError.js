import { types } from "../types/types"


export const uiError  =(err) =>{

    return {
        type: types.uiSetError,
        payload: err
    }
}

export const uiRemoveError  =() =>{

    return {
        type: types.uiRemoveError
        
    }
}