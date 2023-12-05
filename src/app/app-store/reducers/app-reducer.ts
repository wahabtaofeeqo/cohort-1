import { createReducer, on } from "@ngrx/store"
import { loadUser, loadUsers, usersLoaded } from "../actions/app.actions"

export interface AppState { // Step 1
    users: any[]
    skills: any[]
    isUserLoading: boolean
}

const initialState: AppState = { // Step 2
    users: [],
    skills: [],
    isUserLoading: false
}

export const appReducer = createReducer(initialState, 
    on(loadUsers, (state) => {
        return {...state, isUserLoading: true}
    }),

    on(usersLoaded, (state, {data}) => {
        return {...state, users: data, isUserLoading: false}
    }),
)