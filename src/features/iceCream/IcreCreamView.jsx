import React from "react";
import { useSelector } from "react-redux";

const IcreCreamView = () => {
  const numOfIceCreams = useSelector((state) => state.icecream.numOfIceCreams);

  return (
    <div>
      <h2>Number of ice creams - {numOfIceCreams}</h2>
      <button>Order ice cream</button>
      <button>Restock ice creams</button>
    </div>
  );
};

export default IcreCreamView;
