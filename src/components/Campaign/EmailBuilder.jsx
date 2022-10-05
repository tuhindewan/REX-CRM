import React, { useRef, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import ComputerIcon from "../Icons/ComputerIcon";
import LeftArrow from "../Icons/LeftArrow";
import MobileIcon from "../Icons/MobileIcon";
import ThreeDotIcon from "../Icons/ThreeDotIcon";

const Editor = React.lazy(() => import("../../Editor/Editor"));


const EmailBuilder = (props) => {
  const { isCloseBuilder, setIsCloseBuilder, setEmailBody, emailData } = props;

  return (
    <>
      <div
        style={{ display: isCloseBuilder }}
        className={
          props.isOpen && !isCloseBuilder
            ? "mintmrm-template-alert-wrapper"
            : "mintmrm-template-alert-wrapper"
        }
      >
        <div className="email-builder-section" style={{ height: "100%" }}>
          <Suspense fallback={<div>Loading</div>}>
            <Editor/>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default EmailBuilder;
