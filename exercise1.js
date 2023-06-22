let main = document.createElement("main");
let proutContainer = document.createElement("p");
proutContainer.classList.add("prout-container");
main.append(proutContainer);
document.body.append(main);

const PROUT = ["P", "r", "o", "u", "t"];

let letter = 0
writeProut = () => {
    proutContainer.append(PROUT[letter]);
    letter++;
    if (letter > 4){
        clearInterval(interval)
    }
  }
  

let interval = setInterval(writeProut,1000);
