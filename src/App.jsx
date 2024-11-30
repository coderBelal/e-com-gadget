  import Banner from "./components/Banner"
import ShopByBrands from "./components/Brand"
import ProductCard from "./components/CardSlider"
import FeaturedCategories from "./components/Feature"
import BottomNav from "./components/Navbar/BottomNavbar"
import Product from "./components/Product"
import ProductTwo from "./components/ProductTwo"
import TopNavbar from "./components/Navbar/TopNavbar"
import Services from "./components/Services"
import SliderTwo from "./components/SliderTwo"
import Text from "./components/Text"
import TwoBanner from "./components/TwoBanner"
import Footer from "./components/Footer"

 
 const App = () => {
   return (
     <div>
   <TopNavbar/>
   <BottomNav/>
 <Banner/>
 <Services/>
 <FeaturedCategories/>
 <ProductCard/>
 <Product/>
 <TwoBanner/>
 <ProductTwo/>
 <SliderTwo/>
 <ShopByBrands/>
 <Text/>
 <Footer/>
     </div>
   )
 }
 
 export default App
 