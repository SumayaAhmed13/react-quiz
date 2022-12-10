import image from "../Assets/images/signup.svg";
import classes from "./Illustration.module.css";

const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <img src={image} alt="Signup" />
    </div>
  );
};

export default Illustration;
