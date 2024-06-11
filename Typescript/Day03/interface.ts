// Hrbrid Type

type Juice = {
  name: string;
  kcal: number;
};

type Carbonated = {
  gas: number;
  color: string;
};
// Hrbrid Type
type SoftDrink = Juice & Carbonated;
// const coke : SoftDrink = {}

interface Fruit {
  name: string;
  kcal: number;
}

interface TropicalFruit extends Fruit {
  sugarLevel: number;
}

const Mango: TropicalFruit = {
  name: "망고",
  kcal: 100,
  sugarLevel: 5,
};

// const totato: Fruit = {
//   name: "토마토",
//   kcal: 10,
// };
