import { of } from "rxjs";
import { switchMap, map, catchError } from 'rxjs/operators';
import { ofType } from "redux-observable";
import { HttpService } from "../../service/http";
import { GithubAction } from "../action";

class Epic {

    static GteProfileEpic = action$ => {
        return action$.pipe(
            // ACTION LISTNER
            ofType(GithubAction.GET_PROFILE),
            switchMap(({ payload }) => {
                // ONCE LISTEN, CALLING BODY
                console.log(payload);
                return HttpService.get(`https://api.github.com/users/${payload}`).pipe(
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

}

export default [
    Epic.GteProfileEpic,
];