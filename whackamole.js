//Adding cells to the grid
let gameContainer = document.querySelector(".game-container");

//Global variables
let scoreP = document.querySelector(".score");
let score = 0;
scoreP.innerText = score
const intervalTimer = 2000

//Creation of the mole burrows (grid cells)
for (i = 0; i < 12; i++) {
  let newCell = document.createElement("div");
  newCell.classList.add("game-cell");
  newCell.setAttribute("id", `cell${i + 1}`);
  gameContainer.append(newCell);
}

//Function to randomize a number between 1 & 12
const randomizeMole = () => {
  min = Math.ceil(1);
  max = Math.floor(12);
  return Math.floor(Math.random() * (max - min) + min);
};

//Function to randomize the timer between moles appearing. min & max arguments are in milliseconds
const randomizeTimer = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

//Variables 
const minReactionTimer = 500
const maxReactionTimer = 1000
const reactionTimer = randomizeTimer(minReactionTimer, maxReactionTimer)

//Function to make moles appear randomly via class toggle based on a timer
const showMole = () => {
  let randomMole = randomizeMole();
  let newMole = document.getElementById(`cell${randomMole}`);
  newMole.classList.add("mole");
  const hideMole = () => {
    newMole.classList.remove("mole");
  };
  setTimeout(hideMole, intervalTimer);
};

//Define a specific timer and call the function 
let interval1 = setInterval(showMole, reactionTimer);


// Incrementing the score when a cell with the class ".mole" is clicked
document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("mole")) {
    e.target.classList.remove("mole");
    score++;
    scoreP.innerHTML = score;
  }
});

