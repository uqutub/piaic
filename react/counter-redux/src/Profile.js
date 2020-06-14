import React, { useEffect } from 'react';
import { GithubAction, useDispatch, useSelector, connect } from './store/index';

function Profile() {

    const dispatch = useDispatch();

    const { user, loader, error } = useSelector(({ github }) => github);

    const getProfile = (id) => {
        dispatch(GithubAction.getProfile(id));  // GET_PROFILE
    }

    useEffect(() => {
        getProfile('Owaisk23');   // github id
    }, [])      // ComponentDidMount


    return (
        <div>
            <header className="App-header">
                <h1>Github Profile</h1>
                {loader ?
                    (<span style={{ color: 'red' }}>"Loader......"</span>)
                    :
                    (<pre>
                        {/* {JSON.stringify(user, null, 2)} */}
                        {user?.organizations_url}
                        {user && user.organizations_url}
                    </pre>)}
            </header>
        </div>
    );
}

export default Profile;
