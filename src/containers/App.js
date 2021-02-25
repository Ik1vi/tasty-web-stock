import React, { Component } from 'react';
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

export function App() {
    return (
        <Switch>
            <Route exact path="/" component={() => <Main unsplash={unsplash} />} />
            <Route exact path="/auth" component={() => <Auth unsplash={unsplash} />} />
            <Route component={Error} />
        </Switch>
    )
}
