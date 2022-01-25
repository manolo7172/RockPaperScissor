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


const arr = ['rock','papper','scissor'];
let humanC=0, computerC = 0;
let computerSelection  = "", outcome = "", playerSelection  = "";
function game(){
do {
    do{
    playerSelection  = window.prompt("Pick One of the following:\n a)Rock\n b)Papper\n c)Scissor");
    }while(!arr.includes(playerSelection .toLowerCase()));
    computerSelection =computerPlay();
   outcome=compareChoices(playerSelection .toLowerCase(),computerSelection );
   alert(`You choose - ${playerSelection .toLowerCase()} \nComputer choose - ${computerSelection } \n${outcome} (You: ${humanC} - Comp: ${computerC})`);
} while(humanC<5 && computerC <5)
}

