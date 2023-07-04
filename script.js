console.log("welcome to Tic-tak Game")

let audioTurn = new Audio("ting.mp3")
let turn = "X";
let isGameOver = false;


// Function to change the turn
const ChangeTurn = () =>{
    return turn === "X" ? "O" : "X";
}

// Function to check for a win
const checkWin = () =>{
  let boxtext = document.getElementsByClassName('box');
  let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won!"
        isGameOver = true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
    }
  })
}


// LOgic for the Game

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click",()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = ChangeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn +"!"; 
            }
        }
    })
})


//Logic for Game Restart

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isGameOver = false
    
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn + "!";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
