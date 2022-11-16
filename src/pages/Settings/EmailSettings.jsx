import React from "react";
import SettingsNav from "./SettingsNav";
import EmailSettingsIcon from "../../components/Icons/EmailSettingsIcon";
import TooltipQuestionIcon from "../../components/Icons/TooltipQuestionIcon";

export default function EmailSettings() {
    return (
        <div className="mintmrm-settings-page">
            <div className="mintmrm-container">
                <div className="mintmrm-settings">
                    <h2 class="conatct-heading">Settings</h2>

                    <div className="mintmrm-settings-wrapper">
                        <SettingsNav />

                        <div className="settings-tab-content">
                            <div className="single-tab-content email-tab-content">
                                <div className="tab-body">
                                    <header className="tab-header">
                                        <h4 className="title">
                                            <EmailSettingsIcon />
                                            Email Settings
                                        </h4>
                                    </header>

                                    <div className="form-wrapper">
                                        <div className="form-group">
                                            <label htmlFor="from-name">
                                                Form Name
                                                <span class="mintmrm-tooltip">
                                                    <TooltipQuestionIcon />
                                                    <p>
                                                        Define behaviour of the
                                                        form after submission
                                                    </p>
                                                </span>
                                            </label>
                                            <input
                                                id="from-name"
                                                type="text"
                                                name="from-name"
                                                placeholder="Enter From Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="from-email">
                                                Form Email
                                                <span class="mintmrm-tooltip">
                                                    <TooltipQuestionIcon />
                                                    <p>
                                                        Define behaviour of the
                                                        form after submission
                                                    </p>
                                                </span>
                                            </label>
                                            <input
                                                id="from-email"
                                                type="email"
                                                name="from-email"
                                                placeholder="Enter From Email"
                                            />
                                        </div>
                                        <hr></hr>
                                        <div className="form-group">
                                            <label htmlFor="reply-to-name">
                                                Reply-to Name
                                                <span class="mintmrm-tooltip">
                                                    <TooltipQuestionIcon />
                                                    <p>
                                                        Define behaviour of the
                                                        form after submission
                                                    </p>
                                                </span>
                                            </label>
                                            <input
                                                id="reply-to-name"
                                                type="text"
                                                name="reply-to-name"
                                                placeholder="Enter Reply-to Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="reply-to-email">
                                                Reply-to Email
                                                <span class="mintmrm-tooltip">
                                                    <TooltipQuestionIcon />
                                                    <p>
                                                        Define behaviour of the
                                                        form after submission
                                                    </p>
                                                </span>
                                            </label>
                                            <input
                                                id="reply-to-email"
                                                type="email"
                                                name="reply-to-email"
                                                placeholder="Enter Reply-to Email"
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
    );
}
