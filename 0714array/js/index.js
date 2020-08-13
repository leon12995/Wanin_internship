var BTN = document.getElementsByClassName("btn");
// var arr = ['a','b','c'];
console.log(BTN);
function handClickFn(e) {
  e.target.style.fontSize = "80px";
  // console.log(a);
  console.log(a);
}

for (var i = 0; i < BTN.length; i++) {
  BTN[i].addEventListener("click", handClickFn);
}

//arr.reverse 資料反轉
// var arr1=['A','B','C','D'];
// var arr2= ['E','F','G'];

//arr.concat  兩筆資料連接在一起
// var newArr = arr1.concat(arr2);
// console.log(newArr);

// arr.reverse();
// console.log(arr);

// var arr = ['mike','jacky', 'andy','shift'];

// splice (開始的索引, 第幾個值,插入的值)
// arr.splice(2,0,'leon');
// console.log(arr);
// arr.splice(2,1,'andrew');
// console.log(arr);

// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.shift();

// console.log(arr);
// arr.unshift('andy');
// console.log(arr);

// arr.unshift('xaun');
// console.log(arr);

// arr.push("andy");

// console.log(arr);

// arr.push('xuan');

// console.log(arr);
