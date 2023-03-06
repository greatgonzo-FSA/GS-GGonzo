import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleProduct, fetchSingleProductAsync  } from "../slices/singleProductSlice";

const SingleProduct = () => {

    const dispatch = useDispatch()
    const { productId } = useParams()
    const singleProduct = useSelector((state) => selectSingleProduct(state, productId))
    const { brand ,model, price, description, imageUrl } = singleProduct

    useEffect(() => {
        dispatch(fetchSingleProductAsync(productId))
    }, [dispatch])
    console.log(singleProduct, "DATTTAAAAAA")

    return (
        <div id='single-product'>
            <h2>{model}</h2>
            <p>{description}</p>
        </div>
    )
}

export default SingleProduct