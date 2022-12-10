import classes from "./Button.module.css";

const Button = ({ className, children }) => {
  return (
    <button className={`${classes.button} ${classes.className}`}>
      {children}
    </button>
  );
};
export default Button;
