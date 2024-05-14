import { useNavigate } from "react-router-dom";
import "./Cards.css";

function Cards({ icon, title, text, route }) {
  const navigate = useNavigate();
  console.log(route);
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
