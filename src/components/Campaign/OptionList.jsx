export default function OptionList(props) {
  return (
    <div class="mintmrm-checkbox">
      <input
        type="checkbox"
        name={props.name}
        id={props.name}
        value={props.name}
      />

      <label for={props.name} className="mrm-custom-select-label">
        {props.title}
      </label>
    </div>
  );
}
