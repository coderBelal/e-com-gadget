import React, { useState } from "react";
import { FaSearch, FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const CategoriesManagement = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [categories, setCategories] = useState([
        { id: 1, name: "Smartphones" },
        { id: 2, name: "Laptops" },
        { id: 3, name: "Tablets" },
        { id: 4, name: "Accessories" },
    ]);

    const [newCategory, setNewCategory] = useState("");

    const addCategory = () => {
        if (newCategory) {
            setCategories([
                ...categories,
                { id: categories.length + 1, name: newCategory },
            ]);
            setNewCategory("");
        }
    };

    const deleteCategory = (id) => {
        setCategories(categories.filter((category) => category.id !== id));
    };

    const editCategory = (id) => {
        const category = categories.find((cat) => cat.id === id);
        if (category) {
            const updatedName = prompt("Edit Category Name", category.name);
            if (updatedName) {
                setCategories(
                    categories.map((cat) =>
                        cat.id === id ? { ...cat, name: updatedName } : cat
                    )
                );
            }
        }
    };

    const filteredCategories = categories.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-300 mb-4">Categories Management</h1>

            {/* Add New Category */}
            <div className="mb-4 flex space-x-2">
                <input
                    type="text"
                    className="p-2 border border-gray-700 rounded bg-transparent text-gray-300 focus:outline-none focus:ring focus:ring-indigo-600 w-full"
                    placeholder="Add a new category..."
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                />
                <button
                    className="p-2 bg-indigo-600 text-gray-200 rounded hover:bg-indigo-500"
                    onClick={addCategory}
                >
                    <FaPlus />
                </button>
            </div>

            {/* Search */}
            <div className="flex items-center mb-4 space-x-2">
                <FaSearch className="text-gray-300" />
                <input
                    type="text"
                    placeholder="Search categories..."
                    className="p-2 border border-gray-700 rounded bg-transparent text-gray-300 focus:outline-none focus:ring focus:ring-indigo-600 w-1/3"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Categories Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-700 text-gray-300">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="p-3 border border-gray-700">ID</th>
                            <th className="p-3 border border-gray-700">Category Name</th>
                            <th className="p-3 border border-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCategories.length > 0 ? (
                            filteredCategories.map((category) => (
                                <tr key={category.id} className="hover:bg-gray-700">
                                    <td className="p-3 border border-gray-700">{category.id}</td>
                                    <td className="p-3 border border-gray-700">{category.name}</td>
                                    <td className="p-3 border border-gray-700 flex space-x-2">
                                        <button
                                            className="p-1 rounded bg-indigo-600 text-gray-200 hover:bg-indigo-500"
                                            onClick={() => editCategory(category.id)}
                                            title="Edit Category"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            className="p-1 rounded bg-red-600 text-gray-200 hover:bg-red-500"
                                            onClick={() => deleteCategory(category.id)}
                                            title="Delete Category"
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center p-3 border border-gray-700">
                                    No categories found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoriesManagement;
