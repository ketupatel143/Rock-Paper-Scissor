let userscore=0;
let comscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const comscorepara=document.querySelector("#computer-score");


const showWinner=(userwin,userchoice, comchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You Win !");
        msg.innerText=`YOU WIN YOUR ${userchoice} beats ${comchoice} `;
        msg.style.backgroundColor = "green";
    }else{
        comscore++;
        comscorepara.innerText=comscore;
        console.log("You Lose !");
        msg.innerText=`YOU LOSE YOUR ${userchoice} WAS beats BY ${comchoice} `;
        msg.style.backgroundColor = "red";


    }
}

const drawgame =()=>{
    console.log("Game Was Draw.")
    msg.innerText="GAME WAS DRAW.";
    msg.style.backgroundColor = "rgb(4, 4, 108)";
}

const gencomchoice = () => {
    const option=["rock","paper","scssior"];
    const rndIdx=Math.floor(Math.random() * 3);
    return option[rndIdx];
}

const playgame=(userchoice) => {
    console.log("user choice : ", userchoice);
    const comchoice = gencomchoice(); 
    console.log("computer choice : ", comchoice);

    if(userchoice === comchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice === "rock"){
            // comchoice paper,scissor bache
            userwin= comchoice === "paper"? false:true;
        }else if(userchoice === "paper"){
            //comchoice rock,scissor bache
            userwin= comchoice === "scissor"? false:true;
        }else{
            //comchoice paper,rock bache
            userwin= comchoice ==="rock" ? false:true;
        }
        showWinner(userwin, userchoice, comchoice);
    }

}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        // console.log("choice was clicked", userchoice);
        playgame(userchoice);
    })
}) 