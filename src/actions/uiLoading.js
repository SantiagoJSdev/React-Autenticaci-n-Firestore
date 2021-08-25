
// startLoading y finishLoading

import { types } from "../types/types"

export const startLoading = ()=>{

    return {
        type: types.uiStartLoading,
        // payload: true
        
    }

}

export const finishLoading = ()=>{

    return {
        type: types.uiFinishLoading,
        // payload: false
        
    }

}