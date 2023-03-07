import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../slices/singleProductSlice";
import { addToCart } from "../slices/cartSlice";


const SingleProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const singleProduct = useSelector((state) => state.singleProduct);

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch, productId]);

   const { model, price, description, imageURL } = singleProduct;
   const handleAddToCart = () => {
    dispatch(addToCart(singleProduct));
  };
  return (
    <div id="single-product">
      <img src={imageURL} height={200}></img>
      <h2>{model}</h2>
      <h3>${price}</h3>
      <p>{description}</p>
      <button  onClick={handleAddToCart}>+</button>
    </div>
  );
};

export default SingleProduct;
