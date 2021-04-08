import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Main } from '../components/Main.js';
import { Auth } from '../components/Auth.js';
import { Error } from '../components/Error.js';

export function App() {
    return (
        <BrowserRouter>
            <>
                <Switch>
                    <Route exact path="/" component={() =>
                        <Main />
                    } />
                    <Route exact path="/auth" component={() =>
                        <Auth />
                    } />
                    <Route component={Error} />
                </Switch>
            </>
        </BrowserRouter>
    )
}
