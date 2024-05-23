// 기본: string, number,null, undefined, boolean
// 참조: array, element, object, function

// 기본 타입변환 : String()/"",Number()/123,Boolean()/!!,
// 참조 타입변환 : Array()/[],Function()/()=>, Object()/{}

// 1.[일반함수]function name(x,y){return ?}
// 2.[화살표함수] const name = (x) => { retunr ? }
// 3.[익명(이름없는)함수]
// [1. 일회성, 2. 이벤트성]
// -1 function () {}
// -2 () => {}

const arr = Array(1000)
  .fill(1)
  .map((v, i) => i);

const airplane = {
  name: "보잉 704",
  company: "에어서울",
  passengers: 200,
  airport: {
    start: "인천공항",
    end: "나리타공항",
  },
};
