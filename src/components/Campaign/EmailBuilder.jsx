import React, { useRef } from 'react';
import { render } from 'react-dom';

import EmailEditor from 'react-email-editor';
import {Link} from "react-router-dom";
import LeftArrow from "../Icons/LeftArrow";

const EmailBuilder = (props) => {
    const { isCloseBuilder, setIsCloseBuilder, setEmailBody, emailData, isOpen, setIsEmailBuilderOpen } = props;

    const emailEditorRef = useRef(null);

    const closeEmailBuilder = () => {
        emailEditorRef.current.editor.exportHtml((data) => {
            setEmailBody(data);
            setIsCloseBuilder("hide");
            setIsEmailBuilderOpen(false)
        });
    };

    return (
        <div
            style={{ display: isCloseBuilder }}
            className={
                props.isOpen && !isCloseBuilder
                    ? "mintmrm-template-alert-wrapper"
                    : "mintmrm-template-alert-wrapper"
            }
        >
            <div className="mrm-campaign-builder-navbar-wrapper">
                <div className="navbar-left-section">
                    <button className="back-button">
                        <Link to="" onClick={closeEmailBuilder}>
                          <LeftArrow />
                        </Link>
                    </button>
                </div>
                <EmailEditor
                    ref={emailEditorRef}
                    templateJSON={emailData?.email_json}
                />
            </div>
        </div>
    );
};

export default EmailBuilder;