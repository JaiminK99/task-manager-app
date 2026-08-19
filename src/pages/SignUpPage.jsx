import { useState } from "react";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password)
      return window.alert(
        "Please enter a valid Username, Email address and Password",
      );
    const submitFormData = {
      username,
      email,
      password,
    };
    console.log(submitFormData);

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h3>SignUp Page</h3>
      <form>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        ></input>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
export default SignUpPage;
