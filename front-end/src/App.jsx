import "./App.css";
import axios from "axios";
import Cards from "./components/Cards.jsx";

function App() {
  axios.get("http://127.0.0.1:80/").then((response) => {
    console.log(response);
  });
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
      route: "/computer",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="content">
          {cards.map((card, index) => {
            console.log(card);
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
