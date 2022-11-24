import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ListenForOutsideClicks, {
    useOutsideAlerter,
} from "../ListenForOutsideClicks";
import CalendarIcon from "../Icons/CalendarIcon";

const FilterWithDateRange = () => {
    const customFilterRef = useRef(null);
    const filterRef = useRef(null);
    const [listening, setListening] = useState(false);
    const [dateFilter, setDateFilter] = useState("Monthly");
    const [showDateRange, setShowDateRange] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [showCustomCalendar, setShowCustomCalendar] = useState(false);
    const [filterDropdown, setFilterDropdown] = useState(false);

    const [filterItems, setFilterItems] = useState([
        { title: "Weekly", id: "weekly" },
        { title: "Monthly", id: "monthly" },
        { title: "Yearly", id: "yearly" },
        { title: "Custom Range", id: "custom-range" },
    ]);

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
            customFilterRef,
            setShowCalendar
        )
    );

    //------start initial date formate-----
    const monthShortNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const now = new Date();
    let start_of_week =  window.MRM_Vars.start_of_week;

    const [startDate, setStartDate] = useState(new Date(now.getFullYear(), now.getMonth(), now.getDate() - 6));
    const [endDate, setEndDate] = useState(new Date());

    const [startDateLabel, setStartDateLabel] = useState('');
    const [endDateLabel, setEndDateLabel] = useState('');

    const setDateLabels = () => {
        let last_week_day = startDate.getDate();
        let last_week_month = monthShortNames[startDate.getMonth()];
        let last_week_year = startDate.getFullYear();
        setStartDateLabel(last_week_month +' '+ last_week_day +', ' + last_week_year);

        if( endDate != null ) {
            let current_day = endDate.getDate();
            let current_month = monthShortNames[endDate.getMonth()];
            let current_year = endDate.getFullYear();
            setEndDateLabel(current_month +' '+ current_day +', ' + current_year);
        }

    }

    useEffect(
        () => setDateLabels()
    );
    //------end initial date formate------

    const handleFilter = () => {
        setFilterDropdown(!filterDropdown);
    };

    const handleSelect = (title, id) => {
        setDateFilter(title);
        id == "custom-range" ? setShowDateRange(true) : setShowDateRange(false);
        id == "custom-range" ? setShowCalendar(true) : setShowCalendar(false);
        setFilterDropdown(false);
    };

    const showRangeCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    const onDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);

        setDateLabels();
    };

    const onDateFilter = () => {
        setShowCalendar(false);
    };

    return (
        <div className="filter-box" ref={customFilterRef}>
            <div className="selecbox" ref={filterRef}>
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
                    {filterItems.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(item.title, item.id)}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>

            {showDateRange && (
                <div className="custom-date">
                    <div className="selected-date" onClick={showRangeCalendar}>
                        <span className="start-date">{startDateLabel}</span>
                        <span className="end-date">{endDateLabel}</span>
                        <span className="date-icon">
                            <CalendarIcon />
                        </span>
                    </div>

                    <div
                        className={
                            showCalendar
                                ? "datepicker-dropdown show"
                                : "datepicker-dropdown"
                        }
                    >
                        <DatePicker
                            selected={endDate}
                            onChange={onDateChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            inline
                            calendarStartDay={start_of_week}
                        />
                        <button className="mintmrm-btn" onClick={onDateFilter}>
                            Filter
                            {/* <span className="mintmrm-loader"></span> */}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterWithDateRange;
