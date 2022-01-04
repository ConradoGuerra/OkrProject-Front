import classes from "./Input.module.css";

const Input = (props) => {
  const widthPerc = "100%";

  return (
    <div
      style={{ width: props.width || widthPerc }}
      className={classes.control}
    >
      <label className={classes.label} htmlFor={props.label}>
        {props.labelName}
      </label>
      <input
        id={props.id}
        style={{ width: props.width || widthPerc }}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
