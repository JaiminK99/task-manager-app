function PasswordInput({ password, setPassword }) {
  return (
    <>
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      ></input>
    </>
  );
}

export default PasswordInput;
