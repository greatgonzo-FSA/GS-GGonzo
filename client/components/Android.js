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
                <h2>Samsung</h2>
                    {samsung.map(samsung => (
                        <div key={samsung.id}>
                            <h3>{samsung.brand} - {samsung.model}</h3>
                            <p>{samsung.description}</p>
                            <Link
                                to={`/products/${samsung.id}`}
                                key={`All Students: ${samsung.id}`}
                            > <img src={samsung.imageURL} height={200}></img></Link>
                        </div>
                    ))}
                </div>
            </div>
            <div id="all-google" className="column">
                <div>
                <h2>Google</h2>
                    {google.map(google => (
                        <div key={google.id}>
                            <h3>{google.brand} - {google.model}</h3>
                            <p>{google.description}</p>
                            <Link
                                to={`/products/${google.id}`}
                                key={`All Students: ${google.id}`}
                            > <img src={google.imageURL} height={200}></img></Link>
                        </div>
                    ))}
                </div>
            </div>
            <h2>BBK Electronics</h2>
                    {bbkElectronics.map(bbkElectronics => (
                        <div key={bbkElectronics.id}>
                            <h3>{bbkElectronics.brand} - {bbkElectronics.model}</h3>
                            <p>{bbkElectronics.description}</p>
                            <Link
                                to={`/products/${bbkElectronics.id}`}
                                key={`All Students: ${bbkElectronics.id}`}
                            > <img src={bbkElectronics.imageURL} height={200}></img></Link>
                        </div>
                    ))}
        </div>
    );
};

export default Android