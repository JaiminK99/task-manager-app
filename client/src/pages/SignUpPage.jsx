import { useState } from "react";
import FormSubmitButton from "../components/FormSubmitButton";
import UsernameInput from "../components/UsernameInput";
import Emailnput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";

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
      <form onSubmit={handleSubmit}>
        <UsernameInput username={username} setUsername={setUsername} />
        <Emailnput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
        <FormSubmitButton />
      </form>
    </div>
  );
}
export default SignUpPage;
