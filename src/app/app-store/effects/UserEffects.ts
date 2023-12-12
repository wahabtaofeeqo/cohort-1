import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadUsers, usersLoaded } from "../actions/app.actions";
import { EMPTY, catchError, exhaustMap, map } from "rxjs";
import { CohortService } from "src/app/cohort.service";


@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private service: CohortService) {}

    loadUsers$ = createEffect(
        () => this.actions$.pipe(
            // 1. Action to intercept: ofType
            // 2. The reaction: a number of operator
            ofType(loadUsers),
            exhaustMap(
                (action: any) => this.service.loadUsers().pipe(
                    map((res) => {

                        // some logics


                        return usersLoaded({data: res});
                    }),
                    catchError(() => EMPTY)
                )
            )
        )
    );
}