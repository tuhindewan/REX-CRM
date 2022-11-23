import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ListenForOutsideClicks from "../../components/ListenForOutsideClicks";
import CalendarIcon from "../Icons/CalendarIcon";

const DashboardFilter = () => {

    const [dateFilter, setDateFilter] = useState("Monthly");
    const [dateFromDropdown, setDateFromDropdown] = useState(false);
    const [isCustomRange, setIsCustomRange] = useState(false);
    const [filterDropdown, setFilterDropdown] = useState(false);

    const [filterItems, setFilterItems] = useState([
        { title: "Weekly", id: "weekly" },
        { title: "Monthly", id: "monthly" },
        { title: "Yearly", id: "yearly" },
        { title: "Custom Range", id: "custom-range" },
    ]);

    //------datepicker-----
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const handleFilter = () => {
        setFilterDropdown(!filterDropdown);
    };
   
    const handleSelect = (title, id) => {
        setDateFilter(title);
        id == "custom-range" ? setIsCustomRange(true) : setIsCustomRange(false);
        id == "custom-range" ? setDateFromDropdown(true) : setDateFromDropdown(false);
        setFilterDropdown(false);
    };

    console.log(startDate);
    console.log(endDate);

    
    return (
        <div className="filter-box">
            <div className="selecbox">
                <button className={ filterDropdown ? "drop-down-button show" : "drop-down-button" } onClick={handleFilter} >
                    {dateFilter}
                </button>

                <ul className={ filterDropdown ? "mintmrm-dropdown show" : "mintmrm-dropdown" } >
                    {filterItems.map((item, index) => (
                        <li key={index} onClick={() => handleSelect(item.title, item.id) } >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="custom-date" >
                <div className="selected-date">
                    <span className="start-date">10 Nov, 2022</span>
                    <span className="end-date">10 Nov, 2022</span>
                    <span className="date-icon">
                        <CalendarIcon />
                    </span>
                </div>

                {/* <div className="date-to" >
                    
                </div> */}

                <div className="datepicker-dropdown">
                    <DatePicker
                        selected={startDate}
                        onChange={onChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        inline
                    />
                    <button className="mintmrm-btn">
                        Filter
                    </button>
                </div>

            </div>
        </div>
    );
};

export default DashboardFilter;
