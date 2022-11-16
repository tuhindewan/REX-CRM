import SettingsNav from "./SettingsNav";
import { useState } from "react";
import GeneralSettingIcon from "../../components/Icons/GeneralSettingIcon";
import TooltipQuestionIcon from "../../components/Icons/TooltipQuestionIcon";
export default function GeneralSettings() {
    const [selectOption, setSelectOption] = useState("message");
    const [selectSwitch, setSelectSwitch] = useState(true);
    const onChangeValue = (e) => {
        setSelectOption(e.target.value);
    };
    const handleSwitcher = () => {
        setSelectSwitch(!selectSwitch);
    };
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
                                            <GeneralSettingIcon />
                                            General Settings
                                        </h4>
                                    </header>

                                    <div className="form-wrapper">
                                        <div className="form-group">
                                            <label htmlFor="">
                                                Double Opt-In
                                                <span class="mintmrm-tooltip">
                                                    <TooltipQuestionIcon />
                                                    <p>
                                                        Define behaviour of the
                                                        form after submission
                                                    </p>
                                                </span>
                                            </label>
                                            <span className="mintmrm-switcher">
                                                <input
                                                    type="checkbox"
                                                    name="checkedB"
                                                    id="st"
                                                    value={selectSwitch}
                                                    onChange={handleSwitcher}
                                                    defaultChecked={
                                                        selectSwitch
                                                    }
                                                />
                                                <label htmlFor="st"></label>
                                            </span>
                                        </div>
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
