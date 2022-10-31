import { useState } from "react";

const MIN_QUANTITY = 1;

function ProductCard({ productData }) {
  const [quantity, setQuantity] = useState(MIN_QUANTITY);

  const addQuantity = () => {
    if (productData.stock === quantity) return;
    setQuantity((prevValue) => prevValue + 1);
  };

  const subtractQuantity = () => {
    if (quantity === 1) return;
    setQuantity((prevValue) => prevValue - 1);
  };

  return (
    <div className="bg-white max-w-[270px] rounded-lg min-h-[330px] p-3">
      <img className="h-[150px] w-[100%]" src="" alt="" />
      <div className="flex flex-col space-between">
        <h4 className="text-black text-center">{productData.title}</h4>
        <p className="text-black">{productData.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="px-3 py-1" onClick={subtractQuantity}>
              -
            </button>
            <p className="text-black mx-2">{quantity}</p>
            <button className="px-3 py-1" onClick={addQuantity}>
              +
            </button>
          </div>
          <p className="text-black mr-4">{productData.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
