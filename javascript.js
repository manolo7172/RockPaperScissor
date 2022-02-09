let humanC=0, computerC = 0;
let computerSelection  = "", outcome = "", playerSelection  = "";
const score = document.querySelector(".Score");
const content = document.createElement('div');
content.classList.add('content');
content.textContent = `${humanC}-${computerC}`;
score.appendChild(content);

let computerPlay  = () => {
    let tempNum = Math.floor((Math.random() * 3) + 1);
    switch (tempNum){
        case 1:
            return 'rock';
        case 2:
            return 'papper';
        case 3:
            return 'scissor';
         default:
         console.log("wrong Entry");
         break;
    } 
 }
  
 let compareChoices = (choice1,choice2) => {

    if(choice1 === choice2){
        return "Tie";
    }
    else if(choice1===arr[0] && choice2===arr[1]){
        computerC++;
        return "You Lost";//Winner Right
    }
    else if(choice1===arr[1] && choice2===arr[2]){
        computerC++;
        return "You Lost";//Winner Right
    }
    else if(choice1===arr[2] && choice2===arr[0]){
        computerC++;
        return "You Lost";//Winner Right
    }
    else{
        humanC++;
        return "You Won";//Winner Left
    }
} 
const arr = ['rock','papper','scissor'];

function styledGame(){
const btn = Array.from(document.querySelectorAll(".btn"));
const takis = btn.forEach(item => item.addEventListener('click',updScore));
}  

function updScore(){
    if(humanC<5 && computerC <5){
        computerSelection = computerPlay();   
        outcome=compareChoices(this.name,computerSelection );
        console.log(`You choose - ${this.name} \nComputer choose - ${computerSelection }`);
        content.textContent = `${humanC}-${computerC}`;
    }
       else{
          return 0 ; 
       }
    };

styledGame();