import "./index.scss";
import baho from "../../assets/icons/baho.svg";
import olovv from "../../assets/icons/olov.svg";
import haftaa from "../../assets/icons/hafta.png";
import likiia from "../../assets/icons/lik.png";
import like from "../../assets/icons/like.svg";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useEffect } from "react";
const AboutCards = ({ productData }) => {
  const { id, category, description, price, title, oldPrice, units, urls } =
    productData;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      {productData ? (
        <div>
          <div className="tavar">
            <div className="img-Itme">
              {Array(3)
                .fill("")
                ?.map((_, index) => (
                  <img
                    key={index}
                    className="imglist"
                    src={urls[index]}
                    alt="Note not found"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg";
                    }}
                  />
                ))}
            </div>
            <div className="imgscrool">
              <div className="imgsledr"></div>
              <img
                className="imglist"
                src={urls[0]}
                alt="Note not found"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg";
                }}
              />
            </div>
            <div className="tavar2">
              <div className="baho">
                <img src={baho} alt="" />
                <p>
                  4.9 (
                  <abbr title="">
                    <span>405 baho</span>
                  </abbr>
                  )<span className="sapan">21000 ta buyurtma</span>
                </p>
                <p className="istak">
                  <img src={like} alt="" className={`lik`} />
                  <img src={likiia} alt="" className={`liki`} />
                  <span> Istaklarga</span>
                </p>
              </div>
              <p className="title">{description}</p>
              <div className="sot">
                <p className="sot1">Sotuvchi: </p>
                <p className="sot2">
                  <u>{title}</u>
                </p>
              </div>
              <div className="yetkaz">
                <p className="yet1">Yetkazib berish:</p>
                <p className="yet2">1 kun, bepul</p>
              </div>
              <hr />
              <div className="miqdor">
                <p className="miq">Miqdor:</p>
                <div className="miqdor-itme">
                  <div className="inc">
                    <button className="incc">
                      <GoPlus />
                    </button>
                    <p className="res">{1}</p>
                    <button className="dic">
                      <FiMinus />
                    </button>
                  </div>
                  <div className="mimg">
                    <img src={olovv} alt="" /> <p>Sotuvda {10} dona bor</p>
                  </div>
                </div>
              </div>
              <div className="narx">
                <p className="narx1">Narx:</p>
                <div className="narx-itme">
                  <h3>{price} so'm</h3>
                  <p>
                    <s>{oldPrice} so'm</s>
                  </p>
                  <div className="chil">Chilla Bozor</div>
                </div>
              </div>
              <div className="oyiga">
                <div className="oyiga-itme">
                  <p>{`Oyiga ${price / 12} so'mdan`}</p>
                </div>
                <p className="o-p"> muddatli to'lov</p>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
              <div className="fxs">
                <button className="savatga">Savatga qo'shish</button>
                <button className="tugmani">
                  Tugmani 1 bosishda xarid qilish
                </button>
              </div>
              <div className="hafta">
                <img src={haftaa} alt="" />
                <p> Bu haftada kishi sotib oldi</p>
              </div>
            </div>
            <div className="narx111">
              <div className="narx-itme11">
                <p
                  className="narx12"
                  style={{ fontSize: "10px", textAlign: "center" }}
                >
                  Narx umumiy
                </p>
                <h3 style={{ color: "black", fontSize: "18px" }}>{} so'm</h3>
              </div>

              <div className="sav">Savatga</div>
            </div>
          </div>
          <hr className="hh" />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AboutCards;
