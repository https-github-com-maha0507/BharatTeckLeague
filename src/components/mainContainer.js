// src/components/MainContainer.js
import React, { useState } from "react";
import Button from "./../atoms/button";
import Popup from "./../molecules/popup";

const MainContainer = () => {
  const [popupContent, setPopupContent] = useState(null);

  const openPopup = (title) => {
    // Set the appropriate content based on the title (ATL or HTL)
    setPopupContent(<p>Content for {title}</p>);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <div>
      <div className="container">
        <Button
          onClick={() => openPopup("ATL")}
          image="atl_image.jpg"
          altText="ATL"
        />
        <Button
          onClick={() => openPopup("HTL")}
          image="htl_image.jpg"
          altText="HTL"
        />
      </div>

      {popupContent && (
        <Popup
          onClose={closePopup}
          title="Popup Title"
          content={popupContent}
        />
      )}
    </div>
  );
};

export default MainContainer;
