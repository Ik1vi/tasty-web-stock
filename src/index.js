import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './containers/App.js';

ReactDOM.render(
    <App />,
    document.querySelector('.root')
);

if (module.hot) {
    module.hot.accept();
}
