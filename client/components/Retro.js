import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRetroAsync, selectRetro } from "../slices/retroSlice";

const Retro = () => {
  const dispatch = useDispatch();
  const retros = useSelector(selectRetro);

  useEffect(() => {
    dispatch(fetchRetroAsync());
  }, [dispatch]);

  console.log(retros)

  return (
    <div id="container" className="row">
      <div id="allRetros" className="column">
        {retros && retros.length
          ? retros.map((retro) => (
              <div
                className="list-item row"
                key={`All Retro: ${retro.id}`}
              >
                <h1>{retro.model}</h1>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Retro;
