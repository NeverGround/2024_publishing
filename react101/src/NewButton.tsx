import React from "react";

//함수 프롭스 전달

type NewButtonProps = {
  click: () => void;
};

const NewButton = ({}: NewButtonProps) => {
  const click = () => console.log("리액트 ㄹㅇ");
  return <button onClick={click}>뉴버튼</button>;
};

export default NewButton;
