import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ListenForOutsideClicks from "../ListenForOutsideClicks";
import CalendarIcon from "../Icons/CalendarIcon";

const Filter = () => {
    const [dateFilter, setDateFilter] = useState("Monthly");
    const [filterDropdown, setFilterDropdown] = useState(false);
    const filterRef = useRef(null);
    const [listening, setListening] = useState(false);
    const [filterItems, setFilterItems] = useState([
        { title: "Weekly", id: "weekly" },
        { title: "Monthly", id: "monthly" },
        { title: "Yearly", id: "yearly" },
    ]);

    const handleFilter = () => {
        setFilterDropdown(!filterDropdown);
    };

    const handleSelect = (title, id) => {
        setDateFilter(title);
        setFilterDropdown(false);
    };
    useEffect(
        ListenForOutsideClicks(
            listening,
            setListening,
            filterRef,
            setFilterDropdown
        )
    );

    return (
        <div className="filter-box">
            <div className="selecbox">
                <button
                    className={
                        filterDropdown
                            ? "drop-down-button show"
                            : "drop-down-button"
                    }
                    ref={filterRef}
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
        </div>
    );
};

export default Filter;
