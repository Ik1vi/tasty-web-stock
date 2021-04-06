import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Main } from '../components/Main.js';
import { Auth } from '../components/Auth.js';
import { Error } from '../components/Error.js';

export function App() {
    const [authorized, setAuthorized] = useState(JSON.parse(localStorage.getItem('authorized') || false));

    return (
        <Switch>
            <Route exact path="/" component={() =>
                <Main
                    authorized={authorized}
                    setAuthorized={setAuthorized}
                />
            } />
            <Route exact path="/auth" component={() =>
                <Auth
                />
            } />
            <Route component={Error} />
        </Switch>
    )
}
