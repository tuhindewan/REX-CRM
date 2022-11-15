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
                <li className={`mintmrm-btn ${
              location.pathname.includes("business") ? "" : "outline"
            }`}>
                    <Link to="/settings/business-info">
                        <SettingIcon />
                        Business Settings
                    </Link>
                </li>

                <li className={`mintmrm-btn ${
              location.pathname.includes("email") ? "" : "outline"
            }`}>
                    <Link to="/settings/email-settings">
                        <EmailSettingsIcon />
                        Email Settings
                    </Link>
                </li>
                <li className={`mintmrm-btn ${
              location.pathname.includes("optin") ? "" : "outline"
            }`}>
                    <Link to="/settings/optin">
                        <EmailPendingIcon />
                        Double Op-tin Settings
                    </Link>
                </li>
                <li className={`mintmrm-btn ${
              location.pathname.includes("general") ? "" : "outline"
            }`}>
                    <Link to="/settings/general">
                        <GeneralSettingIcon />
                        General Settings
                    </Link>
                </li>
                <li className={`mintmrm-btn ${
              location.pathname.includes("woocommerce") ? "" : "outline"
            }`}>
                    <Link to="/settings/woocommerce">
                        <WooCommerceIcon />
                        WooCommerce settings
                    </Link>
                </li>
            </ul>
        </div>
    );
}
