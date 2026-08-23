export default function Emailnput({ email, setEmail }) {
  return (
    <>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      ></input>
    </>
  );
}
