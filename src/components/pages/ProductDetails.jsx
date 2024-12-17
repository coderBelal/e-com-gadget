  
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RelatedProduct from './RelatedProduct';

const ProductDetail = () => {
  const { productId } = useParams();


  
 
 
  const products = [
    {
      id: 1,
      title: "Product 1",
      description: "This is a short description of Product 1",
      price: 30000,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    },
    {
      id: 2,
      title: "Product 2",
      description: "This is a short description of Product 2",
      price: 25000,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    },
    {
      id: 3,
      title: "Product 3",
      description: "This is a short description of Product 3",
      price: 4000,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    },
    {
      id: 4,
      title: "Product 4",
      description: "This is a short description of Product 4",
      price: 35.0,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    },
    {
      id: 5,
      title: "Product 5",
      description: "This is a short description of Product 5",
      price: 50.0,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    },
    {
      id: 6,
      title: "Product 6",
      description: "This is a short description of Product 6",
      price: 45.0,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    },
    {
      id: 7,
      title: "Product 7",
      description: "This is a short description of Product 7",
      price: 55.0,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    },
    {
      id: 8,
      title: "Product 8",
      description: "This is a short description of Product 8",
      price: 60.0,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    },
    {
      id: 9,
      title: "Product 9",
      description: "This is a short description of Product 9",
      price: 65.0,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    },
    {
      id: 10,
      title: "Product 10",
      description: "This is a short description of Product 10",
      price: 70.0,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
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
          <div className="mx-auto max-w-7xl">
  <div className="mt-6">
      <div className=" rounded-lg p-6 shadow-lg">
        <table className="min-w-full text-left">
          <tbody>
            <tr className="border-b border-gray-800 !py-2">
              <td className="py-2 font-semibold text-white">Brand</td>
              <td className="py-2 text-gray-200">Samsung</td>
            </tr>
            <tr className="border-b border-gray-800 !py-2">
              <td className="py-2 font-semibold text-white">Model</td>
              <td className="py-2 text-gray-200">Galaxy S23 FE 5G</td>
            </tr>
            <tr className="border-b border-gray-800 !py-2">
              <td className="py-2 font-semibold text-white">Network</td>
              <td className="py-2 text-gray-200">GSM / HSPA / LTE / 5G</td>
            </tr>
            <tr className="border-b border-gray-800 !py-2">
              <td className="py-2 font-semibold text-white">Dimensions</td>
              <td className="py-2 text-gray-200">158 x 76.5 x 8.2 mm</td>
            </tr>
            <tr className="border-b border-gray-800 !py-2">
              <td className="py-2 font-semibold text-white">Weight</td>
              <td className="py-2 text-gray-200">209 g</td>
            </tr>
            <tr className="border-b border-gray-800 !py-2">
              <td className="py-2 font-semibold text-white">SIM</td>
              <td className="py-2 text-gray-200">Single SIM | Dual SIM | Nano-SIM | eSIM</td>
            </tr>
            <tr className="border-b border-gray-800 !py-2">
              <td className="py-2 font-semibold text-white">Display Type</td>
              <td className="py-2 text-gray-200">Dynamic AMOLED 2X</td>
            </tr>
            <tr className="border-b border-gray-800 !py-2">
              <td className="py-2 font-semibold text-white">Display Size</td>
              <td className="py-2 text-gray-200">6.4 inches</td>
            </tr>
            <tr className="border-b border-gray-800 !py-2">
              <td className="py-2 font-semibold text-white">Display Resolution</td>
              <td className="py-2 text-gray-200">1080 x 2340 pixels</td>
            </tr>
            <tr className="border-b border-gray-800 !py-2">
              <td className="py-2 font-semibold text-white">OS</td>
              <td className="py-2 text-gray-200">Android 13</td>
            </tr>
            <tr className="border-b border-gray-800 !py-2">
              <td className="py-2 font-semibold text-white">Chipset</td>
              <td className="py-2 text-gray-200">Exynos 2200</td>
            </tr>
            <tr>
              <td className="py-2 font-semibold text-white">CPU</td>
              <td className="py-2 text-gray-200">Octa-core</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</div>

        </div>
      );
    } else if (activeTab === "description") {
      return (
        <div>
          <h2 className="text-xl gradient-text mb-3">Galaxy S23 FE 5G</h2>
          <p className="text-white">Samsung has unveiled the highly anticipated Galaxy S23FE, the latest iteration in its popular FE series. Boasting a sturdy aluminum construction, this smartphone not only exudes durability but also comes in a range of captivating colors that are sure to entice users. Backed by a powerful hardware and software synergy, the Galaxy S23FE delivers exceptional performance. The camera system lives up to its reputation, ensuring stunning photos and videos. Overall, this device is a top choice for budget-conscious consumers who seek a flagship-level smartphone experience.</p>
        </div>
      );
    } else if (activeTab === "warranty") {
      return (
        <div>
          <p className="text-white">The product comes with a 1-year warranty covering manufacturing defects. Please retain your receipt for warranty claims.</p>
        </div>
      );
    }
  };
  return (
    <div className="  ">
      <div className="container   mx-auto md:px-4 py-8">
        <div className="flex flex-wrap mx-4 mt-28">
          {/* Product Images */}
          <div className="w-full md:w-5/12 md:px-4 mb-8 relative">
  <img
    src={mainImage}
    alt="Product"
    className="w-[95%] h-auto border border-gray-800 shadow-md mb-4"
    id="mainImage"
  />
  <div className="flex gap-4 w-[95%] lg:flex-row md:flex-row  justify-center overflow-x-auto sm:flex-col">
    <img
      src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
      alt="Thumbnail 1"
      className="size-16 object-cover border border-gray-800 cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
      onClick={() =>
        changeImage(
          "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
        )
      }
    />
    <img
      src="https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
      alt="Thumbnail 2"
      className="size-16 object-cover border border-gray-800 cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
      onClick={() =>
        changeImage(
          "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
        )
      }
    />
    <img
      src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
      alt="Thumbnail 3"
      className="size-16 object-cover border border-gray-800 cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
      onClick={() =>
        changeImage(
          "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
        )
      }
    />
    <img
      src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
      alt="Thumbnail 4"
      className="size-16 object-cover border border-gray-800 cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
      onClick={() =>
        changeImage(
          "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
        )
      }
    />
  </div>
</div>


          {/* Product Details */}
          <div className="w-full md:w-7/12 px-4  ">
            <div className='flex items-center gap-5'>
            <h2 className="text-2xl  gradient-text font-bold mb-2"> {product.title}</h2>
            <div className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-yellow-500">
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="ml-1  text-white">4.5 (120 reviews)</span>
            </div>
               <Link to="/compare">
               <div className='  text-white   text-lg    font-semibold  '>Compare </div></Link>
       
            </div>
            <p className=" text-gray-200 text-[15px] mb-7 mt-3">SKU: WH1000XM4</p>
            <div className='  flex flex-col lg:flex-row md:gird md:grid-cols-2 gap-5'>
            <div className="mb-4 bg-[#0C111A] py-2 text-center text-gray-200 font-light text-[15px] w-48">
              <span className=" mr-2">TK {product.price}</span>
              <span className="  line-through">TK399.99</span>
            </div>
            <div>
            <div className="mb-4 bg-[#0C111A] py-2 text-center text-gray-200 font-light text-[15px] w-48">
           <p  > Stock: In Stock</p>
            </div>
            
            </div>
            <div className="mb-4 bg-[#0C111A] py-2 text-center text-gray-200 font-light text-[15px] w-48">
            <p >  Product Code: AGL24660</p>
            </div>
            </div>
      
           
            <p className=" text-white mb-10">
              {product.description}
            </p>
            <div className="">
      {/* Sim Selection */}
      <div className="mb-4 text-[15px] flex items-center">
        <span className="mr-4 font-semibold text-white ">Sim:</span>
        <div>
        <button
          className={`px-4 py-1 mr-2   border border-gray-800  ${
            activeSim === "Dual" ? " bg-purple-600 text-white " : "bg-[#0C111A] text-gray-200 "
          }`}
          onClick={() => setActiveSim("Dual")}
        >
          Dual
        </button>
        <button
          className={`px-4 py-1 border border-gray-800   ${
            activeSim === "Single" ? " bg-purple-600 text-white " : "bg-[#0C111A] text-gray-200 "
          }`}
          onClick={() => setActiveSim("Single")}
        >
          Single
        </button>
        </div>
      </div>

      {/* Storage Selection */}
      <div>
        <span className="mr-4 font-semibold text-white text-[15px]">Storage:</span>
        {["12/256GB", "12/512GB", "12GB/1TB"].map((storage) => (
          <button
            key={storage}
            className={`px-4 py-1 mr-2 r border border-gray-800  ${
              activeStorage === storage ? " bg-purple-600 text-white " : "bg-[#0C111A] text-gray-200 "
            }`}
            onClick={() => setActiveStorage(storage)}
          >
            {storage}
          </button>
        ))}
      </div>
    </div>

            <div className="mb-6 flex mt-6 gap-4 items-center">
              <h3 className="text-[15px] text-white font-semibold ">Color:</h3>
              <div className="flex space-x-2">
                <button className="w-6 h-6    bg-blue-900 shadow-lg hover:shadow-purple-800  transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                <button className="w-6 h-6 bg-gray-300 shadow-lg hover:shadow-purple-800  transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                <button className="w-6 h-6 bg-blue-500 shadow-lg hover:shadow-purple-800  transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
                <button className="w-6 h-6 bg-green-500 shadow-lg hover:shadow-purple-800  transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
              </div>
            </div>

            <div className="md:flex items-center gap-5 mb-6 mt-10 ">
  <div className=''>

  <div className="flex items-center gap-2">
    <button
      className="bg-[#0C111A] text-white px-4 py-2 border hover:border-purple-700 transition duration-300 border-gray-800"
      onClick={decrementCount}
      title="Decrement"
    >
      -
    </button>

    <span className="px-10 py-2 bg-[#0C111A] w-full text-center text-gray-300 border border-gray-800">
      {count}
    </span>

    <button
      className="bg-[#0C111A] text-white px-4 py-2 border hover:border-purple-700 transition duration-300 border-gray-800"
      onClick={incrementCount}
      title="Increment"
    >
      +
    </button>
  </div>


    
  </div>

  <div className='gradient-bg w-full h-[41px] md:w-[45%] hidden md:grid'>
    <button className="bg-[#06080D] hover:bg-transparent h-[37.5px] relative top-[1.7px] w-[98%] ml-[2px] text-white py-[9px] px-12 mt-5 md:mt-0  border-transparent hover:border-blue-600 transition duration-300">
    <span className='relative bottom-1'>Add to Cart</span>
      </button>
  </div>
    
  <div className='gradient-bg w-full md:hidden relative h-[41px] md:w-[45%] mt-5'>
    <button className="bg-[#06080D] hover:bg-transparent h-[37.5px] absolute top-[1.7px] w-[98.5%] ml-[2px] text-white py-[9px] px-12 mt- md:mt-0  border-transparent hover:border-blue-600 transition duration-300">
    <span className='relative bottom-1'>Add to Cart</span>
      </button>
  </div>

  <button className="gradient-bg text-white py-[9px] px-12 w-full md:w-[40%] mt-2 md:mt-0  border-transparent hover:border-blue-600 transition duration-300">
      Buy Now
    </button>
</div>


          </div>
        </div>
      </div>
      <RelatedProduct/>
      {/*  tabs section */}
      <div className="p-6  mx-auto max-w-7xl">
      <div className="relative">
  {/* Tab Buttons */}
  <div className="flex space-x-4 pb-4 mt-10">
    <div
      className={`cursor-pointer py-2 px-6 relative transition-all duration-300 ${
        activeTab === "specification" ? "text-purple-600" : "text-gray-600 hover:text-purple-600"
      }`}
      onClick={() => setActiveTab("specification")}
    >
      Specification
    </div>
    <div
      className={`cursor-pointer py-2 px-6 relative transition-all duration-300 ${
        activeTab === "description" ? "text-purple-600" : "text-gray-600 hover:text-purple-600"
      }`}
      onClick={() => setActiveTab("description")}
    >
      Description
    </div>
    <div
      className={`cursor-pointer py-2 px-6 relative transition-all duration-300 ${
        activeTab === "warranty" ? "text-purple-600" : "text-gray-600 hover:text-purple-600"
      }`}
      onClick={() => setActiveTab("warranty")}
    >
      Warranty
    </div>
  </div>

  {/* Sliding Indicator */}
  <div
    className={`absolute bottom-0 h-[2px] bg-purple-600 transition-all duration-300 ease-in-out`}
    style={{
      width: `${activeTab === "specification" ? "140px" : activeTab === "description" ? "145px" : "145px"}`,
      transform: `translateX(${
        activeTab === "specification" ? "5px" : activeTab === "description" ? "145px" : "280px"
      })`,
    }}
  ></div>
</div>


      <div className="mt-6">
        {renderContent()}
      </div>
    </div>
    </div>
  );
};

export default ProductDetail;