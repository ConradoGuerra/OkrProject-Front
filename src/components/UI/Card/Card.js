import classes from "./Card.module.css";

const Card = (props) => {
  const okrList = props.usersData.okr.map((okr) => {
    let proportion = ((okr.done / okr.planned)*100).toFixed(2) ;
    proportion > 100 ? proportion = 100+'%' : proportion= proportion+'%'
    return (
      <li key={okr.okrName+okr._id}>
        <span>{okr.okrName}</span>
        <span>
        {okr.done}/{okr.planned}
        </span>
        <div className={classes.progressBar}>
          <div
            style={{ width: `${proportion}` }}
            className={classes["progressBar__fill"]}
          > {proportion}</div>
        </div>
      </li>
    );
  });

  return (
    <div className={classes.card}>
      <div className={classes.userName}>
        <h3>{props.usersData.name}</h3>
        <span>{props.usersData.email}</span>
      </div>
      <ul>{okrList}</ul>
    </div>
  );
};

export default Card;
