import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleProduct, fetchSingleProductAsync  } from "../slices/singleProductSlice";

const SingleProduct = () => {

    const dispatch = useDispatch()
    const { productId } = useParams()
    const singleProduct = useSelector(selectSingleProduct)
    const { brand ,model, price, description, imageUrl } = singleProduct

    useEffect(() => {
        dispatch(fetchSingleProductAsync (productId))
    }, [dispatch])

    return (
        <div id='single-product'>
            <h2>{brand}</h2>
        </div>
    )
}

export default SingleProduct