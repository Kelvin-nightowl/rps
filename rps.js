

const container = document.querySelector("#container");
const btns = document.createElement("div");
btns.style.border = "5px solid #01BAEF";
btns.style.height = "500px";
btns.style.borderRadius = "150px";
btns.style.background = "#0B4F6C"
btns.style.width = "950px"

 const rock = document.createElement("button");
 rock.style.background = "#20BF55"
 rock.style.marginTop ="200px"
 rock.style.marginLeft = "100px"
 rock.style.height = "130px"
 rock.style.width = "160px"
 rock.style.borderRadius = "100px"
 rock.textContent = "ROCK"
 rock.style.border = "5px solid #01BAEF";

 const paper = document.createElement("button");
 paper.style.background = "#20BF55"
 paper.style.marginTop ="200px"
 paper.style.marginLeft = "80px"
 paper.style.height = "130px"
 paper.style.width = "160px"
 paper.style.borderRadius = "100px"
 paper.textContent = "PAPER"
 paper.style.border = "5px solid #01BAEF";


 const scissors = document.createElement("button");
 scissors.style.background = "#20BF55"
 scissors.style.marginTop ="200px"
 scissors.style.marginLeft = "100px"
 scissors.style.height = "130px"
 scissors.style.width = "160px"
 scissors.style.borderRadius = "100px"
 scissors.textContent = "SCISSORS"
 scissors.style.border = "5px solid #01BAEF";
 
 


btns.appendChild(rock);
btns.appendChild(paper)
btns.appendChild(scissors)
container.appendChild(btns);
