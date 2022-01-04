import Modal from "../UI/Modal/Modal";
import classes from "./OkrResult.module.css";
import Input from "../UI/Input/Input";
import { useState } from "react";

const OkrResult = (props) => {
  const [result, setResult] = useState(0);

  const resultHandler = (event) => {
    setResult(event.target.value);
  };

  const addResultHandler = (event) => {
    event.preventDefault();
    const userResult = {
      userId: props.okrData.userId,
      id: props.okrData._id,
      result: result,
    };
  };

  return (
    <Modal onClick={props.onResultHide}>
      <form onSubmit={addResultHandler}>
        <div className={classes.header}>
          <span>{props.okrData.okrName}</span>
          <span>Planned: {props.okrData.planned}</span>
        </div>
        <div className={classes.result}>
          <span>Please add a Result</span>
          <Input
            width={"50%"}
            value={result}
            id={props.okrData._id}
            name={props.okrData.okrName}
            type="number"
            onChange={resultHandler}
          />
        </div>
        <div className={classes.button}>
          <button onClick={props.onResultHide}>Close</button>
          <button >Add</button>
        </div>
      </form>
    </Modal>
  );
};

export default OkrResult;
