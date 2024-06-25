import React from "react";
import { useParams } from "react-router-dom";
import { useGetDetailProductsQuery } from "../../redux/api/productApi";
import AboutCards from "../../components/about-product";

const Product = () => {
  const { id } = useParams();
  const { data} = useGetDetailProductsQuery(id);
  return (
    <>
        <AboutCards productData={data?.data} />
    </>
  );
};

export default Product;
