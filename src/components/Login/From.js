import classes from "./From.module.css";

const From = ({ children, className, ...rest }) => {
  return (
    <div>
      <form className={`${className} ${classes.form}`} action="#" {...rest}>
        {children}
      </form>
    </div>
  );
};

export default From;
