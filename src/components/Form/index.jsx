import React, { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import HoverMenu from "../HoverMenu";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import Portal from "../Portal";
import Plus from "../Icons/Plus";

export default function FormIndex(props) {
  return (
    <>
      <Link to="/form-builder/">
        <button className="add-form-btn mintmrm-btn ">
          <Plus /> Add Form
        </button>
      </Link>

      <div className="contact-list-table">
        <table>
          <thead>
            <tr>
              <th className="email">
                <span class="mintmrm-checkbox">
                  <input type="checkbox" name="bulk-select" id="bulk-select" />
                  <label for="bulk-select">Email</label>
                </span>
              </th>

              <th className="first-name">First Name</th>

              <th className="last-name">Last Name</th>

              <th className="list">List</th>
              <th className="tag">Tag</th>
              <th className="last-activity">Last Activity</th>
              <th className="status">Status</th>
              <th className="phone-number">Phone Number</th>
              <th className="source">Source</th>
              <th className="action"></th>
            </tr>
          </thead>
          <tbody>THis is body</tbody>
        </table>
      </div>
    </>
  );
}
