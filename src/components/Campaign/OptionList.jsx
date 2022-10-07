export default function OptionList(props) {
  const { checkItem, setCheckItem,  } = props;

  const handleChange = (e) => {
    let updatedList = [...checkItem];
    if (e.target.checked) {
      updatedList = [...checkItem, e.target.value];
      // setCheckItem([...checkItem, e.target.value]);
    } else {
      updatedList.splice(checkItem.indexOf(e.target.value), 1);
    }
    setCheckItem(updatedList);
    // console.log(updatedList);
  };
  return (
    <div class="mintmrm-checkbox">
      <input
        type="checkbox"
        name={props.name}
        id={props.name}
        value={props.title}
        onChange={handleChange}
        
        
      />

      <label for={props.name} className="mrm-custom-select-label">
        {props.title}
      </label>
    </div>
  );
}
