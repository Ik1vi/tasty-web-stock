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


// // containers

// btnLikesEl.addEventListener('click', function (ev) {
//     ev.preventDefault();
//     bodyEl.classList.add('liked-container-open', 'js-fixed');
//     // bodyEl.style.height=window.height() + window.scrollTop();
//     // bodyEl.style.marginTop = window.scrollTop()*-1;
// });

// picItemEl.addEventListener('click', function (ev) {
//     ev.preventDefault();
//     bodyEl.classList.add('picture-container-open', 'js-fixed');
// });

// document.addEventListener('mousedown', function(e) {
// 	if(!e.target.closest('.js-picture-container-wrapper') && !e.target.closest('.js-liked-wrapper') ) {
//         bodyEl.classList.remove('liked-container-open', 'picture-container-open', 'js-fixed');
// 	}
// });


