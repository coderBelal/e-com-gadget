import ResponsiveSlider from "../Banner";
import ShopByBrands from "../Brand";
import Text from "../Text";
import Footer from "../Footer";
import SliderTwo from "../SliderTwo";
import ProductList from "../CardSlider";
import FeaturedCategories from "../Feature";
 
import Product from "../Product";
import ProductTwo from "../ProductTwo";
 
import Services from "../Services";
import TwoBanner from "../TwoBanner";

const Home = () => {
  return (
    <div>
  
      <ResponsiveSlider />
      <Services />
      <FeaturedCategories />
      <ProductList />
      <Product />
      <TwoBanner />
      <ProductTwo />
      <SliderTwo />
      <ShopByBrands />
      <Text />
   
    </div>
  );
};

export default Home;
