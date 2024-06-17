// 오늘 할일 - 2024 06 14 -
// 일요일  빨간색
// 토요일  파랑색
// 나머지는 검정색

import { changeColorbyDay } from "./util/color";

const Header = () => {
  const [year, month, data] = new Date()
    .toLocaleString()
    .replaceAll(".", "")
    .split("");

  const day = new Date().getDay();

  return (
    <div>
      <span> 오늘 할일 </span>
      <span style={{ color: changeColorbyDay(day) }}>
        {year} {month} {data}
      </span>
    </div>
  );
};
export default Header;

// import React from "react";
// import { CSSProperties } from "react";

// type Task = {
//   id: number;
//   content: string;
// };

// const tasks: Task[] = [
//   { id: 1, content: "Task 1" },
//   { id: 2, content: "Task 2" },
//   { id: 3, content: "Task 3" },
// ];

// const getDayColor = (day: number): string => {
//   switch (day) {
//     case 0:
//       return "red";
//     case 6:
//       return "blue";
//     default:
//       return "black";
//   }
// };

// const TodayTasks: React.FC = () => {
//   const today = new Date();
//   const day = today.getDay();
//   const color = getDayColor(day);

//   const style: CSSProperties = {
//     color,
//   };

//   return (
//     <div style={style}>
//       <h1>오늘 할일 - {today.toLocaleDateString()}</h1>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>{task.content}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodayTasks;
