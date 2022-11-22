import { Link } from "react-router-dom";
import IncreaseRateIcon from "../Icons/IncreaseRateIcon";
import DecreaseRateIcon from "../Icons/DecreaseRateIcon";

export default function DashboardCard(props) {
    return (
        <div className="single-card">
            <div className="image-title">
                <span className="card-icon">{props.source}</span>
                <p>{props.cardTitle}</p>
            </div>
            <div className="total-rate">
                <h3 className="total-numbers">{props.totalAmount}</h3>
                {props.rate == "increase" ? (
                    <span className="rate-amount increase-rate">
                        <IncreaseRateIcon />
                        {props.rateAmount}
                    </span>
                ) : (
                    <span className="rate-amount decrease-rate">
                        <DecreaseRateIcon />
                        {props.rateAmount}
                    </span>
                )}
            </div>
            <hr />
        </div>
    );
}
