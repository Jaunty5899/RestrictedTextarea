import { useState } from "react";
import "./App.css";

function App() {
  const max = 50;
  const [count, setCount] = useState(0);

  return (
    <div className={`txtContainer ${count == max ? "limitReachedBorder" : 0}`}>
      <textarea
        className="txtArea"
        cols={30}
        rows={3}
        placeholder="Write anything you want"
        maxLength={max}
        onInput={(e) => setCount(e.target.value.length)}
      />
      <span className={`limits ${count == max ? "limitReachedColor" : null}`}>
        {count}/{max}
      </span>
    </div>
  );
}

export default App;
