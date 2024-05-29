const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const kim = { name: "김민재", age: 27, position: "center back" };
const { name: koreaNuame, position: soccerPosition } = kim;

const koreaDefender = {
  koreaName,
  soccerPosition,
};
console.log(koreaPosition);

//1.renaming
const renamedUsers = users.map(
  ({ id: usrId, name: userName, age: userAge }) => ({
    userId,
    userName,
    userAge,
  })
);
