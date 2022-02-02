import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import LoginButton from './components/LoginButton';
import backgroundImage from './assets/PRCaboRojo.jpeg';
import Home from './components/pages/Home';
import Places from './components/pages/Places';
import Navbar from './components/navbar';

const App = () => {
    const { error, isAuthenticated, isLoading } = useAuth0();
    const [placeSelector, setPlaceSelector] = useState('');

    if (isLoading) return <div>Loading...</div>;

    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    return !isAuthenticated ? (
        <>
            <img src={backgroundImage} className="background" alt="Cabo Rojo" />
            <LoginButton />
        </>
    ) : (
        <Router>
            <Navbar setPlaceSelector={setPlaceSelector} />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Places" element={<Places placeSelector={placeSelector} />} />
            </Routes>
        </Router>
    );
};

export default App;
