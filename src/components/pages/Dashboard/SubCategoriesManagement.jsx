import React, { useState, useEffect } from "react";
import axios from "axios";

const SubcategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [subcategoriesById, setSubcategoriesById] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [subcategoryName, setSubcategoryName] = useState("");
  const [subcategoryDescription, setSubcategoryDescription] = useState("");
  const [editingSubcategory, setEditingSubcategory] = useState(null);

  // Fetch categories
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v4/category");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Fetch subcategories based on selected category
  useEffect(() => {
    if (categoryId) {
        fetchSubcategoriesById();
    }
  }, [categoryId]);

  const fetchSubcategoriesById = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v4/subCategory/${categoryId}`);
      setSubcategoriesById(response.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  // Define the fetchSubcategories function
  const fetchSubcategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v4/subcategory");
      if (Array.isArray(response.data)) {
        setSubcategories(response.data);
      } else {
        console.error("Expected array but got:", response.data);
      }
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  // Use useEffect to fetch subcategories when the component mounts
  useEffect(() => {
    fetchSubcategories();
  }, []);

  const handleCreateSubcategory = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v4/subcategory", {
        category: categoryId,
        name: subcategoryName,
        description: subcategoryDescription,
      });
      setSubcategories((prevSubcategories) => [...prevSubcategories, response.data]);
      setSubcategoryName(""); // Clear the input fields after success
      setSubcategoryDescription("");
    } catch (error) {
      console.error("Error creating subcategory:", error);
    }
  };

  // Update subcategory
  const handleUpdateSubcategory = async () => {
    if (!editingSubcategory || !subcategoryName.trim()) return;

    try {
      const response = await axios.put(
        `http://localhost:3000/api/v4/subcategory/${editingSubcategory._id}`,
        {
          name: subcategoryName,
          description: subcategoryDescription,
        }
      );
      setSubcategories(
        subcategories.map((sub) => (sub._id === editingSubcategory._id ? response.data : sub))
      );
      setEditingSubcategory(null);
      setSubcategoryName("");
      setSubcategoryDescription("");
    } catch (error) {
      console.error("Error updating subcategory:", error);
    }
  };

  // Delete subcategory
  const handleDeleteSubcategory = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v4/subCategory/${id}`);
      setSubcategories(subcategories.filter((sub) => sub._id !== id));
    } catch (error) {
      console.error("Error deleting subcategory:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#06080D] text-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Subcategory Manager</h1>

        {/* Category Selection and Subcategory Actions */}
        <div className="bg-[#101623] p-6 rounded-lg shadow-md">
          <select
            className="w-full p-3 mb-4 rounded-lg bg-[#101623] text-gray-50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>

          {categoryId && (
            <>
              <input
                type="text"
                className="w-full p-3 mb-4 rounded-lg bg-[#101623] text-gray-50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter subcategory name"
                value={subcategoryName}
                onChange={(e) => setSubcategoryName(e.target.value)}
              />
              <textarea
                className="w-full p-3 mb-4 rounded-lg bg-[#101623] text-gray-50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter subcategory description"
                value={subcategoryDescription}
                onChange={(e) => setSubcategoryDescription(e.target.value)}
              ></textarea>
              {editingSubcategory ? (
                <button
                  onClick={handleUpdateSubcategory}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-bold"
                >
                  Update Subcategory
                </button>
              ) : (
                <button
                  onClick={handleCreateSubcategory}
                  className="w-full py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-bold"
                >
                  Add Subcategory
                </button>
              )}
            </>
          )}
        </div>

        {/* Subcategory List */}
        <div className="mt-6 bg-[#101623] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Subcategories</h2>
          {subcategories?.length === 0 ? (
            <p className="text-gray-400">No subcategories found.</p>
          ) : (
            <ul className="space-y-4">
              {subcategories?.map((subcategory) => (
                <li key={subcategory._id} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
                  <div>
                    <p>{subcategory.name}</p>
                    {subcategory.description && <p className="text-gray-400">{subcategory.description}</p>}
                  </div>
                  <div className="space-x-4">
                    <button
                      onClick={() => {
                        setEditingSubcategory(subcategory);
                        setSubcategoryName(subcategory.name);
                        setSubcategoryDescription(subcategory.description);
                      }}
                      className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-white"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteSubcategory(subcategory._id)}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}


{subcategoriesById?.length === 0 ? (
            <p className="text-gray-400">No Selected subcategories found.</p>
          ) : (
            <ul className="space-y-4">
              {subcategoriesById?.map((subcategory) => (
                <li key={subcategory._id} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
                  <div>
                    <p>{subcategory.name}</p>
                    {subcategory.description && <p className="text-gray-400">{subcategory.description}</p>}
                  </div>
                  <div className="space-x-4">
                    <button
                      onClick={() => {
                        setEditingSubcategory(subcategory);
                        setSubcategoryName(subcategory.name);
                        setSubcategoryDescription(subcategory.description);
                      }}
                      className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-white"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteSubcategory(subcategory._id)}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubcategoryManager;
