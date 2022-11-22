import { Link } from "react-router-dom";

export default function DashboardCard(props) {
    return (
        <div className="single-card">
            <div className="image-title">
                <span className="card-icon">{props.source}</span>
                <p>{props.cardTitle}</p>
            </div>
            <h3 className="total-numbers">{props.totalAmount}</h3>
            <hr />
        </div>
    );
}
