export default function OptionList(props) {
  const {selected, setSelected, allowMultiple = true } = props;
  

  // const handleChange = (e) => {
  //   let updatedList = [...checkItem];
  //   if (e.target.checked) {
  //     updatedList = [...checkItem, e.target.value];
  //     // setCheckItem([...checkItem, e.target.value]);
  //   } else {
  //     updatedList.splice(checkItem.indexOf(e.target.value), 1);
  //   }
  //   setCheckItem(updatedList);
  //   // console.log(updatedList);
  // };

  const handleSelectOne = (e) => {
    e.stopPropagation();
    let updatedList = [...selected];
    // since this function is handling input for both checkboxes and li elements
    // there might be either id and value for input checkboxes
    // or custom ID and custom Value dataset attribute for li elements
    let value = e.target.value ? e.target.value : e.target.dataset.customValue;
    let id = e.target.id ? e.target.id : e.target.dataset.customId;
    const index = selected.findIndex((item) => item.id == id);

    // already in selected list so remove it from the array
    if (allowMultiple) {
      if (index >= 0) {
        setSelected(selected.filter((item) => item.id != id));
      } else {
        // add id to the array
        setSelected([...selected, { id: id, title: value }]);
      }
    } else {
      if (index >= 0) setSelected([]);
      else setSelected([{ id: id, title: value }]);
    }

    if (checked) {
      updatedList = [...selected.id, e.target.value];
      // setCheckItem([...checkItem, e.target.value]);
    } else {
      updatedList.splice(selected.id?.indexOf(e.target.value), 1);
    }
    setSelected(updatedList);
  };

  
  return (
    <div class="mintmrm-checkbox">
      <input
        type="checkbox"
        name={props.id}
        id={props.id}
        value={props.title}
        onChange={handleSelectOne}
        checked={props.checked}
        
        
      />

      <label for={props.id} className="mrm-custom-select-label">
        {props.title}
      </label>
    </div>
  );
}
