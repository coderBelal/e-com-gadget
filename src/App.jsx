import { BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom";
 
import Home from './components/Home/Home';
import TopNavbar from "./components/Navbar/TopNavbar";
import BottomNav from "./components/Navbar/BottomNavbar";
import Footer from "./components/Footer";
import PreOrderForm from "./components/pages/PreOrder";
import ProductDetail from "./components/pages/ProductDetails";
import ProductDetailCard from "./components/pages/ProductDetailCard";
import ShoppingCart from "./components/pages/ShoppingCart";
import CheckoutPage from "./components/pages/CheckOut";
import PhoneTabs from "./components/featuredPage/PhoneTabs";
import OfferCards from "./components/pages/OfferCards";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import AllBrands from "./components/pages/AllBrands";
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
  //   <div className="  overflow-x-hidden">    <Router>
  //   <TopNavbar/>
  //   <BottomNav/>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/pre-order" element={<PreOrderForm />} />
  //     <Route path="/products/:productId" element={<ProductDetail/>} />
  //     <Route path="/products/:productId" element={<ProductDetailCard/>} />
  //     <Route path="/cart" element={<ShoppingCart/>} />
  //     <Route path="/checkout/:productId" element={<CheckoutPage/>} />
  //   <Route path="/phones-tab" element={<PhoneTabs/>} />
  //   <Route path="/offer-card" element={<OfferCards/>} />
  //   <Route path="/all-brand" element={<AllBrands/>} />
  //   </Routes>
  //   <Footer/>
  // </Router></div>

  <div>
    <RouterProvider router={router} />
  </div>

  );
};

export default App;
