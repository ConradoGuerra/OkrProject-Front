import react from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classes from "./CreateUser.module.css";

const CreateUser = (props) => {
  return (
    <div>
      <form className={classes.createForm}>
        <Input
          id="name"
          type="text"
          label="name"
          name="name"
          labelName="Name"
        />
        <Input
          id="email"
          type="text"
          label="email"
          name="email"
          labelName="Email"
        />
        <Button onClick={props.createUserHandler} name="Create User"></Button>
      </form>
    </div>
  );
};

export default CreateUser;
