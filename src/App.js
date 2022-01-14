import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import background from './PRimage.jpeg';

const App = () => {
    const { error, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <div>Loading...</div>;

    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    return !isAuthenticated ? (
        <>
            <img src={background} id="bg" alt="" />
            <LoginButton />
        </>
    ) : (
        <>
            <LogoutButton />
            <Profile />
        </>
    );
};

export default App;
