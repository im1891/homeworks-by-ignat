
type loadingACType = ReturnType<typeof loadingAC>

type InitStateType = {
    isLoading: boolean
}

const initState: InitStateType = {
isLoading: false
}

export const loadingReducer = (state: InitStateType = initState, action: loadingACType): InitStateType => { // fix any
    switch (action.type) {
        case "TOGGLE-IS-LOADING": {
            return {...state, isLoading: action.payload.isLoadingValue}
        }
        default: return state
    }
}

export const loadingAC = (isLoadingValue: boolean) => ({
    type: 'TOGGLE-IS-LOADING',
    payload: {
        isLoadingValue
    }
} as const) // fix any