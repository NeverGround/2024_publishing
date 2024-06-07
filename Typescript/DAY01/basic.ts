const b: string = "hello world";
const b1: number = 100;
const b2: boolean = !!123;
const b3: null = null;
const b4: undefined = undefined;

const b5: object = { name: "아아", price: 2500 };
const b6: {} = { name: "아아", price: 3000 };
// 타입 추론
const b7: Number[] = [1, 2, 3, 4, 5];
// 최후의 보루임 any anyscript -> javascript
const b8: any = "하고  싶은대로 해";

// {name:'아아', price:2500}
// boolean, null, undefined
// $ npm install -g typescript ts-node : changed 20 packages in 2s
// $ ts-node func.ts : 결과값.
// $ mkdir Day02 : file을 만듬

// $ npx tsc --init = {
//  Created a new tsconfig.json with:
// TS
// target: es2016
// module: commonjs
// strict: true
// esModuleInterop: true
// skipLibCheck: true
// forceConsistentCasingInFileNames: true

// You can learn more at https://aka.ms/tsconfig
// }
// tsconfig.json이라는 파일을 만든다. (여기에는 다양한 코드들이 입력되어있다.)

// $ tsc hello.ts : hello.ts를 hello.js로 바꿔서 만듬
