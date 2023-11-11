// src/components/molecules/Popup.js
import React from "react";

const Popup = ({ onClose, title, content }) => (
  <div className="popup">
    <div className="popup-content">
      <span className="close-btn" onClick={onClose}>
        &times;
      </span>
      <h2>{title}</h2>
      {content}
    </div>
  </div>
);

export default Popup;
