// var a = 1;
// a = "mike";
// console.log(a);

// let 有區域性的概念 以大括號為分界
// if (true) {
//   let b = 1;
// }
// console.log(b);

// const 代表一個常數 不能改變的宣告
// const c = 1;
// c = "leon";
// console.log(c);
/////////////////////////////////////////////////////$Recycle.Bin
// var index = "mike";

// for (let index = 0; index < 5; index++) {
//   console.log(index);
// }

// console.log(index);
/////////////////////////////////////////////////////////////////$Recycle.Bin
// for (let index = 0; index < 5; index++) {
//   //console.log(index);
//   setTimeout(function () {
//     console.log(index);
//   }, 1000);
// }

//////////////////////////////////////////////////////////////$Recycle.Binc

// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   console.log(this);
// });
//////////////////////////////////////////////////////////////////////$Recycle.Bin
// gsap.to(".box", {rotation: 27, x: 100, duration: 1});

////////////////////////////////////////////////////////////////$Recycle.Bin
// function 只有一行時，可以簡化不用括號

// const add = (a, b) => a + b;

// console.log(add(3, 4));

// const add2 = (a, b) => {
//   return a + b;
// };
// console.log(add2(3, 5));

///////////////////////////////////////////////////////////////////$Recycle.Bin
// function 預設值
// const add = (a = 1, b = 2) => {
//   return a + b;
// };

// console.log(add());

/////////////////////////////////////////////////////////////
// 解構

// const obj = {
//   name: "mike",
//   age: 12,
//   address: "台北市",
// };

// const { name, age, address } = obj;

// console.log(name);
// console.log(age);
// console.log(address);
//////////////////////////////////////////////////////$Recycle.Bin
// const name = "mike";
// const age = 12;
// const address = "台北市";

// const obj = {
//   name,
//   age,
//   aaa: address,
// };
// console.log(obj);

////////////////////////////////////////////////////

// const id = 5;

// const str = `這個數字是${id}`;
// console.log(str);

////////////////////////////////////////////////////
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const arr4 = [...arr1, ...arr2, ...arr3];

// const a = [1, 2, 3, ...arr3];
// console.log(arr4);
// console.log(a);
//////////////////////////////////////////////////////////////////

/// promise 非同步處理 同時串接多個api

const promise1 = (api) => {
  return new Promise((resolve, reject) => {
    axios
      .get(api)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

Promise.all([
  promise1("https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050"),
  promise1("https://run.mocky.io/v3/f7bc1c2e-93ac-4ef6-b351-417ee9724ae1"),
  promise1("https://run.mocky.io/v3/1e5895d7-3160-4f6e-bc68-936b89188c1a"),
]).then((values) => {
  console.log(values);
});
