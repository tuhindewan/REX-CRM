import SuccessfulIcon from "./Icons/SuccessfulIcon"
import CrossIcon from "./Icons/CrossIcon"
import {useState} from "react";

export default function SuccessfulNotification(){
    const [cancelBtn, setCancelBtn] = useState(false);

    const onCancel = () => {
        setCancelBtn(true);
    }
    
    return(
        <div className={cancelBtn ? "successful-notification inactive" : "successful-notification" }>
            <div className="alert-toast">
                <div className="alert-container">
                    <div className="successfull-icon" ><SuccessfulIcon/></div>
                    <p>Your data have been successfully exported</p>
                    <div className="cross-icon" onClick={onCancel}><CrossIcon/></div>

                </div>
            </div>
        </div>
    )
}