import { useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";

function App() {
  useEffect(() => {
    console.log("Fetching");
  }, []);
  let cards = [
    {
      icon: "fa-solid fa-mobile-screen-button",
      title: "Telefon",
      text: "En ucuz telefon fırsatları",
      route: "/phone",
    },
    {
      icon: "fa-solid fa-tablet-screen-button",
      title: "Tablet",
      text: "En ucuz tablet fırsatları",
      route: "/tablet",
    },
    {
      icon: "fa-solid fa-laptop",
      title: "Bilgisayar",
      text: "En ucuz bilgisayar fırsatları",
      route: "/laptop",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="content">
          {cards.map((card, index) => {
            return (
              <Cards
                icon={card.icon}
                title={card.title}
                text={card.text}
                route={card.route}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
