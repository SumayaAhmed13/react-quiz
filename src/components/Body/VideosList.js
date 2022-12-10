import { Link } from "react-router-dom";
import Video from "./Video";
import classes from "./VideosList.module.css";

const VideosList = () => {
  return (
    <div className={classes.videos}>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
    </div>
  );
};

export default VideosList;
