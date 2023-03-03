import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync, selectAllProducts } from "../slices/productSlice";

const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector(selectAllProducts)

    useEffect(() => {
        dispatch(fetchProductsAsync(products))
    }, [dispatch])
    console.log(products, 'these are the products')

    // const selectedModel = products
    // .map(product => product.brands)
    // .flat()
    // .map(brand => brand.models)
    // .flat()
    // .filter(model => model.id === productId)[0]

    return (
        <div id="products-container" className="row">
          <div id="all-products" className="column">
            {products && products.length
              ? products.map((product) => (
                  <div
                    className="list-item row"
                    key={`All Phones: ${product.id}`}
                  >
                    <h1>{product.brand}</h1>

                  </div>
                ))
              : null}
          </div>
        </div>
      );
    };

export default Products