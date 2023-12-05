import { createFeatureSelector, createSelector } from "@ngrx/store"
import { AppState } from "../reducers/app-reducer";

export const appState = createFeatureSelector<AppState>('app')

export const selectUserLoadState = createSelector(appState, (state) => state.isUserLoading);
export const selectSkills = createSelector(appState, (state) => state.skills);
export const selectUsers = createSelector(appState, (state) => state.users);
