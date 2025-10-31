



let gameseq = [];
let userseq = [];

let color = ["yellow", "blue", "purple", "pink"];
let h2 = document.querySelector("h2");

let started = false;
let level = 0;

document.addEventListener("keypress",function(){
    if (started == false){
        console.log("game started");
        started = true;
    }
    levelUp();

});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },150);

}
function gameFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },150);

}

function levelUp (){
    userseq = [];
    level++;
    h2.innerText = `Level - ${level}`;

    //choosing a random button flash

    let randIdx = Math.floor(Math.random()*4  );
    let colorName = color[randIdx];
    let randBtn = document.querySelector(`.${colorName}`);
    //console.log(randIdx);
    //console.log(colorName);
    //console.log(randBtn);
    gameseq.push(colorName);
    console.log(`game : ${gameseq}`);
    btnFlash(randBtn);
}

function btnPress(){
    let btn = this;
    //console.log(this);
    gameFlash(btn);
    let userColor = btn.getAttribute("id");
    userseq.push(userColor);
    console.log(`user : ${userseq}`);
    Match(userseq.length-1);
}


function Match (idx){
    //console.log(`current level is ${level}`);
    if ( userseq[idx] === gameseq[idx]){
        if (userseq.length == gameseq.length){
            setTimeout( levelUp, 1000);
           
        }
    }
    else {
        h2.innerHTML = `Game Over! <b>Your score was ${level}</b> <br> Press any key to Start`;
        document.querySelector("body").style.backgroundColor = "#FF6868";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset ();
    }

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);

}

function reset (){
    started = false;
    level =0 ;
    userseq=[];
    gameseq=[];
}


