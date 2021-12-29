import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { useState, Fragment } from "react";
import CreateUser from './components/User/CreateUser'

function App() {

  const [newUserButton, setnewUserButton] = useState(false);

  const newUserHandler = () => {

    setnewUserButton(!newUserButton);
    return;
  };


  return (
    <Fragment>
      <Header onNewUser={newUserHandler} active={newUserButton}/>
      <main style={{ textAlign: "center", marginTop: "8rem" }}>
        <section>
          {newUserButton && <CreateUser />}  
          {!newUserButton && <Home/>}
        </section>
      </main>
    </Fragment>
  );
}

export default App;
