import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.control}>
      <label className={classes.label} htmlFor={props.label}>
        {props.labelName}
      </label>
      <input id={props.id} name={props.name} type={props.type} />
    </div>
  );
};

export default Input;
