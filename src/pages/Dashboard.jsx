import React, { useState } from "react";
import { useGlobalStore } from "../hooks/useGlobalStore";
import DashboardCard from "../components/Dashboard/DashboardCard";
import EmailDraftProgressBar from "../components/Dashboard/EmailDraftProgressBar";
import EmailSentProgressBar from "../components/Dashboard/EmailSentProgressBar";

import ContactProfile from "../components/Icons/ContactProfile";
import Pending from "../components/Icons/Pending";
import Subscribe from "../components/Icons/Subscribe";
import Unsubscribe from "../components/Icons/Unsubscribe";
import DashboardOverview from "../components/Icons/DashboardOverview";

const Dashboard = () => {
    useGlobalStore.setState({
        hideGlobalNav: true,
    });

    const [draftPercentage, setDraftPercentage] = useState(10);
    const [sentPercentage, setSentPercentage] = useState(24);

    return (
        <div className="dashboard-page">
            <div className="mintmrm-container">
                <div className="dashboard-header">
                    <h1 class="dashboard-heading">Dashboard</h1>
                </div>

                <div className="dashboard-card-wrapper">
                    <DashboardCard
                        source={<ContactProfile />}
                        cardTitle="Total Contacts"
                        totalAmount="580"
                    />
                    <DashboardCard
                        source={<Subscribe />}
                        cardTitle="Total Campaign"
                        totalAmount="63"
                    />
                    <DashboardCard
                        source={<Unsubscribe />}
                        cardTitle="Total Automation"
                        totalAmount="5790"
                    />
                    <DashboardCard
                        source={<Pending />}
                        cardTitle="Total Form"
                        totalAmount="580"
                    />
                </div>

                <hr className="dashboard-divider" />

                <div className="dashboard-content-wrapper">
                    <div className="single-stat-box box-col-8">
                        <DashboardOverview />
                    </div>

                    <div className="single-stat-box box-col-4">
                        <header className="box-header">
                            <h4 className="header-title">Email Campaigns</h4>

                            <div className="filter-box">
                                <select name="" id="">
                                    <option value="">Yearly</option>
                                    <option value="">Monthly</option>
                                    <option value="">Weekly</option>
                                    <option value="">Custom</option>
                                </select>
                            </div>
                        </header>

                        <div className="email-campaign-stats">
                            <EmailDraftProgressBar strokeWidth="10" sqSize="200" percentage={draftPercentage}/>
                            <EmailSentProgressBar strokeWidth="10" sqSize="130" percentage={sentPercentage}/>
                        </div>

                        <div className="stat-indicator">
                            <span className="sent">Sent</span>
                            <span className="draft">Drafts</span>
                        </div>
                    </div>

                    <div className="single-stat-box box-col-4">chart-3</div>
                    
                    <div className="single-stat-box box-col-8">chart-4</div>
                </div>

                
            </div>
        </div>
    );
};

export default Dashboard;
