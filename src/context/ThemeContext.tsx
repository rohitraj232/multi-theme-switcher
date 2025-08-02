import { createContext, useContext, useEffect, useState } from 'react';

// create ThemeContext
export const ThemeContext = createContext();

// custom hook to easily use ThemeContext in any component
export const useTheme = () => useContext(ThemeContext);

// themes with display name and className
const themes = {
    theme1: { name: 'Theme 1', className: 'theme1' },
    theme2: { name: 'Theme 2', className: 'theme2' },
    theme3: { name: 'Theme 3', className: 'theme3' }
};

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || themes.theme1.className);
    useEffect(() => localStorage.setItem('theme', theme), [theme]);
    return (
        <ThemeContext.Provider value={{ theme, setTheme, themes }}>
            <div className={`app ${theme}`}>{children}</div>
        </ThemeContext.Provider>
    );
}
