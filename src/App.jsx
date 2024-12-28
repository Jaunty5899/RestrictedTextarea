import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <textarea name="text" id="txtArea" maxLength={50}></textarea>
    </div>
  );
}

export default App;
