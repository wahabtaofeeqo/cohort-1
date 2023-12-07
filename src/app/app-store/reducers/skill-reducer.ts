import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity"
import { Action } from "@ngrx/store";
import { AppActions, loadUser } from "../actions/app.actions";

interface Skill { // step 1
    id: number
    name: string
}

interface SkillState extends EntityState<Skill> { // step 2
    isLoading: boolean
}

// step 3
const adapter = createEntityAdapter<Skill>();

// step 4
const initialState: SkillState = adapter.getInitialState({
    isLoading: false
})

export const skillReducer = (state = initialState, action: any): SkillState => {
    switch (action.type) {
        case AppActions.USERS_LOADED:
            return adapter.addMany(action.data, state)
    
        default:
            return state;
    }
}