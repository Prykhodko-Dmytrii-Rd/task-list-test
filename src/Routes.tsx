import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Tasks from "./pages/Tasks";


const useRoutes = () => {
    return (
        <Switch>
            <Route path={"/tasks"}>
                <Tasks/>
            </Route>
            <Redirect to={"/tasks"}/>
        </Switch>
    )
}

export default useRoutes