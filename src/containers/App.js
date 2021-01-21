import React from 'react';

import { Header } from '../components/Header.js';
import { Page } from '../components/Page.js';

import '../styles/style.scss';

export function App() {
    return (
        <div className="body__app app">
            {/* <PictureContainer
                // removeComment={removeComment}
                // comments={comments}
            />
            <Liked-Container
                // addComment={addComment} 
            /> */}
            <Header
            />
            <Page
            /> 
        </div>
    );
}