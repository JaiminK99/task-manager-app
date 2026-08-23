export default function UsernameInput({ username, setUsername }) {
  return (
    <>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      ></input>
    </>
  );
}
