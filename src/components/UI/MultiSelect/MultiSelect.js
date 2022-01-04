import classes from "./MultiSelect.module.css";
import { useState } from "react";

const MultiSelect = ({userOkr, title, items = [], multiSelect = true}) => {
  const [open, setOpen] = useState(false);
  const [okrSelected, setOkrSelected] = useState([]);
  const [isSelected, setIsSelected] = useState(false)
  const toggle = () => setOpen(!open);

  const onOkrSelection = (item) => {
    if (!okrSelected.some((current) => current._id === item._id)) {
      if (!multiSelect) {
        setOkrSelected([item]);
      } else {
        setOkrSelected([...okrSelected, item]);
        setIsSelected(true);
      }
    } else {
      let removeItem = okrSelected;
      removeItem = removeItem.filter((current) => current._id !== item._id);
      setOkrSelected(removeItem);
      setIsSelected(false);
    }
    setOpen(false)
  };

  const selectedOkr = (item) => {
    const itsSelected = okrSelected.some((current) => item._id === current._id);
    return (itsSelected);
  };

  userOkr(okrSelected)
  
  return (
    <div className={classes["multi-wrapper"]}>
      <div
        className={classes["multi-header"]}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>{!open ? "Open" : "Close"}</p>
        </div>
      </div>
      {open && (
        <ul className={classes["multi-ul"]}>
          {items.map((item) => (
            <li className={classes["multi-li"]} key={item._id}>
              <button
                type="button"
                className={`${classes["multi-button"]} ${isSelected ? 'selected' : ''}`}
                onClick={() => onOkrSelection(item)}
              >
                <span>{item.okrName}</span>
                <span>{selectedOkr(item) && 'Selected'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiSelect;
