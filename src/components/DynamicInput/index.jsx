import { useState } from "react";
import "./style.css";

function DynamicInput( props ) {
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
    console.log(serviceList);
    setServiceList([...serviceList, { option: "" }]);
  };

  return (
      <div className="form-group contact-input-field">
        <label htmlFor="option">Option(s)</label>
        {serviceList.map((singleService, index) => (
          <div key={index} className="services">
              <input
                name="option"
                type="text"
                id="option"
                value={singleService.option}
                onChange={(e) => handleServiceChange(e, index)}
                required
              />
              {serviceList.length - 1 === index && serviceList.length < 4 && (
                <button
                  type="button"
                  onClick={handleServiceAdd}
                  className="add-btn"
                >
                  <span>Add a Service</span>
                </button>
              )}
            
            <div className="second-division">
              {serviceList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleServiceRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
  );
}

export default DynamicInput;