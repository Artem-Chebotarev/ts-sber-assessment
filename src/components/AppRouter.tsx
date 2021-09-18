import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteNames } from '../routes';

const AppRouter: FC = () => {
    const auth = false;

    return (
        auth ?
            <Switch>
                {privateRoutes.map(route => 
                    <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path}
                    />
                )}
                <Redirect to={RouteNames.HOME} />
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route => 
                    <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path}
                    />
                )}
                <Redirect to={RouteNames.LOGIN} />
            </Switch>
    )
}

export default AppRouter;
