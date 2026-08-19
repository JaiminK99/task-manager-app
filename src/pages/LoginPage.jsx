import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password)
      return window.alert("Please enter a valid Email address and Password");

    const submitFormData = {
      email,
      password,
    };
    console.log(submitFormData);
  };

  return (
    <div>
      <h3>Login Page</h3>
      <form>
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
