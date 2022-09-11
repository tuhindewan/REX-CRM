import "./style.css";

export default function InputItem(props) {
  return (
    <div className="form-group contact-input-field">
      <label htmlFor="" aria-required>
        {props.label}
        {props.isRequired ? <span>*</span> : null}
      </label>
      <input
        type={props.type ? props.type : "text"}
        name={props.name}
        onChange={props.handleChange}
        defaultValue={props.value}
      />
      <p className="error-message">{props?.error}</p>
    </div>
  );
}
