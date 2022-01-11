import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = React.createContext([{}, () => {}]);

const initialState = {};

const UserProvider = ({ children }) => {
    const [state, setState] = useState(initialState);

    return <UserContext.Provider value={[state, setState]}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };

UserProvider.propTypes = {
    children: PropTypes.string.isRequired,
};
