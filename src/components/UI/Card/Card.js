import classes from "./Card.module.css";

const Card = (props) => {
  const okrList = props.usersData.Objetivos.map((okr) => {
    let proportion = ((okr.Realizado / okr.Meta)*100).toFixed(2) ;
    proportion > 100 ? proportion = 100+'%' : proportion= proportion+'%'
    console.log(proportion);
    return (
      <li>
        <span>{okr.Nome}</span>
        <span>
        {okr.Realizado}/{okr.Meta}
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
        <h3>{props.usersData.Nome}</h3>
        <span>{props.usersData.Email}</span>
      </div>
      <ul>{okrList}</ul>
    </div>
  );
};

export default Card;
