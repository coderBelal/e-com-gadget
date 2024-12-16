// BrandManagement.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const BrandManagement = () => {
  const [categories, setCategories] = useState([]); // To store categories
  const [subcategories, setSubcategories] = useState([]); // To store subcategories
  const [brands, setBrands] = useState([]); // To store brands
  const [categoryId, setCategoryId] = useState(""); // Selected category
  const [subcategoryId, setSubcategoryId] = useState(""); // Selected subcategory
  const [brandName, setBrandName] = useState(""); // New brand name
  const [brandDescription, setBrandDescription] = useState(""); // New brand description

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v4/category");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch subcategories based on the selected category
  useEffect(() => {
    const fetchSubcategories = async () => {
      if (categoryId) {
        try {
          const response = await axios.get(`http://localhost:3000/api/v4/subcategory?category=${categoryId}`);
          setSubcategories(response.data);
        } catch (error) {
          console.error("Error fetching subcategories:", error);
        }
      }
    };
    fetchSubcategories();
  }, [categoryId]);

  // Fetch brands when subcategoryId changes
  useEffect(() => {
    const fetchBrands = async () => {
      if (subcategoryId) {
        try {
          const response = await axios.get(`http://localhost:3000/api/v4/brand?subcategory=${subcategoryId}`);
          setBrands(response.data);
        } catch (error) {
          console.error("Error fetching brands:", error);
        }
      }
    };
    fetchBrands();
  }, [subcategoryId]);

  // Handle brand creation
  const handleCreateBrand = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v4/brand", {
        subcategory: subcategoryId,
        name: brandName,
        description: brandDescription,
      });
      setBrands([...brands, response.data]);
      setBrandName("");
      setBrandDescription("");
    } catch (error) {
      console.error("Error creating brand:", error);
    }
  };

  // Handle brand deletion
  const handleDeleteBrand = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v4/brand/${id}`);
      setBrands(brands.filter((brand) => brand._id !== id));
    } catch (error) {
      console.error("Error deleting brand:", error);
    }
  };

  // Handle brand update
  const handleUpdateBrand = async (id) => {
    try {
      const updatedBrand = {
        name: prompt("Enter new brand name:"),
        description: prompt("Enter new brand description:"),
      };
      const response = await axios.put(`http://localhost:3000/api/v4/brand/${id}`, updatedBrand);
      setBrands(brands.map((brand) => (brand._id === id ? response.data : brand)));
    } catch (error) {
      console.error("Error updating brand:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center text-white">Brand Management</h1>

      {/* Category Selection */}
      <div className="mt-4">
        <label className="block mb-2 text-gray-50">Select Category:</label>
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Subcategory Selection */}
      {categoryId && (
        <div className="mt-4">
          <label className="block mb-2 text-gray-50">Select Subcategory:</label>
          <select
            value={subcategoryId}
            onChange={(e) => setSubcategoryId(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Select Subcategory</option>
            {subcategories.map((subcategory) => (
              <option key={subcategory._id} value={subcategory._id}>
                {subcategory.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Brand Creation */}
      {subcategoryId && (
        <div className="mt-4">
          <h2 className="text-xl text-gray-50">Create New Brand</h2>
          <input
            type="text"
            placeholder="Brand Name"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            className="border p-2 mt-2 w-full rounded"
          />
          <textarea
            placeholder="Brand Description"
            value={brandDescription}
            onChange={(e) => setBrandDescription(e.target.value)}
            className="border p-2 mt-2 w-full rounded"
          />
          <button
            onClick={handleCreateBrand}
            className="bg-blue-500 text-white p-2 mt-2 rounded"
          >
            Create Brand
          </button>
        </div>
      )}

      {/* Brand List */}
      {brands.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl text-gray-50">Existing Brands</h2>
          <ul>
            {brands.map((brand) => (
              <li key={brand._id} className="flex justify-between items-center p-2">
                <div className="text-gray-50">
                  <strong>{brand.name}</strong>
                  <p>{brand.description}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleUpdateBrand(brand._id)}
                    className="bg-yellow-500 text-white p-1 rounded mx-1"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteBrand(brand._id)}
                    className="bg-red-500 text-white p-1 rounded mx-1"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BrandManagement;
