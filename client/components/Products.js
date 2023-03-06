import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Android from "./Android";
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
            <Link to="/apple">Apple</Link>
            </div>
            <div id='android-container'>
              <Link to="/android">Android</Link>
            </div>
            <div id='retro-container'>
            <Link to="/retro">Retro</Link>
            </div>
            </div>
          </div>
      );
    };

export default Products