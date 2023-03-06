import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync, selectAllProducts } from "../slices/productSlice";

const SingleBbk = () => {
    const dispatch = useDispatch()
    const products = useSelector(selectAllProducts)

    useEffect(() => {
        dispatch(fetchProductsAsync(products))
    }, [dispatch])

    console.log(products, 'these are the products')

    const bbkElectronics = products.filter(product => product.brand.toLowerCase() === 'bbk electronics' && product.model.toLowerCase().includes('oneplus'));

    return (
        <div id="android-container" className="row">
            <div id="all-bbkElectronics" className="column">
                <div>
                    <h2>BBK Electronics</h2>
                    {bbkElectronics.map(bbkElectronics => (
                        <div key={bbkElectronics.id}>
                            <Link to="/products">
                                Return to Products
                            </Link>
                            <img src={bbkElectronics.imageURL} height={200}></img>
                            <h3>{bbkElectronics.brand} - {bbkElectronics.model}</h3>
                            <p>{bbkElectronics.description}</p>                            
                            <button onClick={() => handleAddItem(item)}>+</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleBbk