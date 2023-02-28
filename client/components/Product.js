import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync, selectAllProducts } from "../slices/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <div id="container" className="row">
      <div id="allproduct" className="column">
        {products && products.length
          ? products.map((product) => (
              <div
                className="list-item row"
                key={`All Phones: ${product.name}`}
              >
                <h1>{product.name}</h1>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Product;
