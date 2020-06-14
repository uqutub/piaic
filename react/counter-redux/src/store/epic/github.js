import { of } from "rxjs";
import { switchMap, map, catchError } from 'rxjs/operators';
import { ofType } from "redux-observable";
import { HttpService } from "../../service/http";
import { GithubAction, AuthAction } from "../action";

class Epic {

    static GteProfileEpic = action$ => {
        return action$.pipe(
            // ACTION LISTNER
            ofType(GithubAction.GET_PROFILE),   // Action Type Listening
            switchMap(({ payload }) => {
                // ONCE LISTEN, CALLING BODY
                console.log(payload);
                return HttpService.get(`https://api.github.com/users/${payload}`)   // change API as per your need
                    .pipe(
                    map(res => {
                        // ON SUCCESS
                        console.log('ON SUCCESS ', res);
                        return {
                            type: GithubAction.GET_PROFILE_SUCCESS,
                            payload: res.response
                        };
                    }),
                    catchError(a => {
                        // ON ERROR
                        console.log('ON ERROR: ', a);
                        return of({
                            type: GithubAction.GET_PROFILE_FAILURE
                        });
                    })
                )
            })
        );
    };

    static LoginEpic = action$ => {
        return action$.pipe(
            // ACTION LISTNER
            ofType(AuthAction.LOGIN),   // Action Type Listening
            switchMap(({ payload }) => {
                // ONCE LISTEN, CALLING BODY
                console.log(payload);
                return HttpService.get(`https://api.github.com/users/${payload}`).pipe(
                    map(res => {
                        // ON SUCCESS
                        console.log('ON SUCCESS ', res);
                        return {
                            type: GithubAction.GET_PROFILE_SUCCESS,  // SUUCESS
                            payload: res.response
                        };
                    }),
                    catchError(a => {
                        // ON ERROR
                        console.log('ON ERROR: ', a);
                        return of({
                            type: GithubAction.GET_PROFILE_FAILURE, // FAILURE
                            payload: a
                        });
                    })
                )
            })
        );
    };

}

export default [
    Epic.GteProfileEpic,
    // Epic.LoginEpic
];