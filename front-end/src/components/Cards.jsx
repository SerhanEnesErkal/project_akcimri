import { useNavigate } from "react-router-dom";
import "./Cards.css";

function Cards({ icon, image, title, text, route, type, price }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (route) {
      navigate(route, { state: { param: route } }); // title'ı param olarak gönderiyoruz
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="icon">
        <i className={`material-icons md-36 ${icon}`}></i>
      </div>
      <p className="title">{title}</p>
      <p className="text">{text}</p>
    </div>
  );
}

export default Cards;
