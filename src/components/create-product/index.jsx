import React, { useEffect, useState } from "react";
import "./index.scss";
const initialState = {
  title: "",
  price: "",
  oldPrice: "",
  category: "",
  units: "",
  description: "",
  info: "",
};
import { useGetInputValue } from "../../hooks/useGetInputValue";
import LocalImage from "./LocalImage";
import { useCreateProductMutation } from "../../redux/api/productApi";
import { toast } from "react-toastify";

const CreateProduct = ({ setCreateProduct, createProduct }) => {
  const [productCreate, { isLoading, isSuccess, data: productCreateSuccess }] =
    useCreateProductMutation();
  const [file, setFile] = useState("");
  const { data, handleChange, setData } = useGetInputValue(initialState);
  const handleCreateProduct = (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("title", data.title);
    form.append("price", +data.price);
    form.append("oldPrice", +data.oldPrice);
    form.append("category", data.category);
    form.append("units", data.units);
    form.append("description", data.description);
    form.append("info", JSON.stringify({}));
    Array.from(file)?.forEach((img) => {
      form.append("files", img, img.name);
    });
    productCreate(form);
  };

  useEffect(() => {
    if (isSuccess) {
      setCreateProduct(false);
      toast.success(productCreateSuccess?.message);
    }
  }, [isSuccess]);

  return (
    <form onSubmit={handleCreateProduct} className="create__product">
      <h1 className="create__product__title"> Create Product</h1>
      <input
        type="text"
        value={data?.title}
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="number"
        value={data?.price}
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="number"
        value={data?.oldPrice}
        placeholder="oldPrice"
        onChange={handleChange}
        name="oldPrice"
      />
      <input
        type="text"
        value={data?.category}
        placeholder="category"
        onChange={handleChange}
        name="category"
      />
      <input
        type="text"
        value={data?.units}
        placeholder="units"
        onChange={handleChange}
        name="units"
      />
      <input
        type="text"
        value={data?.description}
        placeholder="description"
        onChange={handleChange}
        name="description"
      />
      <input
        type="text"
        value={data?.info}
        placeholder="info"
        onChange={handleChange}
        name="info"
      />
      <label htmlFor="file__input" className="create__image">
        <input
          accept="image/*"
          id="file__input"
          className="file__input"
          type="file"
          multiple
          onChange={(e) => setFile(e.target.files)}
        />
      </label>
      <LocalImage file={file} setFile={setFile} />
      <button>{isLoading ? "Loading ..." : "Create"}</button>
    </form>
  );
};

export default CreateProduct;
