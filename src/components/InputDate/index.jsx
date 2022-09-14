import "./style.css";

export default function InputDate( props ) {
  return (
    <div className="form-group contact-input-field">
      <label htmlFor="" aria-required>
        {props.label}
        {props.isRequired ? <span>*</span> : null}
      </label>
      <input type="date" name={props.name} onChange={ props.handleChange } defaultValue={props.value} />
        <p>{props?.error}</p>

    </div>
  );
}
