import { createContext, useState } from "react";

export const AlertContext = createContext();

export const AlertProvider = ({children}) => {
    const [ activeAlert, setActiveAlert ] = useState(false);

    return (
        <AlertContext.Provider value={{activeAlert, setActiveAlert}}>
            {children}
        </AlertContext.Provider>
    )
}