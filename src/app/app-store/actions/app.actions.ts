import { Action, createAction, props } from "@ngrx/store";

enum AppActions {
    LOAD_USER = '[USER API] Load User',
    CREATE_USER = '[USER API] Load User'
}

const LOAD_USER = '[USER API] Load User'

// Functional Action
const loadUser = createAction(LOAD_USER, props<{userId: any}>())
const createUser = createAction('[USER API] Create User', props<{payload: Pojo}>())

interface Pojo {
    name: string
    email: string
    age: number
}

// Class
class LoadUser implements Action {
    type: string = LOAD_USER
    constructor(public userId: any) {}
}

class CreateUser implements Action {
    type: string = AppActions.CREATE_USER
    constructor(public payload: Pojo) {}
}