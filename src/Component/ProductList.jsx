
import React from 'react';
import './ProductList.css';

function ProductList({ products, editProduct }) {

  return (
    <div className="product-list">

      <h2>Product List</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {products.map((product, index) => (

            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>₹{product.price}</td>
              <td>{product.category}</td>
              <td>{product.quantity}</td>

              <td>
                <button
                  className="edit-btn"
                  onClick={() => editProduct(product)}
                >
                  Edit
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {products.length === 0 && (
        <p>No Products Found!</p>
      )}

    </div>
  );
}

export default ProductList;
