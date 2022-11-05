import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IcreCreamView = () => {
  const numOfIceCreams = useSelector((state) => state.icecream.numOfIceCreams);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

  return (
    <div>
      <h2>Number of ice creams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock ice creams
      </button>
    </div>
  );
};

export default IcreCreamView;
