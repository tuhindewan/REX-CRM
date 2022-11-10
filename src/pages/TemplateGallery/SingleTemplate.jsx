import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function SingleTemplate(props) {

  const {id, title, featured_image} = props.template;
  const {onImportTemplate} = props;

  const templateBgImage = {
    backgroundImage: 'url('+featured_image+')',
  }

  return (
    <>
      <div className="mintmrm-single-template">
        <div className="mintmrm-single-remote-wrapper">
          <div className="mintmrm-single-remote-template">
            <div className="hoverlay">
              <button type="button" className="select-this mintmrm-btn" onClick={() => onImportTemplate(id)}>Select</button>
            </div>
            <div className="template-image-wrapper" style={templateBgImage} > 
              <img src={featured_image} alt="contact-author-img" />
            </div>
          </div>

          <div className="template-info">
            <span className="title">{title}</span>
          </div>
        </div>

      </div>

    </>
  );
}
