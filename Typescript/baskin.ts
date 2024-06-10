type Category = "icecream" | "cake" | "cookie";

type Icon = string;

type NutritionInfo = {
  servings: number;
  kcal: number;
  sugars: number;
  marginIngredient: Icon[];
};

type IcecreamProductInfo = {
  category: Category;
  engName: string;
  nutrition: NutritionInfo;
};

type IcecreamComposition = {
  icecream: IcecreamProductInfo;
  photoURL: string;
};

const exampleIcecream: IcecreamComposition = {
  icecream: {
    category: "icecream",
    engName: "우주 라이크 봉봉",
    nutrition: {
      servings: 1,
      kcal: 210,
      sugars: 20,
      marginIngredient: ["sugar", "milk", "flavor"],
    },
  },
  photoURL: "http://example.com/wooju_like_bongbong.jpg",
};

console.log(exampleIcecream);
