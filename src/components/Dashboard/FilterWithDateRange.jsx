import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ListenForOutsideClicks, {
    useOutsideAlerter,
} from "../ListenForOutsideClicks";
import CalendarIcon from "../Icons/CalendarIcon";

const FilterWithDateRange = () => {
    const calenderRef = useRef(null);
    const customRangeRef = useRef(null);
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

    // useEffect(
    //     ListenForOutsideClicks(
    //         listening,
    //         setListening,
    //         calenderRef,
    //         setShowCalendar
    //     )
    // );
    useOutsideAlerter(calenderRef, setShowCalendar);
    useEffect(
        ListenForOutsideClicks(
            listening,
            setListening,
            customRangeRef,
            setShowCustomCalendar
        )
    );
    useEffect(
        ListenForOutsideClicks(
            listening,
            setListening,
            filterRef,
            setFilterDropdown
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
    // let new_date = new Date();

    let current_day = new Date().getDate();
    let current_month = monthShortNames[new Date().getMonth()];
    let current_year = new Date().getFullYear();

    const [endDate, setEndDate] = useState(new Date());

    let last_week_date = new Date().setDate(new Date().getDate() - 6);

    const [startDate, setStartDate] = useState(new Date());

    let last_week_day = new Date().getDate();
    let last_week_month = monthShortNames[new Date().getMonth()];
    let last_week_year = new Date().getFullYear();
    // console.log(last_week_month);

    //let test_date = current_day +' '+ current_month +', ' + current_year;
    // const [endDate, setEndDate] = useState(test_date);
    //------end initial date formate------

    const handleFilter = () => {
        setFilterDropdown(!filterDropdown);
    };

    const handleSelect = (title, id) => {
        setDateFilter(title);
        id == "custom-range" ? setShowDateRange(true) : setShowDateRange(false);
        id == "custom-range"
            ? setShowCustomCalendar(true)
            : setShowCustomCalendar(false);
        setFilterDropdown(false);
    };

    const showRangeCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    const onDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);

        // let last_week_day = start.getDate();
        // let last_week_month = monthShortNames[start.getMonth()];
        // let last_week_year = start.getFullYear();

        //setStartDate(last_week_month +' '+ last_week_day +', ' + last_week_year);

        // let current_day = end.getDate();
        // let current_month = monthShortNames[end.getMonth()];
        // let current_year = end.getFullYear();

        //setEndDate(current_month +' '+ current_day +', ' + current_year);

        if (end != null) {
            setShowCalendar(false);
        }
    };

    return (
        <div className="filter-box" ref={filterRef}>
            <div className="selecbox">
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
                            ref={
                                item.id == "custom-range"
                                    ? customRangeRef
                                    : null
                            }
                            key={index}
                            onClick={() => handleSelect(item.title, item.id)}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>

            {showDateRange && (
                <div className="custom-date" >
                    <div
                        className="selected-date"
                        onClick={showRangeCalendar}
                        
                    >
                        <span className="start-date">Nov 20, 2022</span>
                        <span className="end-date">Nov 20, 2022</span>
                        <span className="date-icon">
                            <CalendarIcon />
                        </span>
                    </div>

                    <div
                        className={
                            showCalendar ||showCustomCalendar
                                ? "datepicker-dropdown show"
                                : "datepicker-dropdown"
                        }
                    >
                        <DatePicker
                            dateFormat="yyyy/MM/dd"
                            selected={endDate}
                            onChange={onDateChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            inline
                        />
                        <button className="mintmrm-btn">
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
