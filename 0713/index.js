
var gameStartBtn = document.getElementById('start-btn');
var startStage = document.getElementsByClassName("Start-stage")[0];
var readyTimeTxt = document.getElementsByClassName('ready-time')[0];
var gameTimeTxt = document.getElementsByClassName('game-time')[0];
var player = document.getElementsByClassName("play-btn")[0];
var overText = document.getElementsByClassName('Text')[0];
var playerStage = document.getElementsByClassName('Play-stage')[0];
var resetBtn = document.getElementById('reSet');
var readyTime ;
var gameTime ;
var clickInt ;


function Init(){

    readyTime = 3;
    gameTime = 3;
     clickInt = 0;
    var closeTimer;
    var clearGameTimer;
    readyTimeTxt.innerHTML = readyTime;
    gameTimeTxt .innerHTML = 'Game Time : ' + gameTime;
}

Init();








function StartGame(){
    startStage.classList.add("hidden");
    closeTimer =  setInterval(function(){
        readyTime -=1;
        readyTimeTxt.innerHTML = readyTime;
        if(readyTime <= 0){
            clearInterval(closeTimer);
            readyTimeTxt.classList.add('hidden');
            GamePlayer()
        };
    },1000)
}

function GamePlayer(){
    clearGameTimer = setInterval(function(){
        gameTime -= 1;
        gameTimeTxt.innerHTML = 'Game Time : '+ gameTime;
        if(gameTime <= 0){
            clearInterval(clearGameTimer);
            player.removeEventListener('click',addClickInt);
            GameOver();            
        }
    },1000)

    player.addEventListener('click',addClickInt)
}
    function addClickInt(){
        clickInt++;
        console.log(clickInt);
    }

    function GameOver(){
        playerStage.classList.add('hidden');
        if(clickInt>10){
            overText.innerHTML = "恭喜過關";
        }else{
            overText.innerHTML = "嫩廢物";
        }
    }

    resetBtn.addEventListener("click",function(){
        Init();
        startStage.classList.remove("hidden");
        readyTimeTxt.classList.remove('hidden');
        playerStage.classList.remove('hidden');
    })


gameStartBtn.addEventListener('click',function(){
    StartGame();
});



