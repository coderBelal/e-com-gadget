 
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import RelatedProduct from './RelatedProduct';

const ProductDetailCard = () => {
  const { productId } = useParams();
  const products = [
    { 
      id: 1, 
      title: 'Product 1', 
      description: 'This is a detailed description of Product 1', 
      price: 30.0, 
      image: 'https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg', 
      specification: '6.1-inch display, A15 Bionic chip, 5G connectivity', 
      warranty: '1 year', 
      rating: 4.5 
    },
    { 
      id: 2, 
      title: 'Product 2', 
      description: 'This is a detailed description of Product 2', 
      price: 25.0, 
      image: 'https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg', 
      specification: '6.7-inch OLED display, Snapdragon 888, 120Hz refresh rate', 
      warranty: '2 years', 
      rating: 4.7 
    },
    { 
      id: 3, 
      title: 'Samsung Galaxy S22', 
      description: 'Samsung Galaxy S22 with AMOLED display and powerful camera', 
      price: 800.0, 
      image: 'https://i.postimg.cc/1z4JHR1h/samsung-galaxy-s22.jpg', 
      specification: '6.1-inch AMOLED, Exynos 2200, 50MP camera', 
      warranty: '2 years', 
      rating: 4.6 
    },
    { 
      id: 4, 
      title: 'OnePlus 9 Pro', 
      description: 'OnePlus 9 Pro with excellent performance and design', 
      price: 900.0, 
      image: 'https://i.postimg.cc/ZKBVjKqb/oneplus-9-pro.jpg', 
      specification: '6.7-inch Fluid AMOLED, Snapdragon 888, 48MP camera', 
      warranty: '2 years', 
      rating: 4.8 
    },
    { 
      id: 5, 
      title: 'Xiaomi Mi 11 Ultra', 
      description: 'Xiaomi Mi 11 Ultra with stunning camera capabilities', 
      price: 850.0, 
      image: 'https://i.postimg.cc/s2cWwHJS/xiaomi-mi-11-ultra.jpg', 
      specification: '6.81-inch AMOLED, Snapdragon 888, 108MP camera', 
      warranty: '1 year', 
      rating: 4.7 
    },
    { 
      id: 6, 
      title: 'Google Pixel 6 Pro', 
      description: 'Google Pixel 6 Pro with advanced AI-powered camera features', 
      price: 900.0, 
      image: 'https://i.postimg.cc/sD5nnrD0/google-pixel-6-pro.jpg', 
      specification: '6.7-inch LTPO AMOLED, Google Tensor, 50MP camera', 
      warranty: '1 year', 
      rating: 4.5 
    },
    { 
      id: 7, 
      title: 'Apple iPhone 13 Pro', 
      description: 'Apple iPhone 13 Pro with powerful A15 Bionic chip', 
      price: 1100.0, 
      image: 'https://i.postimg.cc/WzSyZ6tT/iphone-13-pro.jpg', 
      specification: '6.1-inch Super Retina XDR, A15 Bionic, 12MP camera', 
      warranty: '1 year', 
      rating: 4.9 
    },
    { 
      id: 8, 
      title: 'Samsung Galaxy Z Fold 4', 
      description: 'Samsung Galaxy Z Fold 4 with foldable screen and multitasking features', 
      price: 1800.0, 
      image: 'https://i.postimg.cc/jjBC7fgz/samsung-galaxy-z-fold-4.jpg', 
      specification: '7.6-inch foldable Dynamic AMOLED, Snapdragon 8 Gen 1, 50MP camera', 
      warranty: '2 years', 
      rating: 4.6 
    },
    { 
      id: 9, 
      title: 'Sony Xperia 1 IV', 
      description: 'Sony Xperia 1 IV with 4K display and pro-level camera', 
      price: 1300.0, 
      image: 'https://i.postimg.cc/jd0ZXnqt/sony-xperia-1-IV.jpg', 
      specification: '6.5-inch 4K OLED, Snapdragon 8 Gen 1, 48MP camera', 
      warranty: '1 year', 
      rating: 4.4 
    },
    { 
      id: 10, 
      title: 'Oppo Find X5 Pro', 
      description: 'Oppo Find X5 Pro with futuristic design and powerful performance', 
      price: 1050.0, 
      image: 'https://i.postimg.cc/JzBG3dH0/oppo-find-x5-pro.jpg', 
      specification: '6.7-inch AMOLED, Snapdragon 8 Gen 1, 50MP camera', 
      warranty: '2 years', 
      rating: 4.7 
    },
 
  ];
  
  const [mainImage, setMainImage] =  useState(
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
  );
  const [count, setCount] = useState(1);
  const changeImage = (src) => {
    setMainImage(src);
  };
  const product = products.find((p) => p.id === parseInt(productId));
  const incrementCount = () => {
    setCount(count + 1);
  };
  const [activeSim, setActiveSim] = useState("Dual");
  const [activeStorage, setActiveStorage] = useState("12/256GB");

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const [activeTab, setActiveTab] = useState("specification");

  const renderContent = () => {
    if (activeTab === "specification") {
      return (
        <div>
          <h2 className="text-xl text-white font-semibold">Product Specifications</h2>
          <ul className="list-disc  pl-5">
            <li>Size: 10x10x10 cm</li>
            <li>Weight: 500g</li>
            <li>Color: Black</li>
            <li>Material: Plastic</li>
          </ul>
        </div>
      );
    } else if (activeTab === "description") {
      return (
        <div>
          <h2 className="text-xl font-semibold">Product Description</h2>
          <p>This is a high-quality product designed for everyday use. It offers great value for money and is built to last.</p>
        </div>
      );
    } else if (activeTab === "warranty") {
      return (
        <div>
          <h2 className="text-xl font-semibold">Warranty Information</h2>
          <p>The product comes with a 1-year warranty covering manufacturing defects. Please retain your receipt for warranty claims.</p>
        </div>
      );
    }
  };
  return (
    <div className="  ">
      <div className="container   mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4 mt-24">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={mainImage}
              alt="Product"
              className="w-full h-auto rounded-lg shadow-md mb-4"
              id="mainImage"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              <img
                src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 1"
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={() =>
                  changeImage(
                    "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  )
                }
              />
              <img
                src="https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 2"
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={() =>
                  changeImage(
                    "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                  )
                }
              />
              <img
                src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 3"
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={() =>
                  changeImage(
                    "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                  )
                }
              />
              <img
                src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Thumbnail 4"
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={() =>
                  changeImage(
                    "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                  )
                }
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4  ">
            <h2 className="text-3xl  gradient-text font-bold mb-2"> {product.title}</h2>
            <p className=" text-white mb-4">SKU: WH1000XM4</p>
            <div className='  flex flex-col lg:flex-row md:gird md:grid-cols-2 gap-5'>
            <div className="mb-4 bg-slate-100 p-1 rounded-lg     w-48">
              <span className=" mr-2">TK {product.price}</span>
              <span className="  line-through">TK399.99</span>
            </div>
            <div>
            <div className="mb-4 font-semibold bg-slate-100 p-1 rounded-lg     w-48">
           <p  > Stock: In Stock</p>
            </div>
            
            </div>
            <div className="mb-4 bg-slate-100 p-1 rounded-lg     w-48">
            <p >  Product Code: AGL24660</p>
            </div>
            </div>
      
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="ml-2   text-white">4.5 (120 reviews)</span>
            </div>
            <p className=" text-white mb-6">
              {product.description}
            </p>
            <div className="p-4">
      {/* Sim Selection */}
      <div className="mb-4">
        <span className="mr-4 font-semibold text-white ">Sim:</span>
        <button
          className={`px-4 py-2 mr-2   rounded-md  ${
            activeSim === "Dual" ? " bg-purple-600 text-white font-semibold" : "bg-gray-200 text-black font-semibold"
          }`}
          onClick={() => setActiveSim("Dual")}
        >
          Dual
        </button>
        <button
          className={`px-4 py-2 rounded-md   ${
            activeSim === "Single" ? " bg-purple-600 text-white font-semibold" : "bg-gray-200 text-black font-semibold"
          }`}
          onClick={() => setActiveSim("Single")}
        >
          Single
        </button>
      </div>

      {/* Storage Selection */}
      <div>
        <span className="mr-4 font-semibold text-white">Storage:</span>
        {["12/256GB", "12/512GB", "12GB/1TB"].map((storage) => (
          <button
            key={storage}
            className={`px-4 py-2 mr-2 r rounded-md  ${
              activeStorage === storage ? " bg-purple-600 text-white font-semibold" : "bg-gray-200 text-black font-semibold"
            }`}
            onClick={() => setActiveStorage(storage)}
          >
            {storage}
          </button>
        ))}
      </div>
    </div>

            <div className="mb-6">
              <h3 className="text-lg text-white font-semibold mb-2">Color:</h3>
              <div className="flex space-x-2">
                <button className="w-8 h-8    bg-blue-900 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
                <button className="w-8 h-8 bg-green-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
              </div>
            </div>

            <div className="flex items-center gap-5 mb-6">
  <div>
    <button className="gradient-bg text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
      Pre Order
    </button>
  </div>

  <div className="flex items-center gap-2">
    <button
      className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300"
      onClick={decrementCount}
      title="Decrement"
    >
      -
    </button>

    <span className="px-5 py-2 bg-gray-200 text-gray-800 rounded-full">
      {count}
    </span>

    <button
      className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300"
      onClick={incrementCount}
      title="Increment"
    >
      +
    </button>
  </div>
</div>

          </div>
        </div>
      </div>
      <RelatedProduct/>
      {/*  tabs section */}
      <div className="p-6">
      <div className="flex space-x-4 border-b-2 pb-4">
        <div
          className={`cursor-pointer py-2 px-4 ${activeTab === "specification" ? "text-blue-500 border-b-2 border-blue-500 font-semibold" : "text-gray-600 hover:text-blue-500"}`}
          onClick={() => setActiveTab("specification")}
        >
          Specification
        </div>
        <div
          className={`cursor-pointer py-2 px-4 ${activeTab === "description" ? "text-blue-500 border-b-2 border-blue-500 font-semibold" : "text-gray-600 hover:text-blue-500"}`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </div>
        <div
          className={`cursor-pointer py-2 px-4 ${activeTab === "warranty" ? "text-blue-500 border-b-2 border-blue-500 font-semibold" : "text-gray-600 hover:text-blue-500"}`}
          onClick={() => setActiveTab("warranty")}
        >
          Warranty
        </div>
      </div>

      <div className="mt-6">
        {renderContent()}
      </div>
    </div>
    </div>
  );
};

export default ProductDetailCard;
