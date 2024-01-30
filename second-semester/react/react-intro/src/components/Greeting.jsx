export default function Greeting() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  hours < 12
    ? (timeOfDay = "morgen")
    : hours >= 12 && hours < 17
    ? (timeOfDay = "eftermiddag")
    : (timeOfDay = "aften");

  return <h1>God{timeOfDay} og velkommen til 🎉</h1>;
}
