import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { authorizeUser } from '../actions/currentUser.js';

const ConnectedAuth = (props) => {
    useEffect(() => {
        const code = location.search.split('code=')[1];

        if (code) {
            props.authorizeUser(code);
        } else {
            console.error('No token from unsplash')
        }
    })

    return (
        <div className="loading"></div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        authorizeUser: (code) => dispatch(authorizeUser(code))
    }
}

export const Auth = connect(null, mapDispatchToProps)(ConnectedAuth);

