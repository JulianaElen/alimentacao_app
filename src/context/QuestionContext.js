import React, { createContext, useState } from 'react';


export const QuestionContext = createContext({});

export const QuestionProvider = ({ children }) => {

    const [q1, setQ1] = useState(-1);
    const [q2, setQ2] = useState(-1);
    const [q3, setQ3] = useState(-1);
    const [q4, setQ4] = useState(-1);
    const [q5, setQ5] = useState(-1);
    const [q6, setQ6] = useState(-1);
    const [q7, setQ7] = useState(-1);
    const [q8, setQ8] = useState(-1);
    const [q9, setQ9] = useState(-1);
    const [q10, setQ10] = useState(-1);

    return (
        <QuestionContext.Provider value={{ q1, setQ1, q2, setQ2, q3, setQ3, q4, setQ4, q5, setQ5, q6, setQ6, q7, setQ7, q8, setQ8, q9, setQ9, q10, setQ10 }}>
            {children}
        </QuestionContext.Provider>
    );
}
export default QuestionProvider;