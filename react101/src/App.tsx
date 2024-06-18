import React from "react";
import { CSSProperties } from "react";
import Circle from "./Pill/circle";
import Pill from "./Pill/Pill";
import NewButton from "./NewButton";

function App() {
  const test = () => alert("뭔경우?");
  return (
    <div className="App">
      <Pill CircleColor="#2196F3" TextContent={{ text: "javascript" }} />
      <Pill CircleColor="#F44336" TextContent={{ text: "xml" }} />
      <NewButton click={() => alert("리액트빡셈")} />
      <NewButton click={() => alert("ㄹㅇ ㅎㅎ")} />
    </div>
  );
}

export default App;
