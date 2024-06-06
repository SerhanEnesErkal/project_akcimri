import React, { useEffect, useState } from "react";
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
        console.log(clusters); // Veriyi konsola yazdır

        const newCards = [];

        Object.keys(clusters).forEach((clusterKey) => {
          const items = clusters[clusterKey];
          items.forEach((item) => {
            const existingCardIndex = newCards.findIndex(
              (card) => card.title === item.title
            );
            if (existingCardIndex >= 0) {
              // Eğer aynı başlıkla bir kart varsa, fiyatı güncelle
              newCards[existingCardIndex].prices[item.market] = item.price;
            } else {
              // Yeni kart ekle
              newCards.push({
                image:
                  "https://i02.appmifile.com/527_operator_tr/29/11/2023/5290fd679b857712e12a9b90057b86d1!500x500.png",
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
