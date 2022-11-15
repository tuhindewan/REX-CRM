import React from "react";
import SettingsNav from "./SettingsNav";
import EmailPendingIcon from "../../components/Icons/EmailPendingIcon";

export default function DoubleOptin(){
    return(
        <>
        <div className="mintmrm-settings-page">
            <div className="mintmrm-container">
                <div className="mintmrm-settings">
                <h2 class="conatct-heading">Settings</h2>

                <div className="mintmrm-settings-wrapper">
                    <SettingsNav/>

                    <div className="settings-tab-content">
                    <div className="single-tab-content business-tab-content">
                        <div className="tab-body">
                            <header className="tab-header">
                                <h4 className="title">
                                    <EmailPendingIcon />
                                    Double Opt-In Settings
                                </h4>
                            </header>
                        </div>

                        <div className="tab-footer">
                        <button className="mintmrm-btn" type="button">
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
    )
}