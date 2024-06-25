import React from "react";
import like from "../../assets/icons/lik.svg";
import liki from "../../assets/icons/lik.png";
import baho from "../../assets/icons/baho.svg";
import savat from "../../assets/icons/savat+.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Detail = ({ product }) => {
  const navigate = useNavigate();

  const { id, category, description, price, title, units, urls } = product;
  const swiperItem = urls?.map((image, inx) => (
    <SwiperSlide key={inx} className="slider__item">
      <img
        src={image}
        className="detail__image detail__image__swiper "
        alt="Image not found"
      />
    </SwiperSlide>
  ));
  return (
    <>
      <div className="wrr detail detail__content ">
        <img src={like} alt="" className={`lik `} />
        <img src={liki} alt="" className={`liki`} />
        <div className="clas">
          <div className="content">
            <div className="conimg">
              <Swiper
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper1"
              >
                {swiperItem}
              </Swiper>

              <div className="chibozor">Chilla Bozor</div>
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
              <div className="baho1">
                <img src={baho} alt="" />
                <p>
                  4.9 (
                  <abbr title="">
                    <span>405 baho</span>
                  </abbr>
                  )
                </p>
              </div>
              <div className="oyiga1">
                <p>
                  {(+price.slice(0, 10) / 12).toString().slice(0, 5)} so'm/oyiga
                </p>
              </div>
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

        <div className="sev">
          <img src={savat} alt="" />
        </div>
      </div>
    </>
  );
};

export default Detail;
