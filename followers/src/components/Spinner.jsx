import React from "react";
import { Vortex } from "react-loader-spinner";

function Spinner() {
  return (
    <Vortex
      visible={true}
      height="22"
      width="70"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={["red", "green", "blue", "yellow", "orange", "purple"]}
    />
  );
}

export default Spinner;
