export default function Header({ userName, email, age, name }) {
  return (
    <header>
      <ul style={{ listStyleType: "none", marginLeft: "0px" }}>
        <li>Brugernavn: {userName}</li>
        <li>Mail: {email}</li>
        <li>Age: {age}</li>
      </ul>
      <p>Hej {name}</p>
    </header>
  );
}
