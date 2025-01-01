// import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <textarea
        className="txtArea"
        cols={40}
        rows={4}
        placeholder="Write anything you want"
      />
    </div>
  );
}

export default App;
