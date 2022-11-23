
const emojisArray = ["☀️", "⭐️", "🎃", "👿", "🧛‍♀️", "🤖", "🤠","👨‍💻","⛷","🍲" ];
const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emoji-container")
//const emojiInput = document.getElementById("emoji-input")
//const pushBtn = document.getElementById("push-btn")
//const unshiftBtn = document.getElementById("unshift-btn")
//const popBtn = document.getElementById("pop-btn")

// buttons
const alertBtn = document.getElementsByClassName("alert");
const pullBtn = document.getElementById("pull-lvr");

let alertState = false;

let displayPointsEl = document.getElementById("display-points");
let displayTotalPointsEl = document.getElementById("total-points");
let displayAllowedBlockEl = document.getElementById("display-allowed-blocks");

// counters
let sunshinesNum = 0;
let totalSunshines = 0;

let isSpliccyActive = false;
let leverPullCount = 0;
let allowedBlocks = leverPullCount;
let blockedButtons = 0;


//buttons
let isLeftButtonBlocked = false;
let isMiddleButtonBlocked = false;
let isRightButtonBlocked = false;
const leftBlockBtn = document.getElementById("left-block-btn");
const middleBlockBtn = document.getElementById("middle-block-btn");
const rightBlockBtn = document.getElementById("right-block-btn");

let potentialBlocks 





function checkSunshines(){
if (totalSunshines > 1000) {
    totalSunshines = 0;
    allowedBlocks = 0;
    displayPointsEl.innerHTML =`Sunburn! You've lost all your sunshines!`;
    displayTotalPoints();
    }else if (totalSunshines === 1000){
        displayTotalPointsEl.innerHTML =`Congratulations!! You reached exacly <span class="sunshine-num">1000</span> sunshines!`
    }else if (totalSunshines >= 950){
   // isSpliccyActive = true;
   // spliccy()
}
}

function resetScreen(){
    document.body.style.backgroundImage="linear-gradient(#5DA4D9, #FFF)";
    displayPointsEl.style.color="black";
    displayTotalPointsEl.style.color="black"}

function displayAllowedBlock(){
    displayAllowedBlockEl.innerHTML = 
    `<span>Allowed blocks = ${allowedBlocks}/5</span>`;
}

displayAllowedBlock()

// Authorize button-block

function authorizeButtonsBlocks(){
    //substract block(s) used last play
    allowedBlocks -= blockedButtons;
    //easy mode  if hard{ allowedBlocks += 0.5}
    // add 1 block per turn
    allowedBlocks++
     potentialBlocks = allowedBlocks - blockedButtons;
    if (allowedBlocks < 0){
        allowedBlocks = 0
    } else if (allowedBlocks > 5){
        allowedBlocks = 5
    }
    displayAllowedBlock()    
}



leftBlockBtn.addEventListener("click", function(){
     
     if (isLeftButtonBlocked){
        leftBlockBtn.classList.toggle("blocked");
        isLeftButtonBlocked = !isLeftButtonBlocked;
        potentialBlocks++
        blockedButtons--
        }else {
        if (allowedBlocks > blockedButtons){
            blockedButtons++
            potentialBlocks--
            leftBlockBtn.classList.toggle("blocked");
            isLeftButtonBlocked = !isLeftButtonBlocked;
        }
     
     displayAllowedBlock();
       }
}
)

middleBlockBtn.addEventListener("click", function(){
   
    if (isMiddleButtonBlocked){
        middleBlockBtn.classList.toggle("blocked");
        isMiddleButtonBlocked = !isMiddleButtonBlocked;
        potentialBlocks++
        blockedButtons--
        }else {
        if (allowedBlocks > blockedButtons){
            blockedButtons++
            potentialBlocks--
            middleBlockBtn.classList.toggle("blocked");
            isMiddleButtonBlocked = !isMiddleButtonBlocked;
        } 
     }
     displayAllowedBlock();
    }
)

rightBlockBtn.addEventListener("click", function(){
 
    if (isRightButtonBlocked){
        rightBlockBtn.classList.toggle("blocked");
        isRightButtonBlocked = !isRightButtonBlocked;
        potentialBlocks++
        blockedButtons--
        }else {
        if (allowedBlocks > blockedButtons){
            blockedButtons++
            potentialBlocks--
            rightBlockBtn.classList.toggle("blocked");
            isRightButtonBlocked = !isRightButtonBlocked;
        } 
     }
     displayAllowedBlock();
    }
)




function generateEmoji(myEmojisIndex, isButtonBlocked){
    if (!isButtonBlocked){
    const randNum = Math.floor(Math.random()* emojisArray.length);
    myEmojis[myEmojisIndex] = emojisArray[randNum];
    renderEmojis()
 }
}

function generateThreeEmojis(){
    generateEmoji(0, isLeftButtonBlocked)
    generateEmoji(1, isMiddleButtonBlocked)
    generateEmoji(2, isRightButtonBlocked)
}


function calculateSunshines(){
    // if all three emojis are the same
    if (myEmojis[0] === myEmojis[1] && myEmojis[0] === myEmojis[2]){
        if (myEmojis[0] === emojisArray[0]){
            sunshinesNum = 300;
            document.body.style.backgroundImage="url('images/sunshine.avif')"
            displayPointsEl.style.color="gold";
            displayTotalPointsEl.style.color="gold";
           
        } else if  (myEmojis[0] === emojisArray[1]){
            sunshinesNum = 200;
            document.body.style.backgroundImage="url('images/moon.avif')";
            displayPointsEl.style.color="gold";
            displayTotalPointsEl.style.color="gold";
        } else if (myEmojis[0] === emojisArray[2] || (myEmojis[0] === emojisArray[3]) ||
        (myEmojis[0] === emojisArray[4])){
            totalSunshines = 0;
            allowedBlocks = 0;
            displayPointsEl.innerHTML =`You've lost all your sunshines!`;
            document.body.style.backgroundImage = 
            "url('images/bats.avif')";
            displayPointsEl.style.fontFamily="";
            displayPointsEl.style.color="red";
        } else {
        sunshinesNum += 100;
        }
     //if two emojis are the same
    } else if (myEmojis[0] === myEmojis[1] || myEmojis[0] === myEmojis[2]) {
        calcTwoIdenticalEmojis(0)
    } else if (myEmojis[1] === myEmojis[2]){
        calcTwoIdenticalEmojis(1)
    }
        totalSunshines += sunshinesNum;
}
        
function calcTwoIdenticalEmojis(ind){
        
        if (myEmojis[ind] === emojisArray[0]){
            sunshinesNum += 100;
        }else if (myEmojis[ind]=== emojisArray[1]){
            sunshinesNum += 50;
        }else if (myEmojis[ind]=== emojisArray[2]){
            sunshinesNum -= 10;
        }else if (myEmojis[ind]=== emojisArray[3]){
            sunshinesNum -= 50;
        }else if (myEmojis[ind]=== emojisArray[4]){
            sunshinesNum -= 25;
        }else {
            sunshinesNum += 25;
        }
        }
      




function displayPoints(){
    if (sunshinesNum >= 0){
      displayPointsEl.innerHTML =`You've won <span class="sunshine-num">${sunshinesNum} </span>sunshines!`;
    } else {
        displayPointsEl.innerHTML =`You've lost <span class="sunshine-num">${-sunshinesNum} </span> sunshines!`;  
    }
}

function displayTotalPoints(){
    if (totalSunshines > 0){ 
    displayTotalPointsEl.innerHTML =`You now have <span class="sunshine-num">${totalSunshines}</span> sunshines in total!`;
 } else if (totalSunshines === 0){
    displayTotalPointsEl.innerHTML =`You have no sunshines...`;
 } else {
    displayTotalPointsEl.innerHTML =`You now owe <span class="sunshine-num">${-totalSunshines}</span>  sunshines!`;
 }
}



 // pull lever! 
document.getElementById("pull-lvr").addEventListener("click", function(){
    let buttonsInBlockedPosition = document.getElementsByClassName("blocked");
      if (allowedBlocks >= blockedButtons && !alertState){
        displayPointsEl.innerHTML ="";
        leverPullCount++;
        
        authorizeButtonsBlocks()
        resetScreen()
        
        sunshinesNum = 0;
        generateThreeEmojis()
        calculateSunshines()
        displayTotalPoints()
        if (displayPointsEl.innerHTML !==`You've lost all your sunshines!`){
        displayPoints()
        }
        checkSunshines()
    }else if (allowedBlocks < blockedButtons && !alertState){
        alertState = true;
       // pullBtn.classList.toggle("alert");
        pullBtn.classList.toggle("error")
        } 
        /// make pull lever btn red instead!!! and block gray unless there are allowed blocks
        else if (allowedBlocks >= blockedButtons && alertState){
        alertState = false;
       // pullBtn.classList.toggle("alert");
        pullBtn.classList.toggle("error")
        } 
    }
)

generateThreeEmojis()

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis();


