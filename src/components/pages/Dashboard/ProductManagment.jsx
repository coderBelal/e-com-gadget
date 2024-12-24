

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const ProductManagment = ({ productId = null }) => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [productType, setProductType] = useState("");
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    status: "In Stock",
    productCode: "",
    stock: 0,
    MainPrice: 0,
    MainCashDiscountPrice: 0,
    image: [],
    category: "",
    subCategory: "",
    brand: null,
    collections: [],
    foodSchema: [],
    clothingSchema: [],
    mobileSchema: [],
    computerSchema: [],
    electronicsSchema: [],
    othersSchema: {},
  });



  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://gadgets-server.vercel.app/api/v4/category');
        setCategories(response.data);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch Subcategories when Category changes
  useEffect(() => {
    const fetchSubcategoriesByCategoryId = async () => {
      if (productData.category) {
        try {
          const response = await axios.get(
            `https://gadgets-server.vercel.app/api/v4/subCategory/category/${productData.category}`
          );
          setSubcategories(response.data.data);
          setProductData((prev) => ({ ...prev, subCategory: '' })); // Reset subCategory
        } catch (err) {
          console.error('Error fetching subcategories:', err);
        }
      } else {
        setSubcategories([]); // Clear subcategories if category is cleared
      }
    };
    fetchSubcategoriesByCategoryId();
  }, [productData.category]);

  // Fetch Brands when Subcategory changes
  useEffect(() => {
    const fetchBrandsBySubcategory = async () => {
      if (productData.subCategory) {
        try {
          const response = await axios.get(
            `https://gadgets-server.vercel.app/api/v4/brand/subcat/${productData.subCategory}`
          );
          setBrands(response.data.data);
        } catch (err) {
          console.error('Error fetching brands:', err);
        }
      } else {
        setBrands([]); // Clear brands if subCategory is cleared
      }
    };
    fetchBrandsBySubcategory();
  }, [productData.subCategory]);


  useEffect(() => {
    if (productId) {
      const fetchProductData = async () => {
        try {
          const res = await axios.get(`https://gadgets-server.vercel.app/api/v4/products/${productId}`);
          setProductData(res.data);
          if (res.data.foodSchema.length) setProductType("Food");
          else if (res.data.clothingSchema.length) setProductType("Clothing");
          else if (res.data.mobileSchema.length) setProductType("Mobile");
          else if (res.data.computerSchema.length) setProductType("Computer");
          else if (res.data.electronicsSchema.length) setProductType("Electronics");
          else if (res.data.othersSchema) setProductType("Others");
        } catch (err) {
          console.error("Error fetching product data:", err);
        }
      };
      fetchProductData();
    }
  }, [productId]);

  const handleProductTypeChange = (e) => {
    const type = e.target.value;
    setProductType(type);
    setProductData({
      ...productData,
      foodSchema: [],
      clothingSchema: [],
      mobileSchema: [],
      computerSchema: [],
      electronicsSchema: [],
    });
  };

  const handleAddField = () => {
    let updatedSchema;
    
    if (productType === "Mobile") {
      updatedSchema = { model: "", network: "", dimensions: "", weight: "", sim: "", displayType:"", displaySize: "", displayResolution: "",os:"", chipset: "", cpu: "", memory: "", mainCamera: "",selfieCamera: "", sound: "", batteryInfo: "", sensors: "", price: 0,  cashDiscountPrice: 0 };
      setProductData({ ...productData, mobileSchema: [...productData.mobileSchema, updatedSchema] });
    }
    if (productType === "Computer") {
      updatedSchema = { processor: "", ram: "", storage: "", price: 0,cashDiscountPrice: 0, gpu: "", os: "", screenSize: "", ports: "", batteryLife: "", color: "", weight: "", brand: "", releaseDate: "", warranty: "", touchScreen: false, isRefurbished: false,additionalFeatures: "" };
      setProductData({ ...productData, computerSchema: [...productData.computerSchema, updatedSchema] });
    }
    if (productType === "Electronics") {
      updatedSchema = { warranty: "", voltage: "", power: "", connectivity: "", price: 0, cashDiscountPrice: 0 };
      setProductData({ ...productData, electronicsSchema: [...productData.electronicsSchema, updatedSchema] });
    }
  };

  const handleInputChange = (e, schemaType, index, field) => {
    const { value } = e.target;
    const updatedSchema = [...productData[schemaType]];
    updatedSchema[index][field] = value;
    setProductData({ ...productData, [schemaType]: updatedSchema });
  };


  const handleImageUpload = async (e) => {
    const files = e.target.files;
    const uploadedImages = [];
  
    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append('image', files[i]);
  
      try {
        const res = await axios.post('https://api.imgbb.com/1/upload?key=572cbdd219d0fca730f35a7b498fc3a5', formData);
        uploadedImages.push(res.data.data.url); // Push the uploaded image URL to the array
      } catch (error) {
        console.error('Image upload failed', error);
      }
    }
  
    setProductData({
      ...productData,
      image: uploadedImages, // Correctly update the image array state
    });
  };
  

    const handleImageRemove = (index) => {
      setProductData((prevState) => ({
        ...prevState,
        image: prevState.image.filter((_, i) => i !== index), // Remove the image at the specified index
      }));
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
     
    // Make sure images are included in the request
    if (productData.image.length === 0) {
      alert('Please upload at least one image');
      return;
    }
    try {
      if (productId) {
        await axios.put(`https://gadgets-server.vercel.app/api/v4/products/${productId}`, productData);
      } else {
        await axios.post("https://gadgets-server.vercel.app/api/v4/products", productData);
      }
      alert("Product saved successfully!");
    } catch (err) {
      alert("Error saving product");
    }
  };





 

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto lg:p-6 p-2 bg-[#101623] rounded-lg shadow-lg"
    >
      <h2 className="lg:text-2xl text-base font-bold text-center text-gray-100 mb-8">
        {productId ? "Update Product" : "Create Product"}
      </h2>
      <form onSubmit={handleSubmit} className="lg:space-y-6 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={productData.name}
              onChange={(e) => setProductData({ ...productData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-200 mb-1">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={productData.category}
              onChange={(e) => setProductData({ ...productData, category: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-200 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={(e) => setProductData({ ...productData, description: e.target.value })}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="subCategory" className="block text-sm font-medium text-gray-200 mb-1">
              Subcategory
            </label>
            <select
              id="subCategory"
              name="subCategory"
              value={productData.subCategory}
              onChange={(e) => setProductData({ ...productData, subCategory: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Select Subcategory</option>
              {subcategories.map((sub) => (
                <option key={sub._id} value={sub._id}>
                  {sub.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="brand" className="block text-sm font-medium text-gray-200 mb-1">
              Brand
            </label>
            <select
              id="brand"
              name="brand"
              value={productData.brand}
              onChange={(e) => setProductData({ ...productData, brand: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Brand</option>
              {brands.map((brand) => (
                <option key={brand._id} value={brand._id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="productType" className="block text-sm font-medium text-gray-200 mb-1">
            Product Type
          </label>
          <select
            id="productType"
            name="productType"
            value={productType}
            onChange={handleProductTypeChange}
            className="w-full px-3 py-2 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select Product Type</option>
            <option value="Food">Food</option>
            <option value="Clothing">Clothing</option>
            <option value="Mobile">Mobile</option>
            <option value="Computer">Computer</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>

        {productType && (
          <div className="space-y-4">
            <button
              type="button"
              onClick={handleAddField}
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FaPlus className="mr-2" />
              Add {productType} Field
            </button>

            {productData[`${productType.toLowerCase()}Schema`].map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-4 bg-[#070b13] rounded-lg shadow"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">Field {index + 1}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.keys(field).map((key) => (
                    <div key={key}>
                      <label htmlFor={`${key}-${index}`} className="block text-sm font-medium text-gray-200 mb-1">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      <input
                        type="text"
                        id={`${key}-${index}`}
                        value={field[key]}
                        onChange={(e) => handleInputChange(e, `${productType.toLowerCase()}Schema`, index, key)}
                        className="w-full px-3 py-2 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div>
          <label htmlFor="stock" className="block text-sm font-medium text-gray-200 mb-1">
            Stock
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={productData.stock}
            onChange={(e) => setProductData({ ...productData, stock: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="Main Price" className="block text-sm font-medium text-gray-200 mb-1">
          Main Price
          </label>
          <input
            type="number"
            id="MainPrice"
            name="MainPrice"
            value={productData.MainPrice}
            onChange={(e) => setProductData({ ...productData, MainPrice: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="DiscountPrice" className="block text-sm font-medium text-gray-200 mb-1">
         Discount Price
          </label>
          <input
            type="number"
            id="MainCashDiscountPrice"
            name="MainCashDiscountPrice"
            value={productData.MainCashDiscountPrice}
            onChange={(e) => setProductData({ ...productData, MainCashDiscountPrice: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>


        <div>
  <label htmlFor="image" className="block text-sm font-medium text-gray-200 mb-1">
    Product Images
  </label>
  <input
    type="file"
    id="image"
    name="image"
    onChange={handleImageUpload}
    className="w-full px-3 py-2 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    multiple
  />
  <div className="mt-2 grid grid-cols-3 gap-2">
    {productData.image.length > 0 && productData.image.map((url, index) => (
      <div key={index} className="relative">
        <img src={url} alt={`Product Image ${index + 1}`} className="w-full h-32 object-cover rounded-md" />
        <button
          onClick={() => handleImageRemove(index)}
          className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
        >
          <FaMinus />
        </button>
      </div>
    ))}
  </div>
</div>


      
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {productId ? "Update Product" : "Create Product"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ProductManagment;