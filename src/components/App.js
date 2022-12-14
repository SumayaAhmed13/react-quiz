import { Navigate, Route, Routes } from "react-router-dom";
import "../components/App.css";
import { AuthProvider } from "../Context/AuthContext";
import Layout from "./Header/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import PrivateOutlet from "./Pages/PrivateOutlet";
import PublicOutlet from "./Pages/PublicOutlet";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import Signup from "./Pages/Signup";
function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<PublicOutlet />}>
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="quiz" element={<Quiz />} />
            <Route path="result" element={<Result />} />
          </Route>
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
