import { useState } from "react";
import { useGetProductsQuery } from "../../redux/api/productApi";
import "./index.scss";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const { data } = useGetProductsQuery({ search: value });
  const handelSabmit = (e) => {
    e.preventDefault();
  };
  console.log(data?.data?.products);

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="16"
      viewBox="0 0 512 512"
    >
      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
    </svg>
  );
  const search = (
    <svg
      data-v-43bd1034=""
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ui-icon  return-icon"
    >
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M15.8106 20.4983C16.0857 20.1887 16.0579 19.7146 15.7483 19.4394L7.8789 12L15.7483 4.56055C16.0579 4.28536 16.0857 3.81131 15.8106 3.50172C15.5354 3.19213 15.0613 3.16425 14.7517 3.43944L6.25173 11.4394C6.09161 11.5818 6 11.7858 6 12C6 12.2142 6.09161 12.4182 6.25173 12.5605L14.7517 20.5605C15.0613 20.8357 15.5354 20.8079 15.8106 20.4983Z"
        fill="black"
      ></path>
    </svg>
  );

  return (
    <div className={`search_container `}>
      <form className="nav-form" onSubmit={handelSabmit}>
        <span className="search_ico">{search}</span>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Mahsulotlar va turkumlarini izlash"
          className="nav-item-input"
        />
        <button className="btn" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
      </form>
      {value.trim() ? (
        <div className="search-result">
          {data?.data?.products?.map((item, index) => (
            <>
              <div key={index}>
                <p
                  onClick={() => {
                    navigate(`/product/${item?.id}`), setValue("");
                  }}
                  className="result_p"
                >
                  <span className="svg_serch">{svg} </span>
                  {item?.title.slice(0, 50) + "..."}
                </p>
              </div>
              <div className="serach__line"></div>
            </>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Search;
