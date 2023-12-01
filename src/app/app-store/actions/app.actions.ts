import { Action, createAction, props } from "@ngrx/store";

enum AppActions {
    LOAD_USER = '[USER API] Load User',
    LOAD_USERS = '[USER API] Load Users',
    USERS_LOADED = '[USER API] Load Users',
    

    CREATE_USER = '[USER API] Load User'
}

const LOAD_USER = '[USER API] Load User'

// Functional Action
export const loadUsers = createAction(AppActions.LOAD_USERS)
export const usersLoaded = createAction(AppActions.USERS_LOADED, props<{data: any[]}>())

export const loadUser = createAction(LOAD_USER, props<{userId: any}>())
export const createUser = createAction('[USER API] Create User', props<{payload: Pojo}>())

// Class
export class LoadUser implements Action {
    type: string = LOAD_USER
    constructor(public userId: any) {}
}

export class CreateUser implements Action {
    type: string = AppActions.CREATE_USER
    constructor(public payload: Pojo) {}
}


interface Pojo {
    name: string
    email: string
    age: number
}