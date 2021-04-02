import React, { useEffect } from 'react';

export function Auth(props) {

    useEffect(() => {
        const code = location.search.split('code=')[1];

        if (code) {
            props.unsplash.auth.userAuthentication(code)
                .then(res =>
                    res.json())
                .then(json => {
                    localStorage.setItem('bearerToken', json.access_token);
                    localStorage.setItem('authorized', true);
                    location.assign('/');
                });
        } else {
            console.error('No token from unsplash')
        }
    })

    return (
        <div className="loading"></div>
    )
}
