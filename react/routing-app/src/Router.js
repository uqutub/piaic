import React from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Home, About, Users, Topics, Dashboard, Login } from './page';
import { fakeAuth } from './service/auth';  // utility


function PrivateRoute({ children, ...rest }) {

    // user reducer and its properties
    // useSelector  auth.isAuthenicated
    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

export default function AppRouter() {
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
            <Route path="/products">
                <Topics />
            </Route>
            <PrivateRoute path="/dashboard">
                <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/protected">
                <Dashboard />
            </PrivateRoute>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}