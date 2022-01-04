import classes from "./Card.module.css";
import BarChart from "../BarChart/BarChart";
import OkrResult from "../../Okr/OkrResult";
import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

const Card = (props) => {
  const [modalShown, setModalShown] = useState(false);
  const [userOkrData, setUserOrkData] = useState({});

  const showResuldModal = (okrData) => {
    setUserOrkData({ ...okrData, userId: props.usersData.id });
    setModalShown(true);
  };

  const hideResultModal = () => {
    setModalShown(false);
  };

  const okrList = props.usersData.okr.map((okr) => {
    let proportion = ((okr.done / okr.planned) * 100).toFixed(2);
    proportion > 100
      ? (proportion = 100 + "%")
      : (proportion = proportion + "%");
    return (
      <li key={okr.okrName + okr._id}>
        <div className={classes.header}>
          <div className={classes.button}>
            <button
              onClick={() => {
                showResuldModal(okr);
              }}
            >
              +
            </button>
          </div>
          <span>{okr.okrName}</span>
          <span>
            {okr.done}/{okr.planned}
          </span>
        </div>
        <BarChart proportionValue={proportion} />
      </li>
    );
  });

  let content = (
    <div className={classes.card}>
      <div className={classes.userName}>
        <h3>{props.usersData.name}</h3>
        <span>{props.usersData.email}</span>
      </div>
      <ul>{okrList}</ul>
    </div>
  );

  return (
    <Fragment>
      {content}
      {modalShown && (
        <OkrResult
          okrData={userOkrData}
          onResultHide={hideResultModal}
        ></OkrResult>
      )}
    </Fragment>
  );
};

export default Card;
