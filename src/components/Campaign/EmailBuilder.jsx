import React, { Suspense } from "react";
const Editor = React.lazy(() => import("../../Editor/Editor"));

const EmailBuilder = (props) => {
  const {
    isCloseBuilder,
    selectedEmailIndex,
    emailData,
    isNewCampaign,
    campaignData,
    setIsTemplate,
    setIsCloseBuilder,
    refresh,
    setRefresh,
  } = props;
  return (
    <>
      <div
        style={{ display: isCloseBuilder }}
        className={
          props.isOpen && !isCloseBuilder
            ? "mintmrm-template-alert-wrapper email-builder-editor"
            : "mintmrm-template-alert-wrapper"
        }
      >
        <div className="email-builder-section" style={{ height: "100%" }}>
          <Suspense fallback={<div>Loading</div>}>
            {!isCloseBuilder && (
              <Editor
                selectedEmailIndex={selectedEmailIndex}
                emailData={emailData}
                campaignData={campaignData}
                isNewCampaign={isNewCampaign}
                setIsTemplate={setIsTemplate}
                setIsCloseBuilder={setIsCloseBuilder}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            )}
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default EmailBuilder;
