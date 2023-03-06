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


  const nokia = products.filter(
    (product) =>
      product.brand.toLowerCase() === "nokia" && product.model.toLowerCase()
  );
  const motorola = products.filter(
    (product) =>
      product.brand.toLowerCase() === "motorola" && product.model.toLowerCase()
  );
  const blackberry = products.filter(
    (product) =>
      product.brand.toLowerCase() === "blackberry" &&
      product.model.toLowerCase()
  );

  return (
    <div id="android-container" className="row">
      <div id="all-nokia" className="column">
        <div>
          <h2>Nokia</h2>
          {nokia.map((nokia) => (
            <div key={nokia.id}>
              <h3>
                {nokia.brand} - {nokia.model}
              </h3>
              <p>{nokia.description}</p>
              <Link to={`/products/${nokia.id}`} key={`${nokia.id}`}>
                {" "}
                <img src={nokia.imageURL} height={200}></img>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div id="all-motorola" className="column">
        <div>
          <h2>Motorola</h2>
          {motorola.map((motorola) => (
            <div key={motorola.id}>
              <h3>
                {motorola.brand} - {motorola.model}
              </h3>
              <p>{motorola.description}</p>
              <Link to={`/products/${motorola.id}`} key={`${motorola.id}`}>
                {" "}
                <img src={motorola.imageURL} height={200}></img>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <h2>Blackberry</h2>
      {blackberry.map((blackberry) => (
        <div key={blackberry.id}>
          <h3>
            {blackberry.brand} - {blackberry.model}
          </h3>
          <p>{blackberry.description}</p>
          <Link to={`/products/${blackberry.id}`} key={`{blackberry.id}`}>
            {" "}
            <img src={blackberry.imageURL} height={200}></img>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Retro;
