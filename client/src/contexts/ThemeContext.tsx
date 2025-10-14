import { createContext, useState, } from "react";
import type { ReactNode } from "react";

// 1. Define the context type
type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

// 2. Create the context with a default value
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

// 3. Props type for the provider
type ThemeProviderProps = {
  children: ReactNode;
};

// 4. Provider component
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
