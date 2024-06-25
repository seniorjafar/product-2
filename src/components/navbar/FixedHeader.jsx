import React, { useContext, useEffect, useState } from "react";
import { CartsAll, Catalog, Hom, Kabenit, LIke } from "../../assets/constants";
import { Link } from "react-router-dom";
function FixedHeader() {
  const [pass, setPass] = useState();

  useEffect(() => {
    let pas = localStorage.getItem("pas");
    let pasAll = pas ? JSON?.parse(pas) : null;
    setPass(pasAll);
  }, [length]);
  return (
    <div>
      <div className="fixed-header">
        <div className={`fixed-header-item`}>
          <Link to={"/"}>
            <Hom />
            <p> Bosh sahifa </p>
          </Link>
        </div>

        <div className={`fixed-header-item`}>
          <Link>
            <Catalog />
            <p> Katalog </p>
          </Link>
        </div>
        <div className={`fixed-header-item`}>
          <Link to={"/cart"}>
            <span
              style={{ backgroundColor: pass > 0 ? "rgb(34, 35, 41)" : "" }}
            >
              {pass}
            </span>
            <CartsAll />
            <p> Savat </p>
          </Link>
        </div>
        <div className={`fixed-header-item`}>
          <Link to={"/wishes"}>
            <LIke />
            <p> Saralangan </p>
          </Link>
        </div>
        <div className={`fixed-header-item `}>
          <Link>
            <Kabenit />
            <p> Kabinet </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FixedHeader;
