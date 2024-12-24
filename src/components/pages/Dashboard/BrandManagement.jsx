// // BrandManagement.jsx
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const BrandManagement = () => {
//   const [categories, setCategories] = useState([]); // To store categories
//   const [subcategories, setSubcategories] = useState([]); // To store subcategories
//   const [brands, setBrands] = useState([]); // To store brands
//   const [categoryId, setCategoryId] = useState(""); // Selected category
//   const [subcategoryId, setSubcategoryId] = useState(""); // Selected subcategory
//   const [brandName, setBrandName] = useState(""); // New brand name
//   const [brandDescription, setBrandDescription] = useState(""); // New brand description

//   // Fetch categories on component mount
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get("https://gadgets-server.vercel.app/api/v4/category");
//         setCategories(response.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Fetch subcategories based on the selected category
//   useEffect(() => {
//     const fetchSubcategories = async () => {
//       if (categoryId) {
//         try {
//           const response = await axios.get(`https://gadgets-server.vercel.app/api/v4/subcategory?category=${categoryId}`);
//           setSubcategories(response.data);
//         } catch (error) {
//           console.error("Error fetching subcategories:", error);
//         }
//       }
//     };
//     fetchSubcategories();
//   }, [categoryId]);

//   // Fetch brands when subcategoryId changes
//   useEffect(() => {
//     const fetchBrands = async () => {
//       if (subcategoryId) {
//         try {
//           const response = await axios.get(`https://gadgets-server.vercel.app/api/v4/brand?subcategory=${subcategoryId}`);
//           setBrands(response.data);
//         } catch (error) {
//           console.error("Error fetching brands:", error);
//         }
//       }
//     };
//     fetchBrands();
//   }, [subcategoryId]);

//   // Handle brand creation
//   const handleCreateBrand = async () => {
//     try {
//       const response = await axios.post("https://gadgets-server.vercel.app/api/v4/brand", {
//         subcategory: subcategoryId,
//         name: brandName,
//         description: brandDescription,
//       });
//       setBrands([...brands, response.data]);
//       setBrandName("");
//       setBrandDescription("");
//     } catch (error) {
//       console.error("Error creating brand:", error);
//     }
//   };

//   // Handle brand deletion
//   const handleDeleteBrand = async (id) => {
//     try {
//       await axios.delete(`https://gadgets-server.vercel.app/api/v4/brand/${id}`);
//       setBrands(brands.filter((brand) => brand._id !== id));
//     } catch (error) {
//       console.error("Error deleting brand:", error);
//     }
//   };

//   // Handle brand update
//   const handleUpdateBrand = async (id) => {
//     try {
//       const updatedBrand = {
//         name: prompt("Enter new brand name:"),
//         description: prompt("Enter new brand description:"),
//       };
//       const response = await axios.put(`https://gadgets-server.vercel.app/api/v4/brand/${id}`, updatedBrand);
//       setBrands(brands.map((brand) => (brand._id === id ? response.data : brand)));
//     } catch (error) {
//       console.error("Error updating brand:", error);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold text-center text-white">Brand Management</h1>

//       {/* Category Selection */}
//       <div className="mt-4">
//         <label className="block mb-2 text-gray-50">Select Category:</label>
//         <select
//           value={categoryId}
//           onChange={(e) => setCategoryId(e.target.value)}
//           className="border p-2 rounded"
//         >
//           <option value="">Select Category</option>
//           {categories.map((category) => (
//             <option key={category._id} value={category._id}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Subcategory Selection */}
//       {categoryId && (
//         <div className="mt-4">
//           <label className="block mb-2 text-gray-50">Select Subcategory:</label>
//           <select
//             value={subcategoryId}
//             onChange={(e) => setSubcategoryId(e.target.value)}
//             className="border p-2 rounded"
//           >
//             <option value="">Select Subcategory</option>
//             {subcategories.map((subcategory) => (
//               <option key={subcategory._id} value={subcategory._id}>
//                 {subcategory.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       {/* Brand Creation */}
//       {subcategoryId && (
//         <div className="mt-4">
//           <h2 className="text-xl text-gray-50">Create New Brand</h2>
//           <input
//             type="text"
//             placeholder="Brand Name"
//             value={brandName}
//             onChange={(e) => setBrandName(e.target.value)}
//             className="border p-2 mt-2 w-full rounded"
//           />
//           <textarea
//             placeholder="Brand Description"
//             value={brandDescription}
//             onChange={(e) => setBrandDescription(e.target.value)}
//             className="border p-2 mt-2 w-full rounded"
//           />
//           <button
//             onClick={handleCreateBrand}
//             className="bg-blue-500 text-white p-2 mt-2 rounded"
//           >
//             Create Brand
//           </button>
//         </div>
//       )}

//       {/* Brand List */}
//       {brands.length > 0 && (
//         <div className="mt-6">
//           <h2 className="text-xl text-gray-50">Existing Brands</h2>
//           <ul>
//             {brands.map((brand) => (
//               <li key={brand._id} className="flex justify-between items-center p-2">
//                 <div className="text-gray-50">
//                   <strong>{brand.name}</strong>
//                   <p>{brand.description}</p>
//                 </div>
//                 <div>
//                   <button
//                     onClick={() => handleUpdateBrand(brand._id)}
//                     className="bg-yellow-500 text-white p-1 rounded mx-1"
//                   >
//                     Update
//                   </button>
//                   <button
//                     onClick={() => handleDeleteBrand(brand._id)}
//                     className="bg-red-500 text-white p-1 rounded mx-1"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BrandManagement;


import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";

const BrandManager = () => {
  const [categories, setCategories] = useState([]);
  const [subcategoriesById, setSubcategoriesById] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [subcategoryId, setSubcategoryId] = useState(""); // For selecting subcategory for brand
  const [formData, setFormData] = useState({ name: "" });
  const [editingBrand, setEditingBrand] = useState(null);
  const [brandsBySubcategory, setBrandsBySubcategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch categories
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get("https://gadgets-server.vercel.app/api/v4/category");
      setCategories(response.data);
    } catch (err) {
      setError("Error fetching categories");
    } finally {
      setLoading(false);
    }
  };

  // Fetch subcategories when a category is selected
  useEffect(() => {
    if (categoryId) fetchSubcategoriesByCategoryId();
  }, [categoryId]);

  const fetchSubcategoriesByCategoryId = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://gadgets-server.vercel.app/api/v4/subCategory/category/${categoryId}`
      );
      setSubcategoriesById(response.data.data);
    } catch (err) {
      setError("Error fetching subcategories");
    } finally {
      setLoading(false);
    }
  };

  // Fetch brands based on subcategory
  useEffect(() => {
    if (subcategoryId) fetchBrandsBySubcategory();
  }, [subcategoryId]);

  const fetchBrandsBySubcategory = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://gadgets-server.vercel.app/api/v4/brand/subcat/${subcategoryId}`
      );
      setBrandsBySubcategory(response.data.data);
    } catch (err) {
      setError("Error fetching brands");
    } finally {
      setLoading(false);
    }
  };

  // Handle create or update brand
  const handleCreateOrUpdateBrand = async () => {
    if (!subcategoryId || !formData.name.trim()) {
      toast.error("Please fill in the Name fields.");
      return;
    }
    setLoading(true);
    try {
      if (editingBrand) {
        await axios.put(
          `https://gadgets-server.vercel.app/api/v4/brand/${editingBrand._id}`,
          formData
        );
        toast.success("Brand edited successfully!");
      } else {
        await axios.post(`https://gadgets-server.vercel.app/api/v4/brand/${subcategoryId}`, {
          ...formData,
          subcategory: subcategoryId,
        });
        toast.success("Brand created successfully!");
      }
      fetchBrandsBySubcategory();
      resetForm();
    } catch (err) {
      setError("Error saving brand.");
    } finally {
      setLoading(false);
    }
  };

  // Handle delete brand
  const handleDeleteBrand = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    setLoading(true);
    try {
      await axios.delete(`https://gadgets-server.vercel.app/api/v4/brand/${id}`);
      fetchBrandsBySubcategory();
    } catch (err) {
      setError("Error deleting brand.");
    } finally {
      setLoading(false);
    }
  };

  // Reset form after add/edit
  const resetForm = () => {
    setFormData({ name: "" });
    setEditingBrand(null);
  };

  return (
    <div className="min-h-screen bg-[#06080D] text-gray-50 lg:p-4 p-2">
      <div className="max-w-4xl mx-auto">
        <h1 className="lg:text-2xl text-xl font-bold text-center lg:mb-6 mb-3">Brand Manager</h1>

        {/* Error and Loading */}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {loading && <p className="text-blue-400 mb-4">Loading...</p>}

        {/* Category and Subcategory Selection */}
        <div className="bg-[#101623] p-6 rounded-lg shadow-md mb-6">
          <select
            className="w-full p-3 mb-4 rounded-lg bg-[#101623] text-gray-50 border border-gray-700 focus:outline-none"
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

          {/* Subcategory Selection */}
          {categoryId && (
            <select
              className="w-full p-3 mb-4 rounded-lg bg-[#101623] text-gray-50 border border-gray-700 focus:outline-none"
              value={subcategoryId}
              onChange={(e) => setSubcategoryId(e.target.value)}
            >
              <option value="">Select a subcategory</option>
              {subcategoriesById.map((sub) => (
                <option key={sub._id} value={sub._id}>
                  {sub.name}
                </option>
              ))}
            </select>
          )}

          {/* Brand Name Input */}
          {subcategoryId && (
            <>
           <input
  type="text"
  placeholder="Enter Brand Name"
  value={formData.name}
  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
  className="w-full p-3 mb-4 rounded-lg bg-[#101623] border border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
/>


              <button
                onClick={handleCreateOrUpdateBrand}
                disabled={loading}
                className={`w-full py-3 rounded-lg font-bold text-white ${
                  editingBrand
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {editingBrand ? "Update Brand" : "Add Brand"}
              </button>
            </>
          )}
        </div>

        {/* Brands List */}
        <div className="bg-[#101623] lg:p-4 p-2 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Brands</h2>
          {brandsBySubcategory?.length === 0 ? (
            <p className="text-gray-400">No brands available.</p>
          ) : (
            <ul className="space-y-3">
              {brandsBySubcategory?.map((brand) => (
                <li
                  key={brand._id}
                  className="flex justify-between lg:items-center items-start bg-gray-800 lg:p-3 p-2 rounded-lg"
                >
                  <div>
                    <p>{brand.name}</p>
                  </div>
                  <div className="space-x-3">
                    <button
                      onClick={() => {
                        setEditingBrand(brand);
                        setFormData({ name: brand.name });
                      }}
                      className="px-4 py-2    bg-indigo-700 hover:bg-yellow-600 rounded-lg text-white"
                    >
                     <FaEdit/>
                    </button>
                    <button
                      onClick={() => handleDeleteBrand(brand._id)}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white"
                    >
                     <FaTrash/>
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

export default BrandManager;

