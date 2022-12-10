import Button from "../Login/Button";
import From from "../Login/From";
import Illustration from "../Login/Illustration";
import TextInput from "../Login/TextInput";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <From className={`${classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />

          <Button>
            <span>Submit now</span>
          </Button>
          <div className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </From>
      </div>
    </>
  );
};
export default Login;
