import React from "react";

export const quizCreationsContext = React.createContext({});

export const QuizCreationsProvider = ({ children }) => {
    const [quizInfo, setQuizInfo] = React.useState([]);
    
    return (
        <quizCreationsContext.Provider value={{ quizInfo, setQuizInfo }}>
        {children}
        </quizCreationsContext.Provider>
    );
};
