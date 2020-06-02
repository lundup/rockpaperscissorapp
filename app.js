const choices=document.querySelectorAll('.choices')
const score=document.getElementById('score');
const result= document.getElementById('result');
const modal=document.querySelector('.modal');
const restart= document.getElementById('restart');

const scoreboard={
    player:0,
    computer:0
}

function play(e){
    
    const playerChoice=e.target.id;
    const computerchoice=getcomputerchoice();
    console.log( "player"+playerChoice)
console.log("computer;"+ computerchoice)
const winner=getwinner(playerChoice, computerchoice);
console.log("winner;"+winner);
showwinner(winner,computerchoice);

console.log(scoreboard)
score.innerHTML=`
<p id="player">${scoreboard.player}</p>
<p id="computer">${scoreboard.computer}</p>
`

}
function showwinner(winner,computerchoice){
    if(winner==='player'){
        scoreboard.player++;
        result.innerHTML=`
            <h1 class="win-text">YOU WIN</h1>
            <i class="far fa-hand-${computerchoice}"> </i>
            <p>computer chose ${computerchoice}</p>
            `
    }else if(winner==='computer'){
        scoreboard.computer++;
        result.innerHTML=`
            <h1 class="lose-text">YOU LOSE</h1>
            <i class="far fa-hand-${computerchoice}"> </i>
            <p>computer chose ${computerchoice}</p>
            `
    } else{
        result.innerHTML=`
        <h1 class="draw-textt">DRAW</h1>
        <i class="far fa-hand-${computerchoice}"> </i>
        <p>computer choose ${computerchoice}</p>
        `
    }

    modal.style.display = 'block';
}

function getwinner(p,c){

    if (p === c) {
        return 'draw';
      } else if (p === 'rock') {
        if (c === 'paper') {
          return 'computer';
        } else {
          return 'player';
        }
      } else if (p === 'paper') {
        if (c === 'scissors') {
          return 'computer';
        } else {
          return 'player';
        }
      } else if (p === 'scissors') {
        if (c === 'rock') {
          return 'computer';
        } else {
          return 'player';
        }
      }

}


function getcomputerchoice(){
    const rand=Math.random();
    if(rand<0.33){
return "rock"
    }
    if(rand<0.66){
        return "paper"
    }
    else{
        return 'scissors'
    }
}
function clearmodel(e){
    if(e.target==modal){
         modal.style.display='none';
    }
   
}
function restartscore(){
    
    scoreboard.player=0;
    scoreboard.computer=0;
    
    score.innerHTML=`
         <p id="player">player:0</p>
    <p id="computer">computer:0</p>
    `
   
}

choices.forEach(choice => choice.addEventListener('click', play));
document.addEventListener('click',clearmodel);
restart.addEventListener('click',restartscore)