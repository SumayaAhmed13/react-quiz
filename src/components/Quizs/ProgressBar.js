import { Link } from "react-router-dom";
import Button from "../Login/Button";
import classes from "./ProgressBar.module.css";
const ProgressBar = () => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>24% Cimplete!</div>
        <div className={classes.rangeBody}>
          <div className={classes.progress} style={{ width: "20%" }}></div>
        </div>
      </div>
      <Link to="/result">
        <div>
          <Button className={classes.next}>
            <span>Next Question</span>
            <span className="material-icons-outlined"> arrow_forward </span>
          </Button>
        </div>
      </Link>
    </div>
  );
};
export default ProgressBar;
