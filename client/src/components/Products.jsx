import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3001/product/all");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="grid grid-cols-[repeat(auto-fit, minmax(270px, 1fr))]">
      {products.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
    </div>
  );
}

export default Products;
