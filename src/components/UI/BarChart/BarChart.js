import classes from './BarChart.module.css'

const BarChart = (props) => {
    return (
        <div className={classes.progressBar}>
          <div
            style={{ width: `${props.proportionValue}` }}
            className={classes.progressBar__fill}
          >
            {" "}
            {props.proportionValue}
          </div>
        </div>)
}

export default BarChart