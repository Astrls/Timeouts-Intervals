let main = document.createElement("main");
let displayTimer = document.createElement("p");
displayTimer.classList.add("display-timer");

let displayInterval = document.createElement("div");
displayInterval.classList.add("display-interval");

main.append(displayTimer);
main.append(displayInterval);
document.body.append(main);

let timer = 0;

const increaseTime = () => {
  if (timer % 60 == 0 && timer != 0) {
    newMinute = document.createElement("p");
    newMinute.innerText = `You've been here for ${timer / 60} minutes`;
    displayInterval.append(newMinute);
  }

  displayTimer.innerText = `It's been ${timer} seconds since you opened the page`;
  timer++;
};

setInterval(increaseTime, 1000);
