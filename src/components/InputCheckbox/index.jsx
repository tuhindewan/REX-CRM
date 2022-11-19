import "./style.css";

export default function InputCheckbox(props) {
  return (
    <div className="form-group contact-input-field">
      <div key={`mrm-${props.name}`} className="mrm-form-group checkbox">
        <label htmlFor={props.label}>
          {props.label}
          {props.required && <span className="required-mark">*</span>}
        </label>
          {props.selectOption.map((option, index) => {
            let isChecked = false;
            if(props.selectedValue){
              props.selectedValue.map((sel, idx)=>{
              if(sel === option){
                isChecked=true;
              }
            })
            }
            
            return (
              <div className="mrm-radio-group mintmrm-checkbox">
                <input
                  key={index}
                  type="checkbox"
                  id={option}
                  name={props.name}
                  onChange={props.handleChange}
                  value={option}
                  defaultChecked={isChecked}                
                />
                <label htmlFor={option}>
                  {option}
                  {props.required && <span className="required-mark">*</span>}
                </label>
              </div>
            );
          })}
      </div>
    </div>
  );
}
