import React, { useRef, useState } from "react";

import SettingsNav from "./SettingsNav";

import SmtpIcon from "../../components/Icons/SmtpIcon";
import EmailSettingsIcon from "../../components/Icons/EmailSettingsIcon";
import TooltipQuestionIcon from "../../components/Icons/TooltipQuestionIcon";
import DoubleAngleRightIcon from "../../components/Icons/DoubleAngleRightIcon";


export default function SmtpSettings() {
    const [sendingProtocol, setSendingProtocol] = useState('smtp');
    const [sendingFrequency, setSendingFrequency] = useState('set-own-frequency');

    //------get sending protocol-------
    const getSendingProtocol = (e) => {
        setSendingProtocol(e.target.value);
    }

    //------get sending frequency-------
    const getSendingFrequency = (e) => {
        setSendingFrequency(e.target.value);
    }

    return (
        <>
            <div className="mintmrm-settings-page">
                <div className="mintmrm-container">
                    <div className="mintmrm-settings">
                        <h2 class="conatct-heading">Settings</h2>

                        <div className="mintmrm-settings-wrapper">
                            <SettingsNav/>

                            <div className="settings-tab-content">
                                <div className="single-tab-content smtp-tab-content">
                                    <div className="tab-body">
                                        <header className="tab-header">
                                            <h4 className="title">
                                                <SmtpIcon />
                                                Smtp Settings
                                            </h4>
                                        </header>

                                        <div className="form-wrapper">
                                            <div className="form-group">
                                                <label htmlFor="sending-protocol">Sending Protocol</label>
                                                <select name="sending-protocol" id="sending-protocol" onClick={getSendingProtocol} >
                                                    <option value="smtp">SMTP</option>
                                                    <option value="web-server">Your web host / web server</option>
                                                    <option value="sendgrid">SendGrid</option>
                                                    <option value="amazonses">Amazon SES</option>
                                                </select>
                                            </div>

                                            <hr />

                                            {/* when sending protocol smtp selected */}
                                            {'smtp' === sendingProtocol &&
                                                <>
                                                    <div className="form-group top-align">
                                                        <label htmlFor="sending-frequency">Sending Frequency</label>

                                                        <div className="input-custom-wrapper">
                                                            <select name="sending-frequency" id="sending-frequency" className="mintmrm-mb-16" onClick={getSendingFrequency} >
                                                                <option value="set-own-frequency">I'll set my own frequency</option>
                                                                <option value="recommended">Recommended</option>
                                                            </select>

                                                            {'set-own-frequency' === sendingFrequency &&
                                                                <div className="pos-relative has-icon mintmrm-mb-16">
                                                                    <input type="number" name="frequency-number" min="0" />
                                                                    <EmailSettingsIcon />
                                                                </div>
                                                            }
                                                            
                                                            <select name="sending-time" id="sending-time">
                                                                <option value="every-5minutes">Every 5 minutes</option>
                                                                <option value="every-10minutes">Every 10 minutes</option>
                                                                <option value="every-30minutes">Every 30 minutes</option>
                                                                <option value="every-1hour">Every 1 hour</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="smtp-hostname">
                                                            SMTP Hostname
                                                            <span class="mintmrm-tooltip">
                                                                <TooltipQuestionIcon />
                                                                <p> Define behaviour of the form after submission </p>
                                                            </span>
                                                        </label>

                                                        <div className="input-custom-wrapper">
                                                            <input type="text" name="smtp-hostname" id="smtp-hostname" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="smtp-port"> SMTP Port </label>

                                                        <div className="input-custom-wrapper">
                                                            <input type="text" name="smtp-port" id="smtp-port" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="login"> Login</label>

                                                        <div className="input-custom-wrapper">
                                                            <input type="text" name="login" id="login" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="password">Password</label>

                                                        <div className="input-custom-wrapper">
                                                            <input type="password" name="password" id="password" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="secure-connection">Secure Connection</label>

                                                        <div className="input-custom-wrapper">
                                                            <select name="secure-connection" id="secure-connection">
                                                                <option value="no">No</option>
                                                                <option value="tls">TLS</option>
                                                                <option value="ssl">SSL</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <hr />

                                                    <div className="form-group">
                                                        <label htmlFor="authentication">
                                                            Authentication
                                                            <span class="mintmrm-tooltip">
                                                                <TooltipQuestionIcon />
                                                                <p> Define behaviour of the form after submission </p>
                                                            </span>
                                                        </label>

                                                        <div className="input-custom-wrapper">
                                                            <span className="mintmrm-radiobtn">
                                                                <input id="authentication-yes" type="radio" name="authentication" value="yes" checked />
                                                                <label for="authentication-yes">Yes</label>
                                                            </span>

                                                            <span className="mintmrm-radiobtn">
                                                                <input id="authentication-no" type="radio" name="authentication" value="no" />
                                                                <label for="authentication-no">No</label>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="form-group top-align">
                                                        <label htmlFor="spf-signature">
                                                            SPF Signature (Highly recommended!)
                                                            <span class="mintmrm-tooltip">
                                                                <TooltipQuestionIcon />
                                                                <p> Define behaviour of the form after submission </p>
                                                            </span>
                                                        </label>

                                                        <div className="input-custom-wrapper">
                                                            <p className="normal-text">SPF is set up in your DNS. Read your host's support documentation for more information.</p>
                                                        </div>
                                                    </div>

                                                    <div className="form-group send-test-email">
                                                        <label htmlFor="test-email">
                                                            Test the sending method
                                                            <span class="mintmrm-tooltip">
                                                                <TooltipQuestionIcon />
                                                                <p> Define behaviour of the form after submission </p>
                                                            </span>
                                                        </label>

                                                        <div className="input-custom-wrapper inline-field">
                                                            <input type="email" name="test-email" id="test-email" placeholder="admin@gmail.com" />
                                                            <button className="mintmrm-btn outline" type="button">
                                                                Send a test email
                                                                <DoubleAngleRightIcon/>
                                                                {/* <span className="mintmrm-loader"></span> */}
                                                            </button>
                                                        </div>
                                                    </div>

                                                </>
                                            }

                                        </div>
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
    );
}

