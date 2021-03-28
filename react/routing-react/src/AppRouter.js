import { Switch, Route } from "react-router-dom";

import Pages from './pages';
const { Home, Users, About, Contactus } = Pages;
  
function AppRouter() {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
            <Route path="/contact">
                <Contactus />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}

export default AppRouter;