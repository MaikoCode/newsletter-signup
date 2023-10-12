// EmailValidationContext.js
import { createContext, useState, useContext } from 'react';

export const EmailValidationContext = createContext();

// eslint-disable-next-line react/prop-types
export const EmailValidationProvider = ({ children }) => {
    const [emailValidated, setEmailValidated] = useState(false);

    return (
        <EmailValidationContext.Provider value={{ emailValidated, setEmailValidated }}>
            {children}
        </EmailValidationContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useEmailValidation = () => {
    return useContext(EmailValidationContext);
};
