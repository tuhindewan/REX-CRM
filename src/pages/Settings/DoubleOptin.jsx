import React from "react";
import SettingsNav from "./SettingsNav";
import EmailPendingIcon from "../../components/Icons/EmailPendingIcon";
import TooltipQuestionIcon from "../../components/Icons/TooltipQuestionIcon";

export default function DoubleOptin() {
    return (
        <>
            <div className="mintmrm-settings-page">
                <div className="mintmrm-container">
                    <div className="mintmrm-settings">
                        <h2 class="conatct-heading">Settings</h2>

                        <div className="mintmrm-settings-wrapper">
                            <SettingsNav />

                            <div className="settings-tab-content">
                                <div className="single-tab-content business-tab-content">
                                    <div className="tab-body">
                                        <header className="tab-header">
                                            <h4 className="title">
                                                <EmailPendingIcon />
                                                Double Opt-In Settings
                                            </h4>
                                        </header>

                                        <div className="form-wrapper">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Double Opt-In
                                                    <span class="mintmrm-tooltip">
                                                        <TooltipQuestionIcon />
                                                        <p>
                                                            Define behaviour of
                                                            the form after
                                                            submission
                                                        </p>
                                                    </span>
                                                </label>
                                                <span className="mintmrm-switcher">
                                                    <input
                                                        type="checkbox"
                                                        name="checkedB"
                                                        id="st"
                                                    />
                                                    <label htmlFor="st"></label>
                                                </span>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Email Subject
                                                    <span class="mintmrm-tooltip">
                                                        <TooltipQuestionIcon />
                                                        <p>
                                                            Define behaviour of
                                                            the form after
                                                            submission
                                                        </p>
                                                    </span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email-subject"
                                                    placeholder="Enter Email Subject"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Email Body
                                                    <span class="mintmrm-tooltip">
                                                        <TooltipQuestionIcon />
                                                        <p>
                                                            Define behaviour of
                                                            the form after
                                                            submission
                                                        </p>
                                                    </span>
                                                </label>
                                                <textarea
                                                    rows="4"
                                                    placeholder="Enter Email Body"
                                                ></textarea>
                                            </div>
                                            <hr></hr>
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    After Confirmation Type
                                                    <span class="mintmrm-tooltip">
                                                        <TooltipQuestionIcon />
                                                        <p>
                                                            Define behaviour of
                                                            the form after
                                                            submission
                                                        </p>
                                                    </span>
                                                </label>
                                                <span className="mintmrm-radiobtn">
                                                    <input
                                                        id="show-message"
                                                        type="radio"
                                                        name="message-redirect"
                                                        checked
                                                    />
                                                    <label for="show-message">
                                                        Show Message
                                                    </label>
                                                </span>
                                                <span className="mintmrm-radiobtn">
                                                    <input
                                                        id="redirect-url"
                                                        type="radio"
                                                        name="message-redirect"
                                                    />
                                                    <label for="redirect-url">
                                                        Redirect to an URL
                                                    </label>
                                                </span>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Email Subject
                                                    <span class="mintmrm-tooltip">
                                                        <TooltipQuestionIcon />
                                                        <p>
                                                            Define behaviour of
                                                            the form after
                                                            submission
                                                        </p>
                                                    </span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email-subject"
                                                    placeholder="Enter Email Subject"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-footer">
                                        <button
                                            className="mintmrm-btn"
                                            type="button"
                                        >
                                            Save Settings
                                            <span className="mintmrm-loader"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* end settings-tab-content */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
