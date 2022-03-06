import React, {useState, createContext} from "react";

export const DataContext = createContext({});

export const DataProvider = ({children}) => {

    const [photoUpOpen, setPhotoUpOpen] = useState(false);
    const [videoUpOpen, setVidoUpOpen] = useState(false);

    return (
        <DataContext.Provider value={{
                photoUp: [photoUpOpen, setPhotoUpOpen],
                videoUp: [videoUpOpen, setVidoUpOpen]
            }}>
            {children}
        </DataContext.Provider>
    )
};

