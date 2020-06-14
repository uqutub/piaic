import React from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

export default function Topics() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/react`}>React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/redux`}>Redux </Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}


function Topic() {
    let { topicId } = useParams();
    return <div style={{background: 'yellow'}}>
        <h3>Topic Component</h3>
        <h4>Requested topic ID: {topicId}</h4>
    </div>;
}