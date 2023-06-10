import React from 'react';
import { useAuth } from '../contexts/AuthContextProvider';
import HomePage from './HomePage';
import Auth from '../components/Auth/Auth'

const AuthPage = () => {

    const {
        user: {email},
    } = useAuth();

    return <div style={{width: '95%', height: '100vh', margin: '0 auto', backgroundImage: 'url(https://avatars.mds.yandex.net/get-kinopoisk-post-img/1535287/7abb559eebb8656563c2bb3be6d253d7/960x540)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>{email ? <HomePage /> : <Auth />}</div>;
};

export default AuthPage;