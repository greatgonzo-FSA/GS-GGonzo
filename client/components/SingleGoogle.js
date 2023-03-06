import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync, selectAllProducts } from "../slices/productSlice";

const SingleGoogle = () => {
    const dispatch = useDispatch()
    const products = useSelector(selectAllProducts)

    useEffect(() => {
        dispatch(fetchProductsAsync(products))
    }, [dispatch])

    console.log(products, 'these are the products')

    const google = products.filter(product => product.brand.toLowerCase() === 'google' && product.model.toLowerCase().includes('pixel'));

    return (
        <div id="android-container" className="row">
            <div id="all-google" className="column">
                <div>
                    <h2>Google</h2>
                    {google.map(google => (
                        <div key={google.id}>
                            <Link to="/products">
                                Return to Products
                            </Link>
                            <img src={google.imageURL} height={200}></img>
                            <h3>{google.brand} - {google.model}</h3>
                            <p>{google.description}</p>                            
                            <button onClick={() => handleAddItem(item)}>+</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleGoogle