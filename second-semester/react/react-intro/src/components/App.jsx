import Button from "./Button";
import Greeting from "./Greeting";
import Header from "./Header";

export default function App() {
  return (
    <div>
      <Header name="Hans" userName="hans123" email="hans@mail.dk" age="12" />
      <Greeting />
      <Button />
    </div>
  );
}
