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
      <div>
        <div className="header">
          <div className="left-header">
            <h1>AKCİMRİ</h1>
            <i class="fa-solid fa-turkish-lira-sign md-36"></i>
          </div>
          <div className="search">
            <input type="text" />
            <button type="button">
              <i className="fa-solid fa-search"></i>
            </button>
          </div>
        </div>
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
      </div>
    </>
  );
}

export default App;
