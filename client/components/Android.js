import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync, selectAllProducts } from "../slices/productSlice";


const Android = () => {
    const dispatch = useDispatch()
    const products = useSelector(selectAllProducts)

    useEffect(() => {
        dispatch(fetchProductsAsync(products))
    }, [dispatch])

    console.log(products, 'these are the products')

    const samsung = products.filter(product => product.brand.toLowerCase() === 'samsung' && product.model.toLowerCase().includes('galaxy'));
    const google = products.filter(product => product.brand.toLowerCase() === 'google' && product.model.toLowerCase().includes('pixel'));
    const bbkElectronics = products.filter(product => product.brand.toLowerCase() === 'bbk electronics' && product.model.toLowerCase().includes('oneplus'));

    return (
        <div id="android-container" className="row">
            <div id="all-samsung" className="column">
                <div>
                <Link to="/singleSamsung">Samsung</Link>
                    {samsung.map(samsung => (
                        <div key={samsung.id}>
                            <h3>{samsung.brand} - {samsung.model}</h3>
                            <p>{samsung.description}</p>
                            <img src={samsung.imageURL} height={200}></img>
                            <button onClick={() => handleAddItem(item)}>+</button>
                        </div>
                    ))}
                </div>
            </div>
            <div id="all-google" className="column">
                <div>
                <Link to="/singleGoogle">Google</Link>
                    {google.map(google => (
                        <div key={google.id}>
                            <h3>{google.brand} - {google.model}</h3>
                            <p>{google.description}</p>
                            <img src={google.imageURL} height={200}></img>
                            <button onClick={() => handleAddItem(item)}>+</button>
                        </div>
                    ))}
                </div>
            </div>
            <div id="all-bbkElectronics" className="column">
                <div>
                <Link to="/singleBbk">BBK Electronics</Link>
                    {bbkElectronics.map(bbkElectronics => (
                        <div key={bbkElectronics.id}>
                            <h3>{bbkElectronics.brand} - {bbkElectronics.model}</h3>
                            <p>{bbkElectronics.description}</p>
                            <img src={bbkElectronics.imageURL} height={200}></img>
                            <button onClick={() => handleAddItem(item)}>+</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Android