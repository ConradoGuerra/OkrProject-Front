import { useState, useEffect, useCallback } from "react";
import classes from "./User.module.css";
import Card from "../UI/Card/Card";

const User = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(() => {
    fetch("http://localhost:8080")
      .then((result) => result.json())
      .then((resultData) => {
        const usersData = resultData.data.map((user) => {
          return {
            id: user._id,
            email: user.email,
            name: user.name,
            okr: user.okrs,
          };
        });

        setUsers(usersData);
      }).catch(err => console.log(err));
  }, []);
  

  useEffect(fetchUsers, [fetchUsers])

  const userContent = users.map((user) => (
    <Card key={user.id} usersData={user} />
  ));

  return userContent;
};

export default User;
