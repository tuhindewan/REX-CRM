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
    const [dateCampaignFilter, setDateCampaignFilter] = useState("Monthly");
    const [dateContactFilter, setDateContactFilter] = useState("Monthly");
    const [filterDropdown, setFilterDropdown] = useState(false);
    const [filterCampaignDropdown, setFilterCampaignDropdown] = useState(false);
    const [filterContactDropdown, setFilterContactDropdown] = useState(false);
    const [isCustomRange, setIsCustomRange] = useState(false);
    const [dateFromDropdown, setDateFromDropdown] = useState(false);
    const [dateToDropdown, setDateToDropdown] = useState(false);
    const [listening, setListening] = useState(false);
    const [filterItems, setFilterItems] = useState([
        { tile: "Weekly", id: "weekly" },
        { tile: "Monthly", id: "monthly" },
        { tile: "Yearly", id: "yearly" },
        { tile: "Custom Range", id: "custom-range" },
    ]);
    const filterRef = useRef(null);
    const filterCampaignRef = useRef(null);
    const filterContactRef = useRef(null);
    const dateFromRef = useRef(null);
    const dateToRef = useRef(null);
    const [startDate, setStartDate] = useState(new Date());

    const handleFilter = () => {
        setFilterDropdown(!filterDropdown);
        setDateFromDropdown(false);
    };
    const handleCampaignFilter = () => {
        setFilterCampaignDropdown(!filterCampaignDropdown);
    };
    const handleContactFilter = () => {
        setFilterContactDropdown(!filterContactDropdown);
    };

    const handleSelect = (title, id) => {
        setDateFilter(title);
        id == "custom-range" ? setIsCustomRange(true) : setIsCustomRange(false);
        id == "custom-range"
            ? setDateFromDropdown(true)
            : setDateFromDropdown(false);
        setFilterDropdown(false);
    };
    const handleCampaignSelect = (title, id) => {
        setDateCampaignFilter(title);
        setFilterCampaignDropdown(false);
    };
    const handleContactSelect = (title, id) => {
        setDateContactFilter(title);
        setFilterContactDropdown(false);
    };
    const handleFromdropdown = () => {
        setDateFromDropdown(!dateFromDropdown);
    };
    const handleTodropdown = () => {
        setDateToDropdown(!dateToDropdown);
        setDateFromDropdown(false);
    };
    useEffect(
        ListenForOutsideClicks(
            listening,
            setListening,
            filterRef,
            setFilterDropdown
        )
    );
    useEffect(
        ListenForOutsideClicks(
            listening,
            setListening,
            filterCampaignRef,
            setFilterCampaignDropdown
        )
    );
    useEffect(
        ListenForOutsideClicks(
            listening,
            setListening,
            filterContactRef,
            setFilterContactDropdown
        )
    );
    // useEffect(
    //     ListenForOutsideClicks(
    //         listening,
    //         setListening,
    //         dateFromRef,
    //         setDateFromDropdown
    //     )
    // );
    useEffect(
        ListenForOutsideClicks(
            listening,
            setListening,
            dateToRef,
            setDateToDropdown
        )
    );

    return (
        <div className="dashboard-page">
            <div className="mintmrm-container">
                <div className="dashboard-header">
                    <h1 class="dashboard-heading">Dashboard</h1>

                    <div className="filter-box">
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
                                {filterItems.map((item) => (
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
                        <div
                            className={
                                isCustomRange
                                    ? "custom-date show"
                                    : "custom-date"
                            }
                        >
                            <div
                                className="date-from"
                                onClick={handleFromdropdown}
                            >
                                <ul
                                    className={
                                        dateFromDropdown
                                            ? "mintmrm-dropdown show"
                                            : "mintmrm-dropdown"
                                    }
                                >
                                    <hr />
                                    <button className="mintmrm-btn">
                                        Filter
                                    </button>
                                </ul>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="MMM d, yyyy "
                                />
                            </div>

                            <div
                                ref={dateToRef}
                                className="date-to"
                                onClick={handleTodropdown}
                            >
                                <ul
                                    className={
                                        dateToDropdown
                                            ? "mintmrm-dropdown show"
                                            : "mintmrm-dropdown"
                                    }
                                >
                                    <hr />
                                    <button className="mintmrm-btn">
                                        Filter
                                    </button>
                                </ul>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="MMM d, yyyy "
                                />
                            </div>
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
                                <div ref={filterCampaignRef}>
                                    <button
                                        className={
                                            filterCampaignDropdown
                                                ? "drop-down-button show"
                                                : "drop-down-button"
                                        }
                                        onClick={handleCampaignFilter}
                                    >
                                        {dateCampaignFilter}
                                    </button>
                                    <ul
                                        className={
                                            filterCampaignDropdown
                                                ? "mintmrm-dropdown show"
                                                : "mintmrm-dropdown"
                                        }
                                    >
                                        {filterItems.map((item) => (
                                            <li
                                                onClick={() =>
                                                    handleCampaignSelect(
                                                        item.tile,
                                                        item.id
                                                    )
                                                }
                                            >
                                                {item.tile}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
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
                                <div ref={filterContactRef}>
                                    <button
                                        className={
                                            filterContactDropdown
                                                ? "drop-down-button show"
                                                : "drop-down-button"
                                        }
                                        onClick={handleContactFilter}
                                    >
                                        {dateContactFilter}
                                    </button>
                                    <ul
                                        className={
                                            filterContactDropdown
                                                ? "mintmrm-dropdown show"
                                                : "mintmrm-dropdown"
                                        }
                                    >
                                        {filterItems.map((item, index) => (
                                            <li
                                                onClick={() =>
                                                    handleContactSelect(
                                                        item.tile,
                                                        item.id
                                                    )
                                                }
                                            >
                                                {item.tile}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
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
