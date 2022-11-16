import SettingIcon from "../../components/Icons/SettingIcon";
import EmailIcon from "../../components/Icons/EmailIcon";
import EmailSettingsIcon from "../../components/Icons/EmailSettingsIcon";
import EmailPendingIcon from "../../components/Icons/EmailPendingIcon";
import GeneralSettingIcon from "../../components/Icons/GeneralSettingIcon";
import WooCommerceIcon from "../../components/Icons/WooCommerceIcon";
import { Link, useLocation } from "react-router-dom";

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
                        Double Op-tin Settings
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
            </ul>
        </div>
    );
}
