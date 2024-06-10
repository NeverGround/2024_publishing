// union [=or]

const user: string | number = "1";
const isLoggin: boolean | null = false;
const box: Element | null = document.querySelector(".box");

// 개 - 푸들, 시바, 치와와, 시츄, ...
// Element - div, section, input, button
const newDiv: HTMLDivElement = document.createElement("div");

// 커피 -> {name, price, shot} or {name,price, kcal}
const coffee:
  | { name: string; paice: number; shot: number }
  | { name: string; price: number; kcal: number } = {
  name: "아아",
  price: 2000,
  shot: 3,
  kcal: 200,
};

// intersection [=and] &
// never : 있을 수가 없음
// unknown : 모른다
// () => type : 함수 지정 타입

// Solid 원칙 = > d: 저수준 모듈 => 고수준 모듈 만드셈
// ex: [타이어, 엔진, 벨트, 시트] => 자동차

const happy = () => {
  console.log("행복함 ㄹㅇ");
};

const person: { name: string } & { age: number } & { eat: () => void } = {
  name: "김타입",
  age: 21,
  eat: () => {
    console.log("밥꿀맛");
  },
};

type Genre =
  | "키덜트"
  | "공포"
  | "드라마"
  | "멜로"
  | "코믹"
  | "범죄"
  | "액션"
  | "SF";
type Grade = "전체 이용가" | "12세" | "15세" | "18세";

type Movie = {
  name: string;
  genre: Genre[];
  grade: Grade;
};
