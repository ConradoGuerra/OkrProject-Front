import classes from "./Header.module.css";

const Header = (props) => {
  const newUser = props.userHeader ? "Users Card" : "New User";
  const newOkr = props.okrHeader ? "Users Card" : "New Okr";

  return (
    <header className={classes["main-header"]}>
      <h1>Okr</h1>
      <div>
        <button className={classes.headerButton} onClick={props.onNewUser}>
          {newUser}
        </button>
        <button className={classes.headerButton} onClick={props.onNewOkr}>
          {newOkr}
        </button>
      </div>
    </header>
  );
};

export default Header;