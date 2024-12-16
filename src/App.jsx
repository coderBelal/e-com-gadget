import { BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom";
 
 
 
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
 ;
import { router } from "./routes.jsx/routes";
 
 
const App = () => {
 useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 120,    
      once: true,    
    });
  }, []);
  return (
 
  <div className="  overflow-x-hidden">
    <RouterProvider router={router} />
 
  </div>

  );
};

export default App;
