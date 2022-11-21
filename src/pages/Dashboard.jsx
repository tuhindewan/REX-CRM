import React from "react";
import { useGlobalStore } from "../hooks/useGlobalStore";
import DashboardCard from "../components/DashboardCard";
import ContactProfile from "../components/Icons/ContactProfile";
import Pending from "../components/Icons/Pending";
import Subscribe from "../components/Icons/Subscribe";
import Unsubscribe from "../components/Icons/Unsubscribe";

const Dashboard = () => {
    useGlobalStore.setState({
        hideGlobalNav: true,
    });
    return (
        <div className="dashboard-page">
            <div className="mintmrm-container">
                <div className="dashboard-header">
                    <h1 class="dashboard-heading">Dashboard</h1>
                </div>

                <div className="dashboard-info-wrapper">
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
            </div>
        </div>
    );
};

export default Dashboard;
