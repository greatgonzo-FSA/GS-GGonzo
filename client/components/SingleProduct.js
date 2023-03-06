import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleProduct, fetchSingleProductAsync  } from "../slices/singleProductSlice";

const SingleProduct = () => {

    const dispatch = useDispatch()
    const { productId } = useParams()
    const singleProduct = useSelector((state) => selectSingleProduct(state, productId))
    const { brand ,model, price, description, imageURL } = singleProduct

    useEffect(() => {
        dispatch(fetchSingleProductAsync(productId))
    }, [dispatch])
    console.log(singleProduct, "DATTTAAAAAA")

    return (
        <div id='single-product'>
            <img src={imageURL} height={200}></img>
            <h2>{model}</h2>
            <h3>${price}</h3>
            <p>{description}</p>
            <button onClick={() => handleAddItem(item)}>+</button>
        </div>
    )
}

export default SingleProduct