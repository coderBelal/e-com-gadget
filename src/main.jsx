import { StrictMode } from "react";
import ReactDOM from "react-dom/client"; 
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./components/context/CartContext.jsx";
import { NotificationProvider } from "./components/context/NotificationContext.jsx";

// Get the root element
const rootElement = document.getElementById("root");

// Create a React root
const root = ReactDOM.createRoot(rootElement);

// Render the application
root.render(
  <StrictMode>
    <NotificationProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </NotificationProvider>
  </StrictMode>
);
