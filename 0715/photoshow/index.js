var ImgChg = 0;

lftbtn = document.getElementById("lftbtn");
rtbtn = document.getElementById("rghtbtn");
img = document.getElementById("img");

function init(callback) {
  var ApiUrl = "https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050";
  axios.get(ApiUrl).then(function (res) {
    //console.log(res.data.img);
    callback(res.data.img);
  });
}

init(function (imgArr) {
  imgArr(ImgChg);
  lftbtn.addEventListener("click", function () {});
  rtbtn.addEventListener("click", function () {
    ImgChg++;
    if (ImgChg > imgArr.length - 1) {
      ImgChg = 0;
      showImg.src;
    }
    img.src =
      "https://images.unsplash.com/photo-1559286023-3d27c0e06d80?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=200";
  });
});
