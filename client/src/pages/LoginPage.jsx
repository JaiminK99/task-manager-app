import { useState } from "react";
import FormSubmitButton from "../components/FormSubmitButton";
import Emailnput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";

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

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h3>Login Page</h3>
      <form onSubmit={handleSubmit}>
        <Emailnput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
        <FormSubmitButton />
      </form>
    </div>
  );
}
