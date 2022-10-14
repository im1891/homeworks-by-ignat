import {UserType} from "../HW8";

type SortUpACType = ReturnType<typeof sortUpAC>
type SortDownACType = ReturnType<typeof sortDownAC>
type SortByAgeACType = ReturnType<typeof sortByAgeAC>
type ActionType = SortUpACType | SortDownACType | SortByAgeACType

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any

    switch (action.type) {

        case "SORT-UP":
            return [...state].sort((a, b) => (a.name).localeCompare(b.name))

        case "SORT-DOWN":
            return [...state].sort((a, b) => b.name.localeCompare(a.name))
        case "SORT-BY-AGE":
            return [...state].filter(u => u.age > 18)

        default:
            return state
    }
}


export const sortUpAC = () => {
    return {
        type: 'SORT-UP',
    } as const
}

export const sortDownAC = () => {
    return {
        type: 'SORT-DOWN',
    } as const
}

export const sortByAgeAC = () => {
    return {
        type: 'SORT-BY-AGE'
    } as const
}