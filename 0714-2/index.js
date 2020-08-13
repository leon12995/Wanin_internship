function Timer(callBack) {
  setTimeout(function () {
    console.log(100);
  }, 2000);
  callBack();
}

Timer(function () {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
  console.log(6);
  console.log(7);
});
