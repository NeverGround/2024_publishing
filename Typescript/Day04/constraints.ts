// constraints[제약, 규제]

type MainColor = "Pink" | "Red" | "Orange";
type FontSize = 16 | 20;

type WarnButton<T extends MainColor> = {
  backgroundeColor: T;
  fontSize: FontSize;
};

const button: WarnButton<"Pink"> = {
  backgroundeColor: "Pink",
  fontSize: 20,
};

const newBtn = document.createElement("button");

newBtn.style.backgroundColor = button.backgroundeColor;

type ID = string | number;

type Entity<T extends ID> = {
  id: T;
  password: string;
};

const admin: Entity<string> = {
  id: "koreaIT",
  password: "q1w2e3r4!",
};

//type assertion : 타입 단언[확신]

const box = document.querySelector(".box") as HTMLDivElement;
