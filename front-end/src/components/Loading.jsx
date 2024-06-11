import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Verileri yükleniyor bu biraz zaman alabilir...</p>
    </div>
  );
};

export default Loading;
