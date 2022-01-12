import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isLoading } = useAuth0();

    if (isLoading) return <div>Loading...</div>;

    return (
        <button type="button" onClick={() => logout()}>
            Log Out
        </button>
    );
};

export default LogoutButton;
