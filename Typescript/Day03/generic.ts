//generic:generalize -> 입구컷

type Fruit_ = {
  name: string;
  kcal: number;
};

function getSomething<T>(something: T) {
  console.log(`${something}을 얻었습니다.`);
}
getSomething<string>("과일");
getSomething<number>(5);
getSomething<boolean>(true);

getSomething<string | number>("ㅇㅇ");

const getSomething1 = <T>(something: T) => {
  console.log(`${something}을 얻었습니다.`);
};

const getSomethingNumber = (something: number) => {
  console.log(`${something}을 얻었습니다.`);
};

const getSomethingString = (something: string) => {
  console.log(`${something}을 얻었습니다.`);
};
const getSomethingBoolean = (something: boolean) => {
  console.log(`${something}을 얻었습니다.`);
};
getSomething1<string>("탕후루");
