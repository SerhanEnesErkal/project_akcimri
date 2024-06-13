import React, { useEffect, useState } from "react";
import "./Phone.css";
import Product from "../components/Product";
import axios from "axios";
import Loading from "../components/Loading";

const Phone = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    console.log("Fetching clusters...");

    axios
      .get("http://127.0.0.1:5000/phone")
      .then((response) => {
        const clusters = response.data;
        console.log(clusters);

        const newCards = [];

        Object.keys(clusters).forEach((clusterKey) => {
          const items = clusters[clusterKey];
          items.forEach((item) => {
            const existingCardIndex = newCards.findIndex(
              (card) => card.title === item.title
            );
            if (existingCardIndex >= 0) {
              newCards[existingCardIndex].prices[item.market] = item.price;
            } else {
              newCards.push({
                image:
                  "https://cdn.pixabay.com/photo/2017/05/01/20/55/smartphone-2276649_1280.png",
                title: item.title,
                prices: {
                  [item.market]: item.price,
                },
              });
            }
          });
        });

        setCards(newCards);
      })
      .catch((error) => {
        console.error("There was an error fetching the clusters!", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="contentProducts">
        {cards.length === 0 && <Loading />}
        {cards.map((card, index) => (
          <Product product={card} key={index} type="product" />
        ))}
      </div>
    </div>
  );
};

export default Phone;
