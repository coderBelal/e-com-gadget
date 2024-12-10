import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./components/context/CartContext.jsx";
import { NotificationProvider } from "./components/context/NotificationContext.jsx";

ReactDOM.render(
  <StrictMode>
    <NotificationProvider>
      {" "}
      <CartProvider>
        <App />
      </CartProvider>
    </NotificationProvider>
  </StrictMode>,
  document.getElementById("root")
);
