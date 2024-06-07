const makeZodiac = (year: number): string => {
  const zodiac = [
    "원숭이",
    "닭",
    "개",
    "돼지",
    "쥐",
    "소",
    "호랑이",
    "토끼",
    "용",
    "뱀",
    "말",
    "양",
  ];
  const animal = zodiac[year % 12];
  return "앙" + animal + "띠";
};
console.log(makeZodiac(2024));
console.log(makeZodiac(2025));

const reversedNumber = (num: number): number[] =>
  [...String(num)].reverse().map((v) => Number(v));

console.log(reversedNumber(12345));
console.log(reversedNumber(2024));

const hateEven = (n: number) =>
  Array(n)
    .fill(0)
    .map((_, i) => i)
    .filter((v) => v % 2);

console.log(hateEven(15));
console.log(hateEven(20));
