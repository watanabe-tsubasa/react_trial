import React from "react"
import { Counter } from "./components/Counter";
import { InputButton } from "./components/InputButton";

function App() {
  return (
    <div>
      <Counter addNum={3} decNum={6} />
      <InputButton />
    </div>
  );
}

export default App;
