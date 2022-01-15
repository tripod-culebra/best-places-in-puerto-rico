import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './styles/app.module.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import backGroundImage from './assets/PR_Cabo_Rojo.jpeg';
import Home from './components/Home';
import PlacesIWantToGo from './components/PlacesIWantToGo';
import PlacesIHaveBeen from './components/PlacesIHaveBeen';

const App = () => {
    const { error, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <div>Loading...</div>;

    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    return !isAuthenticated ? (
        <>
            <img src={backGroundImage} className={styles.backGround} alt="" />
            <LoginButton />
        </>
    ) : (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/PlacesIWantToGo" element={<PlacesIWantToGo />} />
                <Route path="/PlacesIHaveBeen" element={<PlacesIHaveBeen />} />
                <Route path="/Logout" element={<LogoutButton />} />
            </Routes>
        </Router>
    );
};

export default App;
