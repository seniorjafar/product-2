import React, { useState } from "react";
import Products from "../../components/products";
import { useGetProductsQuery } from "../../redux/api/productApi";

const Home = () => {
  const [limit, setLimit] = useState(1);
  const { data, isError } = useGetProductsQuery({
    limit: limit * 10,
  });

  return (
    <>
      
      <Products
        dataResponse={data?.data?.products}
        isError={isError}
        setLimit={setLimit}
      />
    </>
  );
};

export default Home;
