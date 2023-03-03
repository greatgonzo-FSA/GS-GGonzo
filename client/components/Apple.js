import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync, selectAllProducts } from "../slices/productSlice";

const Apple = () => {
    const dispatch = useDispatch()
    const products = useSelector(selectAllProducts)

    useEffect(() => {
        dispatch(fetchProductsAsync(products))
    }, [dispatch])

    console.log(products, 'these are the products')

    const apple = products.filter(product => product.brand.toLowerCase() === 'apple' && product.model.toLowerCase().includes('iphone'));

    return (
        <div id="apple-container" className="row">
            <div id="all-iphones" className="column">
                <div>
                    <h2>Apple iPhones</h2>
                    {apple.map(apple => (
                        <div key={apple.id}>
                            <h3>{apple.brand} - {apple.model}</h3>
                            <p>{apple.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Apple