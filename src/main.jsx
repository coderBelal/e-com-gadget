import { StrictMode } from "react";
import ReactDOM from "react-dom/client"; 
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./components/context/CartContext.jsx";
import { NotificationProvider } from "./components/context/NotificationContext.jsx";
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store from './store/index.js'
const queryClient = new QueryClient();

// Get the root element
const rootElement = document.getElementById("root");

// Create a React root
const root = ReactDOM.createRoot(rootElement);

// Render the application
root.render(
  <StrictMode>
     <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <NotificationProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </NotificationProvider>
      </QueryClientProvider>
      </Provider>
  </StrictMode>
);
