import React, { useEffect, useState } from "react";
import ins from "../../assets/icons/ins.svg";
import tel from "../../assets/icons/tel.svg";
import yout from "../../assets/icons/yo.svg";
import fas from "../../assets/icons/fas.svg";
import pas from "../../assets/icons/pas.svg";
import "./index.scss";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const navigation = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const click = () => {
    setIsActive1(!isActive1);
    setIsActive2(false);
    setIsActive3(false);
  };
  const click1 = () => {
    setIsActive2(!isActive2);
    setIsActive1(false);
    setIsActive3(false);
  };
  const click2 = () => {
    setIsActive3(!isActive3);
    setIsActive2(false);
    setIsActive1(false);
  };
  const handelSutuv = () => {
    try {
      const user = localStorage.getItem("user");
      const parsedUser = JSON.parse(user);
      if (parsedUser && parsedUser.email) {
        return navigation("/profil");
      }
    } catch (error) {
      console.error(error);
    }
    return navigation("/signup");
  };

  return (
    <div>
      <div className="bcon">
        <div className="b1" style={{ marginLeft: "0px" }}>
          <p>
            <b className="no" onClick={click}>
              Biz haqimizda{" "}
              <img
                src={pas}
                alt=""
                className={`noimg ${isActive1 ? "active" : ""}`}
              />
            </b>
            <b className="no1">Biz haqimizda</b>
          </p>
          <div className={`vp ${isActive1 ? "active" : ""}`}>
            <p>Topshirish punktlari</p> <p>Vakansiyalar</p>
          </div>
          <div className="hr"></div>
        </div>
        <div className="b1">
          <p>
            <b className="no" onClick={click1}>
              Foydalanuvchilarga
              <img
                src={pas}
                alt=""
                className={`noimg ${isActive2 ? "active" : ""}`}
              />
            </b>
            <b className="no1">Foydalanuvchilarga</b>
          </p>
          <div className={`vp ${isActive2 ? "active1" : ""}`}>
            <p>Biz bilan bogʻlanish</p> <p>Savol-Javob</p>
          </div>
          <div className="hr"></div>
        </div>

        <div className="b1" id="tt">
          <p>
            <b className="no1">Tadbirkorlarga </b>
            <b className="no" onClick={click2}>
              Tadbirkorlarga
              <img
                src={pas}
                alt=""
                className={`noimg ${isActive3 ? "active" : ""}`}
              />
            </b>
          </p>
          <div className={`vp ${isActive3 ? "active2" : ""}`}>
            <p className="sotuv" onClick={handelSutuv}>
              Sotuvchi kabinetiga kirish
            </p>
          </div>
        </div>
        <div className="b2">
          <p>
            <b> Ilovani yuklab olish</b>
          </p>
          
          <div className="b3">
            <p>
              <b>Ijtimoiy Tarmoqlar</b>
            </p>
            <div className="imgg">
              <img src={ins} alt="" className="im1" />
              <img src={tel} alt="" className="im2" />
              <img src={yout} alt="" className="im3" />
              <img src={fas} alt="" className="im4" />
            </div>
          </div>
        </div>
      </div>
      <div className="bot"></div>
      <div className="bot1">
        <div className="pbb">
          <p className="bp1">Maxfiylik kelishuvi</p>
          <p className="bp2">Foydalanuvchi kelishuvi</p>
        </div>
        
      </div>
    
    </div>
  );
};

export default Footer;
