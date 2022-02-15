import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import LoginButton from './components/LoginButton';
import Home from './components/pages/Home';
import Navbar from './components/navbar';
import Places from './components/pages/Places';
import PlacesGoForm from './components/forms/PlacesGoForm';
import PlacesBeenForm from './components/forms/PlacesBeenForm';

const App = () => {
    const { error, isAuthenticated, isLoading } = useAuth0();
    const [backgroundImage, setBackgroundImage] = useState('');

    if (isLoading) return <div>Loading...</div>;

    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    return !isAuthenticated ? (
        <div className="background background-login">
            <LoginButton />
        </div>
    ) : (
        <div className={`background background-${backgroundImage}`}>
            <Router>
                <Navbar setBackgroundImage={setBackgroundImage} />
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
                                    'Delete?',
                                ]}
                                showRating={false}
                                completed={false}
                                PlacesForm={PlacesGoForm}
                                isChangeUpdate
                                updateButton="Completed"
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
                                    'Redo?',
                                    'Delete?',
                                ]}
                                showRating
                                completed
                                PlacesForm={PlacesBeenForm}
                                isChangeUpdate={false}
                                updateButton="Redo"
                            />
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
