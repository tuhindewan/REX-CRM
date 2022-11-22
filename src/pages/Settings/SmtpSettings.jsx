import React, {useEffect, useRef, useState} from "react";

import SettingsNav from "./SettingsNav";

import SmtpIcon from "../../components/Icons/SmtpIcon";
import EmailSettingsIcon from "../../components/Icons/EmailSettingsIcon";
import TooltipQuestionIcon from "../../components/Icons/TooltipQuestionIcon";
import DoubleAngleRightIcon from "../../components/Icons/DoubleAngleRightIcon";
import {ClearNotification} from "../../utils/admin-notification";
import SuccessfulNotification from "../../components/SuccessfulNotification";
import {AdminNavMenuClassChange} from "../../utils/admin-settings";

export default function SmtpSettings() {
    // Admin active menu selection
    AdminNavMenuClassChange("mrm-admin", "settings");
    const [sendingProtocol, setSendingProtocol] = useState('smtp');
    const [sendingFrequency, setSendingFrequency] = useState('recommended');
    const [frequencyInterval, setFrequencyInterval] = useState('5');
    const [host, setHost] = useState('');
    const [port, setPort] = useState('');
    const [secured, setSecured] = useState(true);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [smtpAuthentication, setSMTPAuthentication] = useState('yes');
    const [sendgridAPI, setSendgridAPI] = useState('');
    const [amazonSESRegion, setAmazonSESRegion] = useState('us-west-2');
    const [amazonSESAccessKey, setAmazonSESAccessKey] = useState('');
    const [amazonSESSecretKey, setAmazonSESSecretKey] = useState('');
    const [testEmail, setTestEmail] = useState('');
    const [loading, setLoader] = useState(false);
    const [showNotification, setShowNotification] = useState("none");
    const [notificationType, setNotificationType] = useState("success");
    const [message, setMessage] = useState("");


    //------get sending protocol-------
    const getSendingProtocol = (e) => {
        setSendingProtocol(e.target.value);
    }

    //------get sending frequency-------
    const getSendingFrequency = (e) => {
        setSendingFrequency(e.target.value);
    }

    //------get frequency interval-------
    const getFrequencyInterval = (e) => {
        setFrequencyInterval(e.target.value);
    }

    //------get host-------
    const getHost = (e) => {
        setHost(e.target.value);
    }

    //------get port-------
    const getPort = (e) => {
        setPort(e.target.value);
    }

    //------get secured-------
    const getSecured = (e) => {
        setSecured(e.target.value);
    }

    //------get login-------
    const getLogin = (e) => {
        setLogin(e.target.value);
    }

    //------get password-------
    const getPassword = (e) => {
        setPassword(e.target.value);
    }

    //------get smtp authentication-------
    const getSMTPAuthentication = (e) => {
        setSMTPAuthentication(e.target.value);
    }

    //------get sendgrid api-------
    const getSendgridAPI = (e) => {
        setSendgridAPI(e.target.value);
    }

    //------get amazon ses access key-------
    const getAmazonSESAccessKey = (e) => {
        setAmazonSESAccessKey(e.target.value);
    }

    //------get amazon ses secret key-------
    const getAmazonSESSecretKey = (e) => {
        setAmazonSESSecretKey(e.target.value);
    }

    //------get amazon ses secret key-------
    const getAmazonSESRegion = (e) => {
        setAmazonSESRegion(e.target.value);
    }

    //------get test email-------
    const getTestEmail = (e) => {
        setTestEmail(e.target.value);
    }

    // save all smtp settings data
    const saveSettings = async () => {
        let response = null;
        let settings;

        if ('smtp' === sendingProtocol) {
            settings = {
                'frequency': {
                    'type': sendingFrequency,
                    'interval': frequencyInterval
                },
                'host': host,
                'port': port,
                'secure': secured,
                'login': login,
                'password': password,
                'authentication': smtpAuthentication
            }
        }
        else if ('sendgrid' === sendingProtocol) {
            settings = {
                'frequency': {
                    'type': sendingFrequency,
                    'interval': frequencyInterval
                },
                'api_key': sendgridAPI
            }
        }
        else if ('amazonses' === sendingProtocol) {
            settings = {
                'frequency': {
                    'type': sendingFrequency,
                    'interval': frequencyInterval
                },
                'region': amazonSESRegion,
                'access_key': amazonSESAccessKey,
                'secret_key': amazonSESSecretKey
            }
        }

        let smtpSettingsData = {
            'method': sendingProtocol,
            'settings': settings,
            'test_email': testEmail
        };

        try {
            // create contact
            setLoader(true);
            response = await fetch(
                `${window.MRM_Vars.api_base_url}mrm/v1/settings/smtp`,
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(smtpSettingsData),
                }
            );
            const responseData = await response.json();

            if (200 === response.status) {
                setNotificationType("success");
                setShowNotification("block");
                setMessage(responseData?.message);
            } else if (false === responseData.success) {
                setNotificationType("warning");
                setShowNotification("block");
                setMessage(responseData?.message);
            }
            ClearNotification("none", setShowNotification);
        } catch (e) {
        } finally {
            setLoader(false);
        }
    };

    // fetch and set all smtp data
    useEffect(() => {
        const getSMTPData = async () => {
            const response = await fetch(
                `${window.MRM_Vars.api_base_url}mrm/v1/settings/smtp`
            );
            const jsonResponse = await response.json();

            if (true === jsonResponse.success) {
                setSendingProtocol(jsonResponse.method);
                setSendingFrequency(jsonResponse.settings.frequency.type);
                setFrequencyInterval(jsonResponse.settings.frequency.interval);
                setTestEmail(jsonResponse.test_email);

                if ('smtp' === jsonResponse.method) {
                    setSMTPSettings(jsonResponse.settings);
                } else if ('sendgrid' === jsonResponse.method) {
                    setSendgridSettings(jsonResponse.settings);
                } else if ('amazonses' === jsonResponse.method) {
                    setAmazonSESSettings(jsonResponse.settings);
                }
            }
        };
        getSMTPData()
    }, []);

    const setSMTPSettings = (settings) => {
        console.log(settings)
        setHost(settings.host);
        setPort(settings.port);
        setSecured(settings.secure);
        setLogin(settings.login);
        setPassword(settings.password);
        setSMTPAuthentication(settings.authentication);
    }

    const setSendgridSettings = (settings) => {
        setSendgridAPI(settings.api_key);
    }

    const setAmazonSESSettings = (settings) => {
        setAmazonSESRegion(settings.region);
        setAmazonSESAccessKey(settings.access_key);
        setAmazonSESSecretKey(settings.secret_key);
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
                                                <SmtpIcon/>
                                                SMTP Settings
                                            </h4>
                                        </header>

                                        <div className="form-wrapper">
                                            <div className="form-group">
                                                <label htmlFor="sending-protocol">
                                                    Sending Protocol
                                                </label>
                                                <select name="sending-protocol" id="sending-protocol"
                                                        onChange={getSendingProtocol}>
                                                    <option value="web_server"
                                                            selected={'web-server' === sendingProtocol}>Your web host /
                                                        web server
                                                    </option>
                                                    <option value="smtp" selected={'smtp' === sendingProtocol}>SMTP
                                                    </option>
                                                    <option value="sendgrid"
                                                            selected={'sendgrid' === sendingProtocol}>SendGrid
                                                    </option>
                                                    <option value="amazonses"
                                                            selected={'amazonses' === sendingProtocol}>Amazon SES
                                                    </option>
                                                </select>

                                            </div>

                                            <hr/>

                                            <div className="form-group top-align">
                                                <label htmlFor="sending-frequency">
                                                    Sending Frequency
                                                </label>

                                                <div className="input-custom-wrapper">
                                                    <select name="sending-frequency" id="sending-frequency"
                                                            className="mintmrm-mb-16"
                                                            onChange={getSendingFrequency}>
                                                        <option value="recommended"
                                                                selected={'recommended' === sendingFrequency}>Recommended
                                                        </option>
                                                        <option value="set-own-frequency"
                                                                selected={'set-own-frequency' === sendingFrequency}>I'll
                                                            set my own frequency
                                                        </option>
                                                    </select>

                                                    {"set-own-frequency" === sendingFrequency && (
                                                        <div className="pos-relative has-icon mintmrm-mb-16">
                                                            <input
                                                                type="number"
                                                                name="frequency-number"
                                                                min="0"
                                                            />
                                                            <EmailSettingsIcon/>
                                                        </div>
                                                    )}

                                                    <select name="sending-time" id="sending-time"
                                                            onChange={getFrequencyInterval}>
                                                        <option value="5"
                                                                selected={'5' === frequencyInterval}>Every 5
                                                            minutes
                                                        </option>
                                                        <option value="10"
                                                                selected={'10' === frequencyInterval}>Every 10
                                                            minutes
                                                        </option>
                                                        <option value="30"
                                                                selected={'30' === frequencyInterval}>Every 30
                                                            minutes
                                                        </option>
                                                        <option value="60"
                                                                selected={'60' === frequencyInterval}>Every 1
                                                            hour
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* when sending protocol "smtp" selected */}
                                            {"smtp" === sendingProtocol && (
                                                <>
                                                    <div className="form-group">
                                                        <label htmlFor="smtp-hostname">
                                                            SMTP Hostname
                                                            <span class="mintmrm-tooltip">
                                <TooltipQuestionIcon/>
                                <p>
                                  {" "}
                                    Define behaviour of the form after submission{" "}
                                </p>
                              </span>
                                                        </label>

                                                        <div className="input-custom-wrapper">
                                                            <input
                                                                type="text"
                                                                name="smtp-hostname"
                                                                id="smtp-hostname"
                                                                value={host}
                                                                onChange={getHost}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="smtp-port"> SMTP Port </label>

                                                        <div className="input-custom-wrapper">
                                                            <input
                                                                type="text"
                                                                name="smtp-port"
                                                                id="smtp-port"
                                                                value={port}
                                                                onChange={getPort}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="login"> Login</label>

                                                        <div className="input-custom-wrapper">
                                                            <input type="text" name="login" id="login" value={login}
                                                                   onChange={getLogin}/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="password">Password</label>

                                                        <div className="input-custom-wrapper">
                                                            <input
                                                                type="password"
                                                                name="password"
                                                                id="password"
                                                                value={password}
                                                                onChange={getPassword}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="secure-connection">
                                                            Secure Connection
                                                        </label>

                                                        <div className="input-custom-wrapper">
                                                            <select name="secure-connection" id="secure-connection"
                                                                    onChange={getSecured}>
                                                                <option value="no" selected={'no' === secured}>No
                                                                </option>
                                                                <option value="tls" selected={'tls' === secured}>TLS
                                                                </option>
                                                                <option value="ssl" selected={'ssl' === secured}>SSL
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <hr/>

                                                    <div className="form-group">
                                                        <label htmlFor="authentication">
                                                            Authentication
                                                            <span class="mintmrm-tooltip">
                                <TooltipQuestionIcon/>
                                <p>
                                  {" "}
                                    Define behaviour of the form after submission{" "}
                                </p>
                              </span>
                                                        </label>

                                                        <div className="input-custom-wrapper">
                              <span className="mintmrm-radiobtn">
                                <input
                                    id="authentication-yes"
                                    type="radio"
                                    name="authentication"
                                    value="yes"
                                    checked={"yes" === smtpAuthentication}
                                    onClick={getSMTPAuthentication}
                                />
                                <label for="authentication-yes">Yes</label>
                              </span>

                                                            <span className="mintmrm-radiobtn">
                                <input
                                    id="authentication-no"
                                    type="radio"
                                    name="authentication"
                                    value="no"
                                    checked={"no" === smtpAuthentication}
                                    onClick={getSMTPAuthentication}
                                />
                                <label for="authentication-no">No</label>
                              </span>
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                            {/* when sending protocol "sendgrid" selected */}
                                            {"sendgrid" === sendingProtocol && (
                                                <>
                                                    <div className="form-group top-align">
                                                        <label htmlFor="api-key"> API Key </label>

                                                        <div className="input-custom-wrapper">
                                                            <input type="text" name="api-key" id="api-key"
                                                                   value={sendgridAPI} onChange={getSendgridAPI}/>
                                                        </div>
                                                    </div>

                                                    <hr/>
                                                </>
                                            )}

                                            {/* when sending protocol "amazonses" selected */}
                                            {"amazonses" === sendingProtocol && (
                                                <>
                                                    <div className="form-group top-align">
                                                        <label htmlFor="region">
                                                            Region
                                                            <span class="mintmrm-tooltip">
                                <TooltipQuestionIcon/>
                                <p>
                                  {" "}
                                    Define behaviour of the form after submission{" "}
                                </p>
                              </span>
                                                        </label>

                                                        <div className="input-custom-wrapper">
                                                            <select name="region" id="region"
                                                                    onChange={getAmazonSESRegion}>
                                                                <option value="af-south-1"
                                                                        selected={"af-south-1" === amazonSESRegion}>
                                                                    Africa (Cape Town)
                                                                </option>
                                                                <option value="ap-east-1"
                                                                        selected={"ap-east-1" === amazonSESRegion}>
                                                                    Asia Pacific (Hong Kong)
                                                                </option>
                                                                <option value="ap-southeast-3"
                                                                        selected={"ap-southeast-3" === amazonSESRegion}>
                                                                    Asia Pacific (Jakarta)
                                                                </option>
                                                                <option value="ap-south-1"
                                                                        selected={"ap-south-1" === amazonSESRegion}>
                                                                    Asia Pacific (Mumbai)
                                                                </option>
                                                                <option value="ap-northeast-3"
                                                                        selected={"ap-northeast-3" === amazonSESRegion}>
                                                                    Asia Pacific (Osaka)
                                                                </option>
                                                                <option value="ap-southeast-1"
                                                                        selected={"ap-southeast-1" === amazonSESRegion}>
                                                                    Asia Pacific (Singapore)
                                                                </option>
                                                                <option value="ap-southeast-2"
                                                                        selected={"ap-southeast-2" === amazonSESRegion}>
                                                                    Asia Pacific (Sydney)
                                                                </option>
                                                                <option value="ap-northeast-1"
                                                                        selected={"ap-northeast-1" === amazonSESRegion}>
                                                                    Asia Pacific (Tokyo)
                                                                </option>
                                                                <option value="us-gov-east-1"
                                                                        selected={"us-gov-east-1" === amazonSESRegion}>
                                                                    AWS GovCloud (US-East)
                                                                </option>
                                                                <option value="us-gov-west-1"
                                                                        selected={"us-gov-west-1" === amazonSESRegion}>
                                                                    AWS GovCloud (US-West)
                                                                </option>
                                                                <option value="ca-central-1"
                                                                        selected={"ca-central-1" === amazonSESRegion}>
                                                                    Canada (Central)
                                                                </option>
                                                                <option value="eu-central-1"
                                                                        selected={"eu-central-1" === amazonSESRegion}>
                                                                    Europe (Frankfurt)
                                                                </option>
                                                                <option value="eu-west-1"
                                                                        selected={"eu-west-1" === amazonSESRegion}>
                                                                    Europe (Ireland)
                                                                </option>
                                                                <option value="eu-west-2"
                                                                        selected={"eu-west-2" === amazonSESRegion}>
                                                                    Europe (London)
                                                                </option>
                                                                <option value="eu-south-1"
                                                                        selected={"eu-south-1" === amazonSESRegion}>
                                                                    Europe (Milan)
                                                                </option>
                                                                <option value="eu-west-3"
                                                                        selected={"eu-west-3" === amazonSESRegion}>
                                                                    Europe (Paris)
                                                                </option>
                                                                <option value="eu-south-2"
                                                                        selected={"eu-south-2" === amazonSESRegion}>
                                                                    Europe (Spain)
                                                                </option>
                                                                <option value="eu-north-1"
                                                                        selected={"eu-north-1" === amazonSESRegion}>
                                                                    Europe (Stockholm)
                                                                </option>
                                                                <option value="eu-central-2"
                                                                        selected={"eu-central-2" === amazonSESRegion}>
                                                                    Europe (Zurich)
                                                                </option>
                                                                <option value="me-south-1"
                                                                        selected={"me-south-1" === amazonSESRegion}>
                                                                    Middle East (Bahrain)
                                                                </option>
                                                                <option value="me-central-1"
                                                                        selected={"me-central-1" === amazonSESRegion}>
                                                                    Middle East (UAE)
                                                                </option>
                                                                <option value="sa-east-1"
                                                                        selected={"sa-east-1" === amazonSESRegion}>
                                                                    MSouth America (São Paulo)
                                                                </option>
                                                                <option value="us-east-1"
                                                                        selected={"us-east-1" === amazonSESRegion}>
                                                                    US East (N. Virginia)
                                                                </option>
                                                                <option value="us-east-2"
                                                                        selected={"us-east-2" === amazonSESRegion}>
                                                                    US East (Ohio)
                                                                </option>
                                                                <option value="us-west-1"
                                                                        selected={"us-west-1" === amazonSESRegion}>
                                                                    US West (N. California)
                                                                </option>
                                                                <option value="us-west-2"
                                                                        selected={"us-west-2" === amazonSESRegion}>
                                                                    US West (Oregon)
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="form-group top-align">
                                                        <label htmlFor="access-key">Access Key</label>

                                                        <div className="input-custom-wrapper">
                                                            <input
                                                                type="text"
                                                                name="access-key"
                                                                id="access-key"
                                                                value={amazonSESAccessKey}
                                                                onChange={getAmazonSESAccessKey}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="form-group top-align">
                                                        <label htmlFor="secret-key">Secret Key</label>

                                                        <div className="input-custom-wrapper">
                                                            <input
                                                                type="password"
                                                                name="secret-key"
                                                                id="secret-key"
                                                                value={amazonSESSecretKey}
                                                                onChange={getAmazonSESSecretKey}
                                                            />
                                                        </div>
                                                    </div>

                                                    <hr/>
                                                </>
                                            )}


                                            <div className="form-group top-align">
                                                <label htmlFor="spf-signature">
                                                    SPF Signature (Highly recommended!)
                                                    <span className="mintmrm-tooltip">
                                <TooltipQuestionIcon/>
                                <p>
                                  {" "}
                                    Define behaviour of the form after submission{" "}
                                </p>
                              </span>
                                                </label>

                                                <div className="input-custom-wrapper">
                                                    <p className="normal-text">
                                                        SPF is set up in your DNS. Read your host's
                                                        support documentation for more information.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="form-group send-test-email">
                                                <label htmlFor="test-email">
                                                    Test the sending method
                                                    <span className="mintmrm-tooltip">
                                <TooltipQuestionIcon/>
                                <p>
                                  {" "}
                                    Define behaviour of the form after submission{" "}
                                </p>
                              </span>
                                                </label>

                                                <div className="input-custom-wrapper inline-field">
                                                    <input
                                                        type="email"
                                                        name="test-email"
                                                        id="test-email"
                                                        placeholder="admin@gmail.com"
                                                        value={testEmail}
                                                        onChange={getTestEmail}
                                                    />
                                                    <button
                                                        className="mintmrm-btn outline"
                                                        type="button"
                                                    >
                                                        Send a test email
                                                        <DoubleAngleRightIcon/>
                                                        {/* <span className="mintmrm-loader"></span> */}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-footer">
                                        <button className="mintmrm-btn" type="button" onClick={saveSettings}>
                                            Save Settings
                                            <span className={loading ? "mintmrm-loader" : ""}></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* end settings-tab-content */}
                        </div>
                    </div>
                    <SuccessfulNotification
                        display={showNotification}
                        setShowNotification={setShowNotification}
                        message={message}
                        notificationType={notificationType}
                        setNotificationType={setNotificationType}
                    />
                </div>
            </div>
        </>
    );
}
