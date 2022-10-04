import React from "react";

export const performQuizContext = React.createContext({});

export const PerformQuizProvider = ({ children }) => {
    const [performInfo, setPerformInfo] = React.useState([]);
    
    return (
        <performQuizContext.Provider value={{ performInfo, setPerformInfo }}>
        {children}
        </performQuizContext.Provider>
    );
}
