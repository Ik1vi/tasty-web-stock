import React, {useEffect} from 'react';

export function Auth(props) {
    useEffect(() => {
        console.log(props.unsplash);
    })

    return (
        <h1>Авторизация</h1>
    )
}