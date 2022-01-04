import { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classes from "./CreateOkr.module.css";

const CreateOkr = (props) => {
  const [okrName, setOkrName] = useState("");
  const [okrPlanned, setOkrPlanned] = useState("");

  const createOkrHandler = (event) => {
    event.preventDefault();

    fetch("http://localhost:8080/okr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        okrName: okrName,
        planned: okrPlanned,
        done: 0,
      }),
    })
      .then((result) => {

        console.log(result)
        props.createOkr(false)
      })
      .catch((err) => console.log(err));
  };

  const okrNameChangeHandler = (event) => {
    setOkrName(event.target.value);
  };
  const okrPlannedChangeHandler = (event) => {
    setOkrPlanned(event.target.value);
  };

  return (
    <div>
      <form className={classes.createForm} onSubmit={createOkrHandler}>
        <Input
          id="okrName"
          type="text"
          label="okrName"
          name="okrName"
          labelName="Okr"
          onChange={okrNameChangeHandler}
          value={okrName}
        />
        <Input
          id="planned"
          type="number"
          label="planned"
          name="planned"
          labelName="Planned"
          onChange={okrPlannedChangeHandler}
          value={okrPlanned}
        />
        <Button type="Submit" name="Create Okr"></Button>
      </form>
    </div>
  );
};

export default CreateOkr;
