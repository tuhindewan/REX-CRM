import React, { useState, useRef, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";

import DashboardCard from "../components/Dashboard/DashboardCard";
import EmailDraftProgressBar from "../components/Dashboard/EmailDraftProgressBar";
import EmailSentProgressBar from "../components/Dashboard/EmailSentProgressBar";
import DashboardFilter from "../components/Dashboard/DashboardFilter";

import TotalContactIcon from "../components/Icons/TotalContactIcon";
import TotalCampaignIcon from "../components/Icons/TotalCampaignIcon";
import TotalAutomationIcon from "../components/Icons/TotalAutomationIcon";
import TotalFormIcon from "../components/Icons/TotalFormIcon";
import DashboardOverview from "../components/Icons/DashboardOverview";
import DashboardAutomationPlaceholder from "../components/Icons/DashboardAutomationPlaceholder";

const Dashboard = () => {

    const [draftPercentage, setDraftPercentage] = useState(10);
    const [sentPercentage, setSentPercentage] = useState(24);

    return (
        <div className="dashboard-page">
            <div className="mintmrm-container">
                <div className="dashboard-header">
                    <h1 class="dashboard-heading">Dashboard</h1>

                    <DashboardFilter />
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

                            
                        </header>

                        <div id="pie-chart">
                            
                        </div>

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
