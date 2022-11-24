import React, { useState, useRef, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";

import DashboardCard from "../components/Dashboard/DashboardCard";
import EmailDraftProgressBar from "../components/Dashboard/EmailDraftProgressBar";
import EmailSentProgressBar from "../components/Dashboard/EmailSentProgressBar";
import FilterWithDateRange from "../components/Dashboard/FilterWithDateRange";
import Filter from "../components/Dashboard/Filter";

import TotalContactIcon from "../components/Icons/TotalContactIcon";
import TotalCampaignIcon from "../components/Icons/TotalCampaignIcon";
import TotalAutomationIcon from "../components/Icons/TotalAutomationIcon";
import TotalFormIcon from "../components/Icons/TotalFormIcon";
import DashboardOverview from "../components/Icons/DashboardOverview";
import DashboardAutomationPlaceholder from "../components/Icons/DashboardAutomationPlaceholder";

const Dashboard = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const results = [
            { mood: "Subscribed", total: 1000, shade: "#573BFF" },
            { mood: "Pending", total: 200, shade: "#02C4FB" },
            { mood: "Unsubscribed", total: 800, shade: "#EC5956" },
        ];

        let sum = 0;
        let totalNumberOfPeople = results.reduce(
            (sum, { total }) => sum + total, 0
        );
        let currentAngle = 0;

        for (let moodValue of results) {
            //calculating the angle the slice (portion) will take in the chart
            let portionAngle = (moodValue.total / totalNumberOfPeople) * 2 * Math.PI;

            //drawing an arc and a line to the center to differentiate the slice from the rest
            ctx.beginPath();
            ctx.arc(100, 100, 100, currentAngle, currentAngle + portionAngle);
            currentAngle += portionAngle;
            ctx.lineTo(100, 100);
            //filling the slices with the corresponding mood's color
            ctx.fillStyle = moodValue.shade;
            ctx.fill();
            
        }
    }, []);

    const [draftPercentage, setDraftPercentage] = useState(10);
    const [sentPercentage, setSentPercentage] = useState(24);

    return (
        <div className="dashboard-page">
            <div className="mintmrm-container">
                <div className="dashboard-header">
                    <h1 class="dashboard-heading">Dashboard</h1>

                    <FilterWithDateRange />
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

                            <Filter />
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

                            <Filter />
                        </header>

                        <div id="pie-container">
                            <span className="mintmrm-loader"></span>
                            <canvas
                                width="210"
                                height="210"
                                ref={canvasRef}
                                className="pie-chart-canvas show"
                            ></canvas>
                        </div>

                        <div className="stat-indicator">
                            <span className="subscribed">Subscribed</span>
                            <span className="unsubscribed">Unsubscribed</span>
                            <span className="pending">Pending</span>
                        </div>

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
