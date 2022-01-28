import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginButton from './components/LoginButton';
import Home from './components/pages/Home';
import PlacesIWantToGo from './components/pages/PlacesIWantToGo';
import PlacesIHaveBeen from './components/pages/PlacesIHaveBeen';
import Navbar from './components/navbar';

const App = () => {
    const { error, isAuthenticated, isLoading } = useAuth0();
    const [backgroundImageType, setBackgroundImageType] = useState('');
    if (isLoading) return <div>Loading...</div>;

    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    return !isAuthenticated ? (
        <div className="background background-login">
            <LoginButton />
        </div>
    ) : (
        <div className={`background background-${backgroundImageType}`}>
            <Router>
                <Navbar setBackgroundImageType={setBackgroundImageType} />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/PlacesIWantToGo" element={<PlacesIWantToGo />} />
                    <Route path="/PlacesIHaveBeen" element={<PlacesIHaveBeen />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
