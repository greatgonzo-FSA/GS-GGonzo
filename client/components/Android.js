import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAndroidsAsync, selectAllAndroids } from "../slices/androidSlice";

const Android = () => {
  const dispatch = useDispatch();
  const androids = useSelector(selectAllAndroids);
  useEffect(() => {
    dispatch(fetchAndroidsAsync());
  }, [dispatch]);

  return (              
    // onclick android homepage
    <div id="container" className="row">
      <div id="allAndroids" className="column">
        {androids && androids.length
          ? androids.map((android) => (
              <div
                className="list-item row"
                key={`All Androids: ${android.id}`}
              >
                <h1>{android.brand}</h1>
                <img src={android.imageURL} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Android;