import { useState } from "react";

export const useGetInputValue = (initialState) => {
  const [data, setData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  return { data, setData, handleChange };
};
