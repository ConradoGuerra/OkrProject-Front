import classes from "./Home.module.css";
import User from "../User/User";
import { Fragment } from "react/cjs/react.production.min";

const Home = () => {

  return (
    <Fragment>
      <div className={classes.home}>
        <User/>
      </div>
    </Fragment>
  );
};

export default Home;
