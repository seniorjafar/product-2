import React, { memo } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const LocalImage = ({ file, setFile }) => {
  const handleRemoveImage = (index) => {
    console.log(index);
    setFile((prev) => [...prev].filter((_, inx) => inx !== index));
  };
  const res = [...file];

  const images = Object.values(file)?.map((image, index) => (
    <div key={index} className="image__card">
      <img src={URL.createObjectURL(image)} width={100} alt="Images" />
      <div onClick={() => handleRemoveImage(index)} className="svg">
        <IoMdCloseCircle />
      </div>
    </div>
  ));
  return (
    <>{res?.length ? <div className="images__wrapper">{images}</div> : <></>}</>
  );
};

export default memo(LocalImage);
