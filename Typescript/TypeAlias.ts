// // Genre 및 Grade 타입 정의
// type Genre =
//   | "키덜트"
//   | "공포"
//   | "드라마"
//   | "멜로"
//   | "코믹"
//   | "범죄"
//   | "액션"
//   | "SF";
//   | "사랑";
// type Grade = "전체 이용가" | "12세" | "15세" | "18세";

// // Movie 타입 정의
// type Movie = {
//   name: string;
//   genre: Genre[];
//   grade: Grade;
// };

// // 올바른 Movie 객체
// const cgv: Movie[] = [
//   { name: "인사이드아웃", genre: ["코믹", "키덜트"], grade: "전체 이용가" },
//   { name: "설계자", genre: ["범죄", "드라마"], grade: "15세" },
//   { name: "원더랜드", genre: ["드라마"], grade: "12세" },
// ];

// // 장르 문자열 생성 함수
// const makeGenreStr = (movies: Movie[]) => {
//   movies.forEach((v) => {
//     let str = "";
//     v.genre.forEach((v1) => (str += v1 + " "));
//     console.log(`${v.name}: ${str}`);
//   });
// };

// 함수 호출
// makeGenreStr(cgv);

const makeStrAlign = (msg: string, align: "Center" | "start" | "end") => {
  const span = document.createElement("span");
  span.innerText = msg;
  span.style.textAlign = align;
  return span;
};

// 결과를 콘솔에 출력
console.log(makeStrAlign("점메추", "Center").outerHTML);
