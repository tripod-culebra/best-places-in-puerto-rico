import React from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import './App.css';
import PropTypes from 'prop-types';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const App = ({ signOut, user }) => (
    <div className="container">
        <h1>Hello {user.username}</h1>
        <button type="button" onClick={signOut}>
            Sign out
        </button>
    </div>
);

export default App;
