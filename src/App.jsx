
import React, { useState } from 'react';

import ProductForm from './Component/ProductForm';
import ProductList from './Component/ProductList';

import './App.css';

function App() {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Laptop',
      price: '50000',
      category: 'Electronics',
      quantity: '5'
    },
    {
      id: 2,
      name: 'Mobile',
      price: '15000',
      category: 'Electronics',
      quantity: '10'
    },
    {
      id: 3,
      name: 'Book',
      price: '500',
      category: 'Books',
      quantity: '20'
    }
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const editProduct = (product) => {
    setSelectedProduct(product);
  };

  const updateProduct = (updatedProduct) => {

    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );

    setSelectedProduct(null);

    alert('Product Updated Successfully!');
  };

  const cancelEdit = () => {
    setSelectedProduct(null);
  };

  return (
    <div>

      <h1 className="heading">
        Product Management System
      </h1>

      <ProductForm
        addProduct={addProduct}
        selectedProduct={selectedProduct}
        updateProduct={updateProduct}
        cancelEdit={cancelEdit}
      />

      <ProductList
        products={products}
        editProduct={editProduct}
      />

    </div>
  );
}

export default App;
