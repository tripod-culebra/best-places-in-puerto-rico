import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import LoginButton from './components/LoginButton';
import backgroundImage from './assets/PRCaboRojo.jpeg';
import Home from './components/pages/Home';
import Navbar from './components/navbar';
import Places from './components/pages/Places';
import PlacesGoForm from './components/forms/PlacesGoForm';
import PlacesBeenForm from './components/forms/PlacesBeenForm';

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
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                    path="/PlacesIWantToGo"
                    element={
                        <Places
                            title="Places I Want To Go!"
                            tableCols={[
                                'Places I Want To Go To',
                                'Description',
                                'What I Want To Do',
                                'When I Want To Go',
                                'With Who',
                                'Completed?',
                            ]}
                            isChangeDelete={false}
                            showRating={false}
                            PlacesForm={PlacesGoForm}
                        />
                    }
                />
                <Route
                    path="/PlacesIHaveBeen"
                    element={
                        <Places
                            title="Places I Have Been!"
                            tableCols={[
                                'Places I Have Visted',
                                'Description',
                                'What I Did',
                                'When I Went',
                                'Who Went',
                                'Rating',
                                'Delete?',
                            ]}
                            isChangeDelete
                            showRating
                            PlacesForm={PlacesBeenForm}
                        />
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
