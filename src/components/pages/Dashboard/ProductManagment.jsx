


import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";


const ProductManagment = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    axios.get("https://gadgets-server.vercel.app/api/v4/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://gadgets-server.vercel.app/api/v4/products/${id}`).then(() => {
      setProducts(products.filter((product) => product._id !== id));
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <ProductForm setProducts={setProducts} productId={selectedProductId} />
      </div>

      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Product Name</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
        {Array.isArray(products) && products.map((product) => (
            <tr key={product._id}>
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">{product.price}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => setSelectedProductId(product._id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagment;

