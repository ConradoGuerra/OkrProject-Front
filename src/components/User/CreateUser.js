import { useState, useEffect } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import MultiSelect from "../UI/MultiSelect/MultiSelect";
import classes from "./CreateUser.module.css";

const CreateUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [okrData, setOkrData] = useState()
  const [okrSelected, setOkrSelected] = useState([])

  const createUserHandler = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        okrs: okrSelected
      }),
    })
      .then((result) => {
        props.createUser(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch("http://localhost:8080/okrs")
      .then((result) => result.json())
      .then(
        (data) => {
          const okrs = data.data.map((item) => item)
          setOkrData(okrs)
        }
      );

  }, []);

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const userEmailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  };
  const userOkrChangeHandler = (event) => {
    setOkrSelected(event)
  };

  return (
    <div>
      <form className={classes.createForm} onSubmit={createUserHandler}>
        <Input
          id="name"
          type="text"
          label="name"
          name="name"
          labelName="Name"
          onChange={userNameChangeHandler}
          value={userName}
        />
        <Input
          id="email"
          type="text"
          label="email"
          name="email"
          labelName="Email"
          onChange={userEmailChangeHandler}
          value={userEmail}
        />
        <MultiSelect title='Select an Okr to this User' userOkr={userOkrChangeHandler} items={okrData}/>
        <Button type="Submit" name="Create User"></Button>
      </form>
    </div>
  );
};

export default CreateUser;
