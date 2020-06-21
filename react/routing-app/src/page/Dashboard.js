import React from 'react';
import { useHistory } from "react-router-dom";
import { fakeAuth } from '../service/auth';

export default function Dashboard() {
    const history = useHistory();

    return (
        <p>
            Welcome!{" "} Dashboard/Protected Route
            <br />
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/"));
                }}
            >
                Sign out
        </button>
        </p>
    );
}