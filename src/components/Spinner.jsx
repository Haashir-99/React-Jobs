import React from "react";
import { MoonLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  const override = {
    display: "block",
    margin: "100px auto",
  };

  return (
    <MoonLoader color="#4338CA" loading={loading} cssOverride={override} size={100} />
  );
};

export default Spinner;
