
const getSomething2 = <T>(something: T) => {
  return `${something}을 얻었습니다.`;
};

type Pair<T, U> = {
  first: T;
  second: U;
};

type Coffee1 = {
  name: string;
  price: number;
};
type Cookie = {
  name: string;
  price: number;
};

const test1: Pair<string, boolean> = {
  first: "치킨",
  second: false,
};

const subwayMorningSet: Pair<Coffee1, Cookie> = {
  first: {
    name: "아메리카노",
    price: 1500,
  },
  second: {
    name: " 화이트 쿠키",
    price: 2500,
  },
};



// Triple 타입 제네릭화 시키고,
// Hamburger type
// side type
// drink type
type Hamburger = {
  name: string;
  price: number;
};

type Side = {
  name: string;
  price: number;
};

type Coffee2 = {
  name: string;
  price: number;
  hasCaffein: boolean;
};

type SoftDrink1 = {
  name: string;
  price: number;
  kcal: number;
};

type Triple<T, U, V> = {
  main: T;
  side: U;
  drinks: V;
};

const bigmac: Triple<Hamburger, Side, SoftDrink1> = {
  main: {
    name: "빅맥",
    price: 3000,
  },
  side: {
    name: "감튀",
    price: 2000,
  },
  drinks: {
    name: "콜라",
    price: 1500,
    kcal: 200,
  },
};

type Success1<T> = {
  type: "success";
  value: T;
};

type Fail1 = {
  type: "fail";
  value: string;
};

type Response__<T> = Success1<T> | Fail1;

const getResponse_ = (res: Response__<string[]>) => {
  if (res.type === "success") {
    res.value.forEach((v) => console.log(v));
  } else {
    console.log(res.value.toUpperCase());
  }
};

getResponse_({
  type: "success",
  value: ["자바", "파이썬", "코틀린", "타입스크립트"],
});

type Won = `${string}원`;
type Yen = `${string}엔`;
type Dollar = `${string}달러`;

type GuestName = `${string}님`;

const shampoo: Won | Yen = `100엔`;

const choi: GuestName = `최님`;
