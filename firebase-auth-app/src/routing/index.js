import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";

import { SignIn, SignUp, Home } from '../component';
import { Firebase } from '../service';

export default function App() {

    const signOutHandler = (ev) => {
        ev.preventDefault();
        Firebase.doSignOut();
    }

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">SignIn</Link>
                        </li>
                        <li>
                            <Link to="/signUp">SignUp</Link>
                        </li>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <button onClick={signOutHandler}>SignOut/Logout</button>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/signUp">
                        <SignUp />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/">
                        <SignIn />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
