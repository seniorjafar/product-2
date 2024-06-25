import React, { useEffect } from "react";
import "./index.scss";

const Model = ({ children, close }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <>
      {children}
      <div onClick={() => close()} className="model__owerley"></div>
    </>
  );
};

export default Model;
