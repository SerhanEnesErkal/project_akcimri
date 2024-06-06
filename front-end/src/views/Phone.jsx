import React, { useEffect, useState, useRef } from "react";
import "./Phone.css";
import Product from "../components/Product";
import axios from "axios";

const Phone = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    console.log("Fetching clusters...");

    axios
      .get("http://127.0.0.1:5000/clusters")
      .then((response) => {
        const clusters = response.data;
        const newCards = [];

        response.data.map((item) => {
          newCards.push({
            title: item[0].title,
            prices: item.map((i) => ({
              [i.market]: i.price,
            })),
          });
        });
        Object.keys(clusters).forEach((clusterKey) => {
          clusters[clusterKey].forEach((item) => {
            newCards.push({
              image:
                "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_135553926/fee_194_131_png/",
              title: item.title,
              prices: {
                [item.market]: item.price,
              },
            });
          });
        });

        setCards(newCards);
      })
      .catch((error) => {
        console.error("There was an error fetching the clusters!", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="container">
      <div className="contentProducts">
        {cards.map((card, index) => (
          <Product product={card} key={index} type="product" />
        ))}
      </div>
    </div>
  );
};

export default Phone;
