import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useGlobalStore } from "../hooks/useGlobalStore";
import DashboardCard from "../components/Dashboard/DashboardCard";
import EmailDraftProgressBar from "../components/Dashboard/EmailDraftProgressBar";
import EmailSentProgressBar from "../components/Dashboard/EmailSentProgressBar";
// import PieChart from "../components/Dashboard/PieChart";

import TotalContactIcon from "../components/Icons/TotalContactIcon";
import TotalCampaignIcon from "../components/Icons/TotalCampaignIcon";
import TotalAutomationIcon from "../components/Icons/TotalAutomationIcon";
import TotalFormIcon from "../components/Icons/TotalFormIcon";
import DashboardOverview from "../components/Icons/DashboardOverview";
import DashboardAutomationPlaceholder from "../components/Icons/DashboardAutomationPlaceholder";
import ListenForOutsideClicks from "../components/ListenForOutsideClicks";

const Dashboard = () => {
    useGlobalStore.setState({
        hideGlobalNav: true,
    });

    const [draftPercentage, setDraftPercentage] = useState(10);
    const [sentPercentage, setSentPercentage] = useState(24);
    const [dateFilter, setDateFilter] = useState("Monthly");
    const [filterDropdown, setFilterDropdown] = useState(false);
    const [isCustomRange, setIsCustomRange] = useState(false);
    const [listening, setListening] = useState(false);
    const [filterItems, setFilterItems] = useState([
        { tile: "Weekly", id: "weekly" },
        { tile: "Monthly", id: "monthly" },
        { tile: "Yearly", id: "yearly" },
        { tile: "Custom Range", id: "custom-range" },
    ]);
    const filterRef = useRef(null);
    const [startDate, setStartDate] = useState(new Date());

    const handleFilter = () => {
        setFilterDropdown(!filterDropdown);
    };

    const handleSelect = (title, id) => {
        setDateFilter(title);
        id == "custom-range" ? setIsCustomRange(true) : setIsCustomRange(false);
    };
    useEffect(
        ListenForOutsideClicks(
            listening,
            setListening,
            filterRef,
            setFilterDropdown
        )
    );

    return (
        <div className="dashboard-page">
            <div className="mintmrm-container">
                <div className="dashboard-header">
                    <h1 class="dashboard-heading">Dashboard</h1>

                    <div className="filter-box">
                        <div
                            className={
                                isCustomRange
                                    ? "custom-date show"
                                    : "custom-date"
                            }
                        >
                            <div className="date-from">
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>

                            <div className="date-to">
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>

                        {/* <select name="" id="">
                            <option value="yearly">Yearly</option>
                            <option value="monthly">Monthly</option>
                            <option value="weekly">Weekly</option>
                            <option value="custom">Custom</option>
                        </select> */}
                        <div ref={filterRef}>
                            <button
                                className={
                                    filterDropdown
                                        ? "drop-down-button show"
                                        : "drop-down-button"
                                }
                                onClick={handleFilter}
                            >
                                {dateFilter}
                            </button>
                            <ul
                                className={
                                    filterDropdown
                                        ? "mintmrm-dropdown show"
                                        : "mintmrm-dropdown"
                                }
                            >
                                {filterItems.map((item, index) => (
                                    <li
                                        onClick={() =>
                                            handleSelect(item.tile, item.id)
                                        }
                                    >
                                        {item.tile}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card-wrapper">
                    <DashboardCard
                        source={<TotalContactIcon />}
                        cardTitle="Total Contacts"
                        totalAmount="580"
                        rate="increase"
                        rateAmount="+1.50"
                        name="Contact"
                        route="/contacts/create"
                    />
                    <DashboardCard
                        source={<TotalCampaignIcon />}
                        cardTitle="Total Campaigns"
                        totalAmount="63"
                        rate="decrease"
                        rateAmount="-0.47"
                        name="Campaign"
                        route="/campaigns/create"
                    />
                    <DashboardCard
                        source={<TotalAutomationIcon />}
                        cardTitle="Total Automation"
                        totalAmount="5790"
                        rate="increase"
                        rateAmount="+0.75"
                        name="Automation"
                        route=""
                    />
                    <DashboardCard
                        source={<TotalFormIcon />}
                        cardTitle="Forms"
                        totalAmount="580"
                        rate="decrease"
                        rateAmount="-0.47"
                        name="Form"
                        route="/form-builder/"
                    />
                </div>

                <hr className="dashboard-divider" />

                <div className="dashboard-content-wrapper">
                    <div className="single-stat-box box-col-8 analytics coming-soon-overlay">
                        <DashboardOverview />
                    </div>

                    <div className="single-stat-box box-col-4 email-campaign">
                        <header className="box-header">
                            <h4 className="header-title">Email Campaigns</h4>

                            <div className="filter-box">
                                <select name="" id="">
                                    <option value="yearly">Yearly</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="custom">Custom</option>
                                </select>
                            </div>
                        </header>

                        <div className="email-campaign-stats">
                            <EmailDraftProgressBar
                                strokeWidth="10"
                                sqSize="200"
                                percentage={draftPercentage}
                            />
                            <EmailSentProgressBar
                                strokeWidth="10"
                                sqSize="130"
                                percentage={sentPercentage}
                            />
                        </div>

                        <div className="stat-indicator">
                            <span className="sent">Sent</span>
                            <span className="draft">Drafts</span>
                        </div>
                    </div>

                    <div className="single-stat-box box-col-4 contact">
                        <header className="box-header">
                            <h4 className="header-title">Contact</h4>

                            <div className="filter-box">
                                <select name="" id="">
                                    <option value="">Yearly</option>
                                    <option value="">Monthly</option>
                                    <option value="">Weekly</option>
                                    <option value="">Custom</option>
                                </select>
                            </div>
                        </header>

                        {/* <PieChart /> */}
                    </div>
                    
                    <div className="single-stat-box box-col-8 automation coming-soon-overlay">
                        <DashboardAutomationPlaceholder />
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default Dashboard;
