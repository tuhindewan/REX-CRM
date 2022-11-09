import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function SingleTemplate() {

  return (
    <>
      <div className="mintmrm-single-template">
        <div className="mintmrm-single-remote-wrapper">
          <div className="mintmrm-single-remote-template">
            <div className="hoverlay">
              <button type="button" className="select-this mintmrm-btn">Select</button>
            </div>
            <div className="template-image-wrapper"> </div>
          </div>

          <div className="template-info">
            <span className="title">Sunglasses</span>
          </div>
        </div>

      </div>

    </>
  );
}
