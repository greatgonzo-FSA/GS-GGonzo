import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync, selectAllProducts } from "../slices/productSlice";

const SingleSamsung = () => {
    const dispatch = useDispatch()
    const products = useSelector(selectAllProducts)

    useEffect(() => {
        dispatch(fetchProductsAsync(products))
    }, [dispatch])

    console.log(products, 'these are the products')

    const samsung = products.filter(product => product.brand.toLowerCase() === 'samsung' && product.model.toLowerCase().includes('galaxy'));

    return (
        <div id="android-container" className="row">
            <div id="all-samsung" className="column">
                <div>
                    <h2>Samsung</h2>
                    {samsung.map(samsung => (
                        <div key={samsung.id}>
                            <img src={samsung.imageURL} height={200}></img>
                            <h3>{samsung.brand} - {samsung.model}</h3>
                            <p>{samsung.description}</p>
                            <button onClick={() => handleAddItem(item)}>+</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleSamsung