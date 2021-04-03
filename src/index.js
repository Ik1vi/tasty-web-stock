import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import { BrowserRouter } from 'react-router-dom';

import store from "./js/store/index";
import { App } from "./js/containers/App.js";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector('.root')
);
