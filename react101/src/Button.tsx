import React from "react";
import { CSSProperties } from "react";

type ButtonProps = {
  content: string;
  color: string;
  backgroundColor: string;
};

const Button = ({ content, color, backgroundColor }: ButtonProps) => {
  const buttonStyle: CSSProperties = {
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "600",
    lineHeight: "20px",
    borderRadius: "8px",
    width: "240px",
    height: "40px",
    textAlign: "center",
    padding: "10px 0",
    border: "none",
    cursor: "pointer",
    display: "inline-block",
    textDecoration: "none",
  };

  return <button style={buttonStyle}>{content}</button>;
};

const App = () => {
  return (
    <div className="App">
      <Button
        color="white"
        content="앱 다운로드"
        backgroundColor="rgb(247,103,7)"
      />
      <Button
        color="white"
        content="로그인/가입"
        backgroundColor="rgb(247,103,7)"
      />
    </div>
  );
};

export default App;
