
import like from "../../assets/icons/lik.svg";
import liki from "../../assets/icons/lik.png";
import { useNavigate } from "react-router-dom";
import Model from "../model";
import { useState } from "react";

const ProductCard = (product) => {
  const { id, description, price, urls } = product;
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);
  const detailClose = () => {
    setDetail(null);
  };
  document.body.style.overflow = detail ? "hidden" : "auto";

  return (
    <>
      <div className="wrr">
        <img src={like} alt="" className={`lik`} />
        <img src={liki} alt="" className={`liki`} />

        <div onClick={() => setDetail(product)} className="clas">
          <div className="content">
            <div className="conimg">
              {urls?.slice(0, 1)?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Image not found"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://www.google.com/url?sa=i&url=https%3A%2F%2Flearn.onemonth.com%2Fwhat-is-a-404-page%2F&psig=AOvVaw3cjrFaOWgnjPpDTsIQgUgl&ust=1719375881933000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCn5bn09YYDFQAAAAAdAAAAABAE";
                  }}
                />
              ))}

            </div>
            <div className="conimg-itme">
              <p
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/product/${id}`)}
                className="bo"
                title={description}
              >
                {description}
              </p>
              <hr />
            </div>
          </div>
          <div className="xisobot">
            <div className="nar">
              <p className="narx11">
                <s>
                  {(+price.slice(0, 10) * 1.2).toString().slice(0, 10)} so'm
                </s>
              </p>
              <p className="narx12">{price.slice(0, 10)} so'm</p>
            </div>
          </div>
        </div>
      </div>
      {detail ? (
        <Model close={detailClose}>
          <Detail product={product} />
        </Model>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductCard;
