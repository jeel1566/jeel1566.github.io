import { createContext, useContext, useState } from 'react';

// createContext — stores active route for Navbar highlighting
const NavContext = createContext();

export function NavProvider({ children }) {
    const [activePage, setActivePage] = useState('/');

    return (
        <NavContext.Provider value={{ activePage, setActivePage }}>
            {children}
        </NavContext.Provider>
    );
}

// Custom hook — useContext wrapper (useContext demo)
export function useNav() {
    return useContext(NavContext);
}
