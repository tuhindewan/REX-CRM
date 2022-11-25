import { Link } from "react-router-dom";
import IncreaseRateIcon from "../Icons/IncreaseRateIcon";
import DecreaseRateIcon from "../Icons/DecreaseRateIcon";
import DoubleAngleRight from "../Icons/DoubleAngleRightIcon";

export default function DashboardCard(props) {
    // console.log(props);
    const openFormBuilder = () => {
        // console.log(props.route);
        // window.location.replace(props.route);
        // window.location.reload();
    };
    return (
        <div
            className={
                props.cardTitle == "Total Automation"
                    ? "single-card coming-soon-overlay"
                    : "single-card"
            }
        >
            <div className="image-title">
                <span className="card-icon">{props.source}</span>
                <p>{props.cardTitle}</p>
            </div>
            <span className="mintmrm-loader"></span>
            <div className="total-rate show">
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
            <div className="add-links">
                {props.cardTitle == "Form" ? (
                    <button onClick={openFormBuilder} className="single-link">
                        {"Add " + props.name}
                        <DoubleAngleRight />
                    </button>
                ) : (
                    <Link to={props.route} className="single-link">
                        {"Add " + props.name}
                        <DoubleAngleRight />
                    </Link>
                )}
            </div>
        </div>
    );
}
