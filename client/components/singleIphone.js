import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleIphone, fetchSingleIphoneAsync } from "../slices/singleIphoneSlice";

const SingleIphone = () => {

    const dispatch = useDispatch()
    const { iphoneId } = useParams()
    const singleIphone = useSelector(selectSingleIphone)
    const { model, price, description, imageUrl } = singleIphone

    useEffect(() => {
        dispatch(fetchSingleIphoneAsync(iphoneId))
    }, [dispatch])

    return (
        <div id='single-iphone'>
            <h2>Iphones</h2>
            <h3>{model}</h3>
        </div>
    )
}

export default SingleIphone