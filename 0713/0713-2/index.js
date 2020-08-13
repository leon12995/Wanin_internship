window.addEventListener('resize',function(){
    if(window.innerwidth > 500){
        console.log("寬度大於500");
    }
})


window.addEventListener('scroll', function(){
    console.log(window.scrollY);
})