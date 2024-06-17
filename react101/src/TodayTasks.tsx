import React from "react";
import { CSSProperties } from "react";

// Define a type for the tasks
type Task = {
  id: number;
  content: string;
};

// Sample tasks for demonstration
const tasks: Task[] = [
  { id: 1, content: "Task 1" },
  { id: 2, content: "Task 2" },
  { id: 3, content: "Task 3" },
];

const TodayTasks: React.FC = () => {
  const today = new Date();
  const day = today.getDay();
  let color: string;

  switch (day) {
    case 0: // Sunday
      color = "red";
      break;
    case 6: // Saturday
      color = "blue";
      break;
    default:
      color = "black"; // Other days
      break;
  }

  const style: CSSProperties = {
    color,
  };

  return (
    <div style={style}>
      <h1>오늘 할일 - {today.toLocaleDateString()}</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodayTasks;
