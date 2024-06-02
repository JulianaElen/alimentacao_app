import React, { createContext, useState } from 'react';


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [pontuacao, setPontuacao] = useState({total: 0});

    return (
        <AuthContext.Provider value={{ pontuacao, setPontuacao }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;