import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAndroidAsync, selectAndroid } from "../slices/SingleAndroidSlice";

const SingleAndroid = () => {
  const dispatch = useDispatch();
  const singleAndroid = useSelector(selectAndroid);
  useEffect(() => {
    dispatch(fetchAndroidAsync());
  }, [dispatch]);

  return (              
    <div id="container" className="row">
      <div id="SingleAndroid" className="column">
        {singleAndroid && singleAndroid.length
          ? singleAndroid.map((android) => (
              <div
                className="list-item row"
                key={`Single Android: ${android.id}`}
              >
                <h1>{android.model}</h1>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default SingleAndroid;