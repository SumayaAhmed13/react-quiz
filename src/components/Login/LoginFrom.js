import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Button from "../Login/Button";
import From from "../Login/From";
import TextInput from "../Login/TextInput";
const LoginFrom = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { Login } = useAuth();
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await Login(email, password);
      navigate("/home");
    } catch (err) {
      setError("Failed to Login");
      setLoading(false);
    }
  }

  return (
    <div>
      <From style={{ height: "330px" }} onSubmit={submitHandler}>
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

        <Button type="submit" disabled={loading}>
          <span>Submit now</span>
        </Button>
        {error && <p className="error">{error}</p>}
        <div className="info">
          Don't have an account? <Link to="/signup">Signup</Link> instead.
        </div>
      </From>
    </div>
  );
};
export default LoginFrom;
