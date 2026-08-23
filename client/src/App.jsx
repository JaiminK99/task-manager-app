import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Link to="/">home</Link>
        <Link to="/login">login</Link>
        <Link to="/signin">Signin</Link>

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SignUpPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
