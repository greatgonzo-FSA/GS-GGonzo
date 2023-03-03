import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync, selectAllProducts } from "../slices/productSlice";

const Retro = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  useEffect(() => {
    dispatch(fetchProductsAsync(products));
  }, [dispatch]);


  const motorola = products.filter((product) => product.brand.toLowerCase() === "motorola");
  console.log(motorola, "TESTING!!!!!!!!!!!")
  const nokia = products.filter((product) => product.brand.toLowerCase() === "nokia");
  const blackberry = products.filter((product) =>product.brand.toLowerCase() === "blackberry");
  return (
    <div id="retro-container" className="row">
      <div id="all-retro" className="column">
        <div>
          {motorola.map((motorola) => (
            <div key={motorola.id}>
              <h3>
                {motorola.brand} - {motorola.model}
              </h3>
              <p>{motorola.description}</p>
            </div>
          ))}
        </div>
        <div>
          {nokia.map((nokia) => (
            <div key={nokia.id}>
              <h3>
                {nokia.brand} - {nokia.model}
              </h3>
              <p>{nokia.description}</p>
            </div>
          ))}
        </div>
        <div>
          {blackberry.map((blackberry) => (
            <div key={blackberry.id}>
              <h3>
                {blackberry.brand} - {blackberry.model}
              </h3>
              <p>{blackberry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
   
  );
};

export default Retro;
