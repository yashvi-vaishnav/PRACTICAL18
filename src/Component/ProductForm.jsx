
import React, { useState, useEffect } from 'react';
import './ProductForm.css';

function ProductForm({ addProduct, selectedProduct, updateProduct, cancelEdit }) {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    if (selectedProduct) {
      setName(selectedProduct.name);
      setPrice(selectedProduct.price);
      setCategory(selectedProduct.category);
      setQuantity(selectedProduct.quantity);
    } else {
      setName('');
      setPrice('');
      setCategory('');
      setQuantity('');
    }
  }, [selectedProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      id: selectedProduct ? selectedProduct.id : Date.now(),
      name,
      price,
      category,
      quantity
    };

    if (selectedProduct) {
      updateProduct(product);
    } else {
      addProduct(product);
    }

    setName('');
    setPrice('');
    setCategory('');
    setQuantity('');
  };

  return (
    <div className="form-container">

      <h2>
        {selectedProduct ? 'Edit Product' : 'Add Product'}
      </h2>

      <form onSubmit={handleSubmit}>

        <label>Product Name:</label>
        <input
          type="text"
          placeholder="Enter Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Product Price:</label>
        <input
          type="number"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min="0.01"
          step="0.01"
          required
        />

        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          <option value="Furniture">Furniture</option>
        </select>

        <label>Quantity:</label>
        <input
          type="number"
          placeholder="Enter Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="0"
          required
        />

        <button type="submit">
          {selectedProduct ? 'Update Product' : 'Add Product'}
        </button>

        {selectedProduct && (
          <button type="button" className="cancel-btn"
            onClick={cancelEdit}>
            Cancel
          </button>
        )}

      </form>

    </div>
  );
}

export default ProductForm;
