const person = {
  name: `john`,
  age: 21,
  major: "computer",
};

// const { name, major } = person; 빼기
// const { name: realName, major: superMajor } = person; 빼면서 별명
// realName; // john

const person1 = {
  name: "Jenny",
  address: {
    city: "bupyoung",
    zipCode: 1004,
  },
};
const { address } = person1;
const {
  address: { zipCode: zip },
} = person1;

const { zipCode: zip1 } = person1.address;

const user = {
  username: "alice",
  email: "alice@example.com",
  datails: {
    firstName: "Alice",
    lastName: "Doe",
  },
};
const { lastName: familyName } = user.details;
console.log(familyName); //'Doe'
