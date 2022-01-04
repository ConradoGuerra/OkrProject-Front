import "./App.css";
import Header from "./components/Header/Header";
import { useState, Fragment } from "react";
import CreateUser from './components/User/CreateUser'
import CreateOkr from './components/Okr/CreateOkr'
import User from "./components/User/User";

function App() {

  const [newUserButton, setnewUserButton] = useState(false);
  const newUserHandler = () => {
    setnewOkrButton(false);
    setnewUserButton(!newUserButton);
  };

  const [newOkrButton, setnewOkrButton] = useState(false);
  const newOkrHandler = () => {
    setnewUserButton(false);
    setnewOkrButton(!newOkrButton);
  };


  return (
    <Fragment>
      <Header onNewUser={newUserHandler} userHeader={newUserButton} onNewOkr={newOkrHandler} okrHeader={newOkrButton} />
      <main style={{ textAlign: "center", marginTop: "8rem" }}>
        <section>
          {newUserButton && !newOkrButton && <CreateUser createUser={setnewUserButton}/>}  
          {newOkrButton && !newUserButton && <CreateOkr createOkr={setnewOkrButton}/>}  
          {!newUserButton && !newOkrButton && <User/>}
        </section>
      </main>
    </Fragment>
  );
}

export default App;
