import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIphonesAsync, selectAllIphones } from "../slices/iphoneSlice";

const Iphones = () => {
  const dispatch = useDispatch();
  const iphones = useSelector(selectAllIphones);

  useEffect(() => {
    dispatch(fetchIphonesAsync());
  }, [dispatch]);

  return (
    <div id="container" className="row">
      <div id="allIphones" className="column">
        {iphones && iphones.length
          ? iphones.map((iphone) => (
              <div
                className="list-item row"
                key={`All Phones: ${iphone.id}`}
              >
                <h1>{iphone.model}</h1>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Iphones;