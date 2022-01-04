import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { useState, Fragment } from "react";
import CreateUser from './components/User/CreateUser'
import CreateOkr from './components/Okr/CreateOkr'

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
          {!newUserButton && !newOkrButton && <Home/>}
        </section>
      </main>
    </Fragment>
  );
}

export default App;
