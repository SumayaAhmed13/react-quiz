import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Button from "../Login/Button";
import Checkbox from "../Login/Checkbox";
import From from "../Login/From";
import TextInput from "../Login/TextInput";
import classes from "./SingupForm.module.css";
const SingupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { signup } = useAuth();
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    if (password !== confirmpassword) {
      return setError("Password Don't match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/home");
    } catch (err) {
      setError("Failed to Signup");
      setLoading(false);
    }
  }
  return (
    <div>
      <From className={`${classes.signup}`} onSubmit={submitHandler}>
        <TextInput
          type="text"
          placeholder="Enter Name"
          icon="person"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextInput
          type="text"
          placeholder="Enter Email"
          icon="alternate_email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="Enter Password"
          icon="lock"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="Confirm Password"
          icon="lock_clock"
          required
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
        <Checkbox
          text="I agree to the Terms &amp; Conditions"
          required
          value={agree}
          onChange={(e) => setAgree(e.target.value)}
        />
        <Button type="submit" disabled={loading}>
          <span>Submit now</span>
        </Button>
        {error && <p className="error">{error}</p>}
        <div className="info">
          Already have an account? <Link to="/Login">Login</Link> instead.
        </div>
      </From>
    </div>
  );
};

export default SingupForm;
