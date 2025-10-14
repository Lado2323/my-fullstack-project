import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import { CartProvider } from './contexts/CartContext.tsx';

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <ThemeProvider>
            <CartProvider>
                
                <App />


            </CartProvider>
            
              


        </ThemeProvider>

       
    </Provider>
);
