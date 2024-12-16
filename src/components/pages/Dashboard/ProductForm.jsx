import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductForm = ({ productId, setProducts }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    subcategory: "",
    brand: "",
  });
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
console.log(categories)
  useEffect(() => {
    axios.get("http://localhost:3000/api/v4/category").then((response) => setCategories(response.data));

    if (productId) {
      axios.get(`http://localhost:3000/api/v4/products/${productId}`).then((response) => {
        setProduct(response.data);
        setIsUpdate(true);
      });
    }
  }, [productId]);

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
  console.log('Selected categoryId:', categoryId); // চেক করুন categoryId এর মান
  setCategoryId(categoryId); // categoryId স্টেট আপডেট করুন
  setProduct({ ...product, category: categoryId });

  axios.get(`http://localhost:3000/api/v4/subCategory/${categoryId}`).then((response) => {
    console.log('Subcategories:', response);
    setSubcategories(response.data);
  }).catch(error => {
    console.error("Error fetching subcategories:", error);
  });
  };
console.log(subcategories)
  const handleSubcategoryChange = (e) => {
    const subcategoryId = e.target.value;
    setProduct({ ...product, subcategory: subcategoryId });
    axios.get(`http://localhost:3000/api/v4/brand/${subcategoryId}`).then((response) => {
      setBrands(response.data);
    });
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      axios.put(`http://localhost:3000/api/v4/products/${productId}`, product).then(() => {
        alert("Product updated!");
        axios.get("http://localhost:3000/api/v4/products").then((response) => setProducts(response.data));
      });
    } else {
      axios.post("http://localhost:3000/api/v4/products", product).then(() => {
        alert("Product added!");
        axios.get("http://localhost:3000/api/v4/products").then((response) => setProducts(response.data));
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{isUpdate ? "Update Product" : "Add Product"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleCategoryChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-28">
          <label className="block text-sm font-semibold">Subcategory</label>
          <select
            name="subcategory"
            value={product.subcategory}
            onChange={handleSubcategoryChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Subcategory</option>
            {subcategories?.map((subcategory) => (
              <option key={subcategory._id} value={subcategory._id}>
                {subcategory.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Brand</label>
          <select
            name="brand"
            value={product.brand}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Brand</option>
            {brands.map((brand) => (
              <option key={brand._id} value={brand._id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
          {isUpdate ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
