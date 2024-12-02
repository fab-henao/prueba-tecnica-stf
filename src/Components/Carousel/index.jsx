import React, { useState, useEffect } from "react";
import { fetchProducts } from "../../fakeApi";

const ProductsTab = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };

    getProducts();
  }, []);

  if (loading) {
    return <p className="loading-products">Cargando productos...</p>;
  }

  return (
    <div className="carrusel">
      <h3>✨¡Todo lo que necesitas para destacar está aquí!</h3>
      <div className="container-products">
        {products.map((product, index) => (
          <div key={index} className="product-card-c">
            <a href={`${product.link}`}>
              <img
                className="img-product"
                src={product.src}
                alt={product.name}
              />
              <div className="info-product">
                <h4 className="name-product">{product.name}</h4>
                <p className="price-product">${product.price}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsTab;
