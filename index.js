// 1-[a,b] massiv berilgan distructuring yordamida a va b qiymatlarini almashtiring
console.log("1-masala");

let array = ["a", "b"];
[array[0], array[1]] = [array[1], array[0]];

console.log(array);

// 2-istalgan uzunlikdagi massiv berilgan, toq va juft uzunlikdan foydalanib undan o'rtadagi elementni chiqaring
console.log("2-masala");

let arr = [1, 2, 3, 4, 5];
let length = arr.length;

if (length % 2 === 0) {
  console.log(arr.slice(length / 2 - 1, length / 2 + 1));
} else {
  console.log(arr.slice(Math.floor(length / 2), Math.floor(length / 2) + 1));
}

// 3-[1, 2, 3, 4, 5] massiv berilgan, birinchi 2 ta elementni va qolgan elementlarni guruhlang
console.log("3-masala");

let massiv = [1, 2, 3, 4, 5];

let [a, b, ...res] = massiv;
// let [x, y] = massiv;
console.log("1-ikki element: ", [a, b]);
console.log("Qolgan qism: ", res);

// 4-{person: {name: 'John', age: 30} }, distructuringdan fydalanib name va ageni ajrating
console.log("4-masala");

let object = { person: { name: "John", age: 30 } };

let {
  person: { name, age },
} = object;

console.log("Name: ", name);
console.log("Age: ", age);

// 5-bir nechta qiymatga ega object berilgan, yetishmayotgan qismni to'ldirish uchun destructuredan foydalaning
console.log("5-masala");

let user = {
  Name: "Heyzel",
  surname: "Grace",
  email: "graceoff@gmail.com",
};

let { Name, surname, email, Age = 29, address = "Kevinson street" } = user;

console.log(
  "name: ",
  Name,
  ", surname: ",
  surname,
  ", email: ",
  email,
  ", age: ",
  Age,
  "l address: ",
  address
);

// 6-obyektlardan iborat massiv berilgan, array va object distructure dan foydalanib propertylardan yangi massiv hosil qiling
console.log("6-masala");

const users = [
  { id: 1, name: "Mike", age: 18 },
  { id: 2, name: "Lily", age: 20 },
  { id: 3, name: "Sam", age: 16 },
];

let newArray = [];

for (let i = 0; i < users.length; i++) {
  const { id, name, age } = users[i];
  newArray.push({ id, name, age });
}

console.log(newArray);

// 7-
