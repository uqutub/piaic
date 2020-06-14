import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Home, About, Users, Topics } from './page';

export default function AppRouter() {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
            <Route path="/topics">
                <Topics />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}