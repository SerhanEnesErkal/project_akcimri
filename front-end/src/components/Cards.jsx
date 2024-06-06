import { useNavigate } from "react-router-dom";
import "./Cards.css";

function Cards({ icon, image, title, text, route, type, price }) {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={route ? () => navigate(route) : null}>
      <div className="icon">
        <i className={`material-icons md-36 ${icon}`}></i>
      </div>
      <p className="title">{title}</p>
      <p className="text">{text}</p>
    </div>
  );
}
export default Cards;
