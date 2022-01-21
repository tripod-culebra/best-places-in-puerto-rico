import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import LoginButton from './components/LoginButton';
import backgroundImage from './assets/PRCaboRojo.jpeg';
import Home from './components/pages/Home';
import PlacesIWantToGo from './components/pages/PlacesIWantToGo';
import PlacesIHaveBeen from './components/pages/PlacesIHaveBeen';
import Navbar from './components/navbar';

const App = () => {
    const { error, isAuthenticated, isLoading } = useAuth0();

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
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/PlacesIWantToGo" element={<PlacesIWantToGo />} />
                <Route path="/PlacesIHaveBeen" element={<PlacesIHaveBeen />} />
                {/* <Route path="/Logout" element={<Logout />} /> */}
            </Routes>
            <Navbar />
        </Router>
    );
};

export default App;
