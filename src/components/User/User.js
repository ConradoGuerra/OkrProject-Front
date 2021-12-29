import CreateUser from "./CreateUser";
import { useState } from "react";
import classes from "./User.module.css";
import Card from "../UI/Card/Card";

const User = () => {
  const [createUserButton, setCreateUserButton] = useState(false);

  const users = [
    {
      Nome: "Conrado Guerra",
      Id: 1,
      Email: "concon@gmai.com",
      Objetivos: [
        { Nome: "Trabalhar", Meta: 43, Realizado: 6 },
        { Nome: "Estudar", Meta: 52, Realizado: 76 },
        { Nome: "Dormir", Meta: 100, Realizado: 2 },
        { Nome: "Cozinhar", Meta: 87, Realizado: 38 },
      ],
    },
    {
      Nome: "Lili",
      Id: 2,
      Email: "lililillili",
      Objetivos: [
        { Nome: "Trabalhar", Meta: 43, Realizado: 43 },
        { Nome: "Estudar", Meta: 52, Realizado: 24 },
        { Nome: "Dormir", Meta: 100, Realizado: 80 },
        { Nome: "Cozinhar", Meta: 87, Realizado: 54 },
      ],
    },
    {
      Nome: "Lili",
      Id: 2,
      Email: "lililillili",
      Objetivos: [
        { Nome: "Trabalhar", Meta: 43, Realizado: 43 },
        { Nome: "Estudar", Meta: 52, Realizado: 24 },
        { Nome: "Dormir", Meta: 100, Realizado: 80 },
        { Nome: "Cozinhar", Meta: 87, Realizado: 54 },
      ],
    },
    {
      Nome: "Lili",
      Id: 2,
      Email: "lililillili",
      Objetivos: [
        { Nome: "Trabalhar", Meta: 43, Realizado: 43 },
        { Nome: "Estudar", Meta: 52, Realizado: 24 },
        { Nome: "Dormir", Meta: 100, Realizado: 80 },
        { Nome: "Cozinhar", Meta: 87, Realizado: 54 },
      ],
    },
    {
      Nome: "Lili",
      Id: 2,
      Email: "lililillili",
      Objetivos: [
        { Nome: "Trabalhar", Meta: 43, Realizado: 43 },
        { Nome: "Estudar", Meta: 52, Realizado: 24 },
        { Nome: "Dormir", Meta: 100, Realizado: 80 },
        { Nome: "Cozinhar", Meta: 87, Realizado: 54 },
      ],
    },
    {
      Nome: "Lili",
      Id: 2,
      Email: "lililillili",
      Objetivos: [
        { Nome: "Trabalhar", Meta: 43, Realizado: 43 },
        { Nome: "Estudar", Meta: 52, Realizado: 24 },
        { Nome: "Dormir", Meta: 100, Realizado: 80 },
        { Nome: "Cozinhar", Meta: 87, Realizado: 54 },
      ],
    },
  ];

  const userContent = users.map((user) => <Card key={user.Id} usersData={user} />);

  return userContent;
};

export default User;
