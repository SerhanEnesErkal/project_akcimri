import React, { useEffect } from "react";
import "./Product.css";
import n11 from "../assets/n11.png";
import trendyol from "../assets/trendyol.png";
import mediamarkt from "../assets/mediamarkt.png";

const marketIcons = {
  n11,
  trendyol,
  mediamarkt,
};

const Product = ({ product }) => {
  const { image, title, prices } = product;

  return (
    <div className="productCard">
      <div className="productImage">
        <img src={image} alt="product" />
      </div>
      <div className="productContainer">
        <p className="title">{title}</p>
        <div className="productPrice">
          {Object.keys(prices).map((market) => (
            <div className="productMarket" key={market}>
              <p className="price">EN UCUZ {prices[market]} ₺ </p>
              <img src={marketIcons[market]} alt={market} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
