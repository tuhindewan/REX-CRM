export default function OptionList(props) {
  const { checkList, setCheckList,  } = props;

  const handleChange = (e) => {
    let updatedList = [...checkList];
    if (e.target.checked) {
      updatedList = [...checkList, e.target.value];
      // setCheckList([...checkList, e.target.value]);
    } else {
      updatedList.splice(checkList.indexOf(e.target.value), 1);
    }
    setCheckList(updatedList);
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
