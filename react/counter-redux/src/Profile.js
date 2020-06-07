import React, { useEffect } from 'react';
import { GithubAction, useDispatch, useSelector, connect } from './store/index';

function Profile() {

    const dispatch = useDispatch();

    const { user, loader, error } = useSelector(({ github }) => github);

    const getProfile = (id) => {
        dispatch(GithubAction.getProfile(id));
    }

    useEffect(() => {
        getProfile('uqutub');
    }, [])


    return (
        <div>
            <header className="App-header">
                <h1>Github Profile</h1>
                {loader ? "Loader......" : (<pre>
                    {JSON.stringify(user, null, 2)}
                </pre>)}
            </header>
        </div>
    );
}

export default Profile;
