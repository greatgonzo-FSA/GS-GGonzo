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

    return (
        <div id="products-container" className="row">
          <div id="all-products" className="column">
            <div id='apple-container'>

            </div>
            <div id='android-container'>
              
            </div>
            </div>
            <div id='android-container'>

            </div>
            <div id='retro-container'>
              
            </div>
          </div>
      );
    };

export default Products