import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
    accessKey: 'IclwidfyuuU2dcaoL9yAu4DQTfW1o8U1Uqx_kjkxrRE',
    secret: 'ZDBdnP7xrjJKAdtVNO88NfGPZi3l2KZPI581KmXhfqM',
    callbackUrl: 'http://localhost:8080/auth',
});

if (localStorage.getItem('bearerToken')) {
    unsplash.auth.setBearerToken(localStorage.getItem('bearerToken'));
}

export default unsplash;
