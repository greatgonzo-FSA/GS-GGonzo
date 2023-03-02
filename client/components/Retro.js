import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRetro, singleRetro, selectRetro } from "../slices/retroSlice";

const Retro = () => {
  const dispatch = useDispatch();
  const retros = useSelector(selectRetro);
  const [selectedRetroId, setSelectedRetroId] = useState(null);

  useEffect(() => {
    dispatch(fetchRetro());
  }, [dispatch]);

  const allRetros = retros.map((retro) => (
    <div key={retro.id}>
      <h2>{retro.brand}</h2>
      <p>{retro.model}</p>
      <p>{retro.price}</p>
    </div>
  ));

  useEffect(() => {
    if(selectedRetroId){
        dispatch(singleRetro(selectedRetroId))
    }
  }, [selectedRetroId, dispatch]);

  return (
 <div>
 <h1> All retro phones</h1>
 {allRetros}
</div>
  );
};

export default Retro;
