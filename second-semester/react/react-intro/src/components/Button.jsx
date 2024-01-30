import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(false);

  return (
    <>
      <button onClick={() => [setCount(prev => prev + 1), setText(true)]}>
        Tryk på knappen
      </button>
      {text ? <p>Du har clicket {count} gange</p> : <p></p>}
    </>
  );
}

export default Button;
