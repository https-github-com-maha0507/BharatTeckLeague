// src/components/atoms/Button.js
import React from "react";

const Button = ({ onClick, image, altText }) => (
  <button
    className="button"
    onClick={onClick}
    style={{ backgroundImage: `url(${image})` }}
    alt={altText}
  />
);

export default Button;
