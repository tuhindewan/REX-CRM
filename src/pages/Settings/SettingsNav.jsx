import SettingIcon from "../../components/Icons/SettingIcon";
import EmailIcon from "../../components/Icons/EmailIcon";
import EmailPendingIcon from "../../components/Icons/EmailPendingIcon";
import GeneralSettingIcon from "../../components/Icons/GeneralSettingIcon";
import WooCommerceIcon from "../../components/Icons/WooCommerceIcon";

export default function SettingsNav() {
    return (
        <div className="settings-navbar">
            <ul>
                <li className="mintmrm-btn single-link outline">
                    <SettingIcon/>
                    Business Settings
                </li>
                <li className="mintmrm-btn single-link outline">
                    <EmailIcon/>
                    Email Settings
                </li>
                <li className="mintmrm-btn single-link outline">
                    <EmailPendingIcon/>
                    Double Op-tin Settings
                </li>
                <li className="mintmrm-btn single-link outline">
                    <GeneralSettingIcon/>
                    General Settings
                </li>
                <li className="mintmrm-btn single-link outline">
                    <WooCommerceIcon/>
                    WooCommerce settings
                </li>
            </ul>
        </div>
    );
}
