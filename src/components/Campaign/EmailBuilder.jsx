import React, { Suspense } from "react";
const Editor = React.lazy(() => import("../../Editor/Editor"));


const EmailBuilder = (props) => {
  const { isCloseBuilder, selectedEmailIndex, emailData, isNewCampaign, campaignData, setIsTemplate, setIsCloseBuilder } = props;

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
            <Editor
                selectedEmailIndex  = {selectedEmailIndex}
                emailData           = {emailData}
                campaignData        = {campaignData}
                isNewCampaign       = {isNewCampaign}
                setIsTemplate       = {setIsTemplate}
                setIsCloseBuilder   = {setIsCloseBuilder}
            />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default EmailBuilder;
