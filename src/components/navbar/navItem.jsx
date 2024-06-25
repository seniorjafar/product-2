import { useEffect, useState } from "react";
import aexp from "../../assets/icons/Aliexpress_logo.svg.png";
import kirish from "../../assets/icons/odam.svg";
import { Link } from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";
import "./index.scss";
import Search from "../search";
import Model from "../model";
import CreateProduct from "../create-product";
const NavItme = () => {
  const [createProduct, setCreateProduct] = useState(false);

  document.body.style.overflow = createProduct ? "hidden" : "auto";

  const closeCreateProduct = () => {
    setCreateProduct(false);
  };

  return (
    <>
    <div className="wrapper">
       <div className="barr"></div>
      <div className="navitme">
        <div className={`bar-menyu`}>
          <div className="barlin">
            <div className="bar-x"></div>
          </div>
        </div>
        <div className="navitme_w">
          <div className="uzm">
            <Link to="/">
              <img src={aexp}width={200} alt="" className="uzmm1" />
            </Link>
          </div>
          <div className="navitme_w_item">
            <Search />
            <div className="kirsh">
              <img src={kirish} alt="" />
              <p> Kirish</p>
            </div>
            <Link onClick={() => setCreateProduct(true)} to={"/"}>
              <div className="sara">
                <IoCreateOutline
                  style={{ fontSize: "24px", color: "#141415" }}
                />
                <p> Mahsulot yaratish</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {createProduct ? (
        <Model close={closeCreateProduct}>
          <CreateProduct
            setCreateProduct={setCreateProduct}
            createProduct={createProduct}
          />
        </Model>
      ) : (
        <></>
      )}
    </div>
     
    </>
  );
};

export default NavItme;
