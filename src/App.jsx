import { useState } from "react";
import "./App.css";

function App() {
  const max = 6;
  const [count, setCount] = useState(0);

  return (
    <div className="txtContainer">
      <textarea
        className="txtArea"
        cols={30}
        rows={3}
        placeholder="Write anything you want"
        maxLength={max}
        onInput={(e) => setCount(e.target.value.length)}
      />
      <span className="limits">
        {count}/{max}
      </span>
    </div>
  );
}

export default App;
