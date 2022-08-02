let btn = document.querySelectorAll("button");

let reset = document.getElementById("reset");

let userChoice = document.getElementById("user_choice");
let compChoice = document.getElementById("comp_choice");
let result = document.getElementById("result");

let comp_score = document.getElementById("computer_score");
let user_score = document.getElementById("user_score");

let choices_object = {
  rock: {
    rock: "draw",
    scissor: "win",
    paper: "lose",
  },
  scissor: {
    rock: "lose",
    scissor: "draw",
    paper: "win",
  },
  paper: {
    rock: "win",
    scissor: "lose",
    paper: "draw",
  },
};

btn.forEach((el) => {
  el.addEventListener("click", (e) => {
    check(e.currentTarget.dataset.choose);
    reset.style.opacity = "1";
  });
});

function check(tar) {
  let arr = ["paper", "scissor", "rock"];
  let randomEl = arr[Math.floor(Math.random() * arr.length)];
  switch (choices_object[tar][randomEl]) {
    case "draw":
      userChoice.innerHTML = `Your Choice Is ${tar}`;
      compChoice.innerHTML = `Computer Choice Is ${randomEl}`;
      result.innerHTML = "DRAW";
      result.style.cssText =
        "color:blue; background-color: #0000ff28; padding: 14px 30px";
      break;
    case "lose":
      userChoice.innerHTML = `Your Choice Is ${tar}`;
      compChoice.innerHTML = `Computer Choice Is ${randomEl}`;
      result.innerHTML = "YOU LOSE";
      result.style.cssText =
        "color:red; background-color: #ff000013; padding: 14px 30px";
      comp_score.innerHTML++;
      break;
    case "win":
      userChoice.innerHTML = `Your Choice Is ${tar}`;
      compChoice.innerHTML = `Computer Choice Is ${randomEl}`;
      result.innerHTML = "YOU WIN";
      result.style.cssText =
        "color:green; background-color: #0080001e; padding: 14px 30px";
      user_score.innerHTML++;
      break;
  }
}
window.addEventListener("close", () => {
  prompt("Are You Sure?");
});
