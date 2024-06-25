import React, { useState } from "react";
import ProductCard from "./product-card";
import "./index.scss";
const Products = (product) => {
  const { dataResponse, setLimit } = product;

  return (
    <div className="data">
      <div>
        <>
          <div className="data1">
            {dataResponse?.map((item) => (
              <ProductCard key={item?.id} {...item} />
            ))}
          </div>
          
          <button className="yana-hom" onClick={() => setLimit((p) => p + 0.5)}>
            More
          </button>
        </>
      </div>
    </div>
  );
};

export default Products;
