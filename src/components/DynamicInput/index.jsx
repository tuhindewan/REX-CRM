import { useState } from "react";
import Delete from "../Icons/Delete";
import Plus from "../Icons/Plus";
import "./style.css";

function DynamicInput(props) {
  const [serviceList, setServiceList] = useState([{ option: "" }]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
    props.onOptionData(serviceList);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { option: "" }]);
  };

  return (
    <div className="form-group contact-input-field">
      <label htmlFor="option">Option(s)</label>
      {serviceList.map((singleService, index) => (
        <div key={index} className="services">
          <div className="first-division">
            <input
              name="option"
              type="text"
              id="option"
              value={singleService.option}
              onChange={(e) => handleServiceChange(e, index)}
            />
            {serviceList.length !== 1 && (
              <button
                type="button"
                onClick={() => handleServiceRemove(index)}
                className="remove-btn"
              >
                <Delete />
              </button>
            )}
          </div>
          {serviceList.length - 1 === index && serviceList.length < 6 && (
            <button
              className="add-contact-btn mintmrm-btn add-option-btn"
              onClick={handleServiceAdd}
            >
              <Plus /> Add option
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default DynamicInput;
