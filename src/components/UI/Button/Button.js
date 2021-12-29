import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      onClick={props.createUserHandler}
      type={props.type}
    >
      {props.name}
    </button>
  );
};

export default Button;
