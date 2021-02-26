import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Unsplash, { toJson } from 'unsplash-js';

import { Main } from '../components/Main.js';
import { Auth } from '../components/Auth.js';
import { Error } from '../components/Error.js';

const unsplash = new Unsplash({
    accessKey: 'IclwidfyuuU2dcaoL9yAu4DQTfW1o8U1Uqx_kjkxrRE',
    secret: 'ZDBdnP7xrjJKAdtVNO88NfGPZi3l2KZPI581KmXhfqM',
    callbackUrl: 'http://localhost:8080/auth',
});

if (localStorage.getItem('bearerToken')) {
    unsplash.auth.setBearerToken(localStorage.getItem('bearerToken'));
}

export function App() {
    const [authorized, setAuthorized] = useState(JSON.parse(localStorage.getItem('authorized') || false));

    return (
        <Switch>
            <Route exact path="/" component={() =>
                <Main
                    unsplash={unsplash}
                    authorized={authorized}
                />
            } />
            <Route exact path="/auth" component={() =>
                <Auth
                    unsplash={unsplash}
                />
            } />
            <Route component={Error} />
        </Switch>
    )
}
