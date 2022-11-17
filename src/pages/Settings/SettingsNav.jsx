import { Link, useLocation } from "react-router-dom";

import SettingIcon from "../../components/Icons/SettingIcon";
import EmailSettingsIcon from "../../components/Icons/EmailSettingsIcon";
import EmailPendingIcon from "../../components/Icons/EmailPendingIcon";
import GeneralSettingIcon from "../../components/Icons/GeneralSettingIcon";
import WooCommerceIcon from "../../components/Icons/WooCommerceIcon";
import CustomFieldIcon from "../../components/Icons/CustomFieldIcon";
import SmtpIcon from "../../components/Icons/SmtpIcon";

export default function SettingsNav() {
    const location = useLocation();

    return (
        <div className="settings-navbar">
            <ul>
                <li>
                    <Link
                        className={`mintmrm-btn outline ${
                            location.pathname.includes("business")
                                ? "active"
                                : ""
                        }`}
                        to="/settings/business-info"
                    >
                        <SettingIcon />
                        Business Settings
                    </Link>
                </li>

                <li>
                    <Link
                        className={`mintmrm-btn outline ${
                            location.pathname.includes("email") ? "active" : ""
                        }`}
                        to="/settings/email-settings"
                    >
                        <EmailSettingsIcon />
                        Email Settings
                    </Link>
                </li>
                <li>
                    <Link
                        className={`mintmrm-btn outline ${
                            location.pathname.includes("optin") ? "active" : ""
                        }`}
                        to="/settings/optin"
                    >
                        <EmailPendingIcon />
                        Double Opt-in Settings
                    </Link>
                </li>
                <li>
                    <Link
                        className={`mintmrm-btn outline ${
                            location.pathname.includes("general")
                                ? "active"
                                : ""
                        }`}
                        to="/settings/general"
                    >
                        <GeneralSettingIcon />
                        General Settings
                    </Link>
                </li>
                <li>
                    <Link
                        className={`mintmrm-btn outline ${
                            location.pathname.includes("woocommerce")
                                ? "active"
                                : ""
                        }`}
                        to="/settings/woocommerce"
                    >
                        <WooCommerceIcon />
                        WooCommerce settings
                    </Link>
                </li>
                <li>
                    <Link
                        className={`mintmrm-btn outline ${
                            location.pathname.includes("custom-field")
                                ? "active"
                                : ""
                        }`}
                        to="/settings/custom-field"
                    >
                        <CustomFieldIcon />
                        Contact Custom Field
                    </Link>
                </li>
                <li>
                    <Link
                        className={`mintmrm-btn outline ${
                            location.pathname.includes("smtp")
                                ? "active"
                                : ""
                        }`}
                        to="/settings/smtp"
                    >
                        <SmtpIcon />
                        Smtp
                    </Link>
                </li>
            </ul>
        </div>
    );
}
