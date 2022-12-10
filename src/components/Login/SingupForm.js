import { Link } from "react-router-dom";
import Button from "../Login/Button";
import Checkbox from "../Login/Checkbox";
import From from "../Login/From";
import TextInput from "../Login/TextInput";
import classes from "./SingupForm.module.css";
const SingupForm = () => {
  return (
    <div>
      <From className={`${classes.signup}`}>
        <TextInput type="text" placeholder="Enter Name" icon="person" />
        <TextInput
          type="text"
          placeholder="Enter Email"
          icon="alternate_email"
        />
        <TextInput type="password" placeholder="Enter Password" icon="lock" />
        <TextInput
          type="password"
          placeholder="Confirm Password"
          icon="lock_clock"
        />
        <Checkbox text="I agree to the Terms &amp; Conditions" />
        <Button>
          <span>Submit now</span>
        </Button>
        <div className="info">
          Already have an account? <Link to="/Login">Login</Link> instead.
        </div>
      </From>
    </div>
  );
};

export default SingupForm;
