import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import JSONPretty from 'react-json-pretty';

const Profile = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            {isAuthenticated ? (
                <p>Login profile test is logged in</p>
            ) : (
                <p>You are not logged into profile</p>
            )}
        </div>
    );
};

export default Profile;
