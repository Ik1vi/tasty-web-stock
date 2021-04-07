import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
    
    accessKey: process.env.ACCESS_KEY,
    secret: process.env.SECRET,
    callbackUrl: process.env.CALLBACK_URL,
});

if (localStorage.getItem('bearerToken')) {
    unsplash.auth.setBearerToken(localStorage.getItem('bearerToken'));
}

export default unsplash;
