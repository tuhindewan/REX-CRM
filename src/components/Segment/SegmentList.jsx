import HoverMenu from "../HoverMenu";
import Portal from "../Portal";
import { useState, useEffect, useRef } from "react";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import EditIcon from "../Icons/EditIcon";
import Delete from "../Icons/Delete";
import ListenForOutsideClicks from "../ListenForOutsideClicks";

export default function SegmentList() {
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);
  const [listening, setListening] = useState(false);

  const menuButtonRef = useRef(null);
  const moreOptionRef = useRef(null);

  useEffect(
    ListenForOutsideClicks(
      listening,
      setListening,
      moreOptionRef,
      setIsActiveDropdown
    )
  );

  return (
    <tr>
      <td>
        <span class="mintmrm-checkbox" title="">
          <input type="checkbox" id="single-select" name="single-select" />
          <label for="single-select">Vip</label>
        </span>
      </td>
      <td className="">100</td>
      <td className="">
        {/* {data?.length > 20 ? data.substring(0, 20) + "..." : data} */}
        hello how are you
      </td>
      <td className="">
        {/* {new Date(created_at).toDateString()} */}
        Tue Oct 25 2022
      </td>
      <td ref={moreOptionRef}>
        <button
          className="more-option"
          onClick={() => {
            setIsActiveDropdown((prev) => !prev);
          }}
          ref={menuButtonRef} // we need to add ref to menu button in order to correctly position the hovermenu
        >
          <ThreeDotIcon />
          {isActiveDropdown && ( // only show the menu if both active and current active points to this listitem
            <Portal>
              <HoverMenu elementRef={menuButtonRef} x={-10} y={-20}>
                <ul
                  style={{ width: "190px" }}
                  className={
                    isActiveDropdown // only show the menu  current active points to this listitem id
                      ? "mintmrm-dropdown show"
                      : "mintmrm-dropdown"
                  }
                >
                  <li>
                    <EditIcon />
                    Edit
                  </li>
                  <li>
                    <Delete />
                    Delete
                  </li>
                </ul>
              </HoverMenu>
            </Portal>
          )}
        </button>
      </td>
    </tr>
  );
}
