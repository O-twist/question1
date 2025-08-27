import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-card">
        <img src={product.image} alt={product.title} className="product-image" />
        <h3 className="product-name">{product.title}</h3>
        <p className="product-price">${product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;