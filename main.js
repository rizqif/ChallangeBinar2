// array untuk kemungkinan hasil game
// 'd' = draw, 'p' = player 1 win, 'c' = com win
const WIN_TABLE = [
  ["d", "p", "c"],
  ["c", "d", "p"],
  ["p", "c", "d"],
];

// menonaktifkan input player 1 setelah player 1 memilih option
const disableInput = () => {
  document.querySelectorAll(".choice-player").forEach((input) => {
    input.setAttribute("disabled", "disabled");
  });
};

// hide versus info ketika result terlihat
const hideVersus = () => (document.getElementById("vs").style.display = "none");

// menunjukan game result.
const showResult = (result) => {
  // Object berisi tentang hasil sebagai key, dan [log info, css class to manipulate] sebagai value
  const resultInfo = {
    d: ["Draw!", "draw"],
    p: ["Player 1 win!", "win-player"],
    c: ["Com win!", "win-com"],
  };

  console.log(resultInfo[result][0]);
  hideVersus();
  document.getElementById(resultInfo[result][1]).style.display = "block";
  disableInput();
};

// get player 1 choice dan membandingkan dengan com choice. lalu menjalankan show game result function
const getChoice = (choice) => {
  const PLAYER_CHOICE = ["rock", "paper", "scissors"];
  const COM_CHOICE = ["com-rock", "com-paper", "com-scissors"];

  console.log("Player 1 choose", PLAYER_CHOICE[choice]);
  const random = Math.floor(Math.random() * 3); // com choice random

  document.getElementById(PLAYER_CHOICE[choice]).classList.add("chosen");
  document.getElementById(COM_CHOICE[random]).classList.add("chosen");
  document.querySelectorAll(".choice-player").forEach((choice) => {
    choice.classList.remove("choice-hover");
    choice.style.cursor = "default";
  });

  const gameResult = WIN_TABLE[random][choice]; // mendapatkan hasil dengan cara mengakses ke kemungkinan hasil di WIN_TABLE
  showResult(gameResult); // mengajukan showResult ke show the result di browser
};

// refresh game to restart the game
const refreshGame = () => {
  console.log("Refresh!");

  document.querySelectorAll(".choice-player").forEach((input) => {
    input.removeAttribute("disabled");
  });

  document.getElementById("vs").style.display = "block";
  document.getElementById("draw").style.display = "none";
  document.getElementById("win-player").style.display = "none";
  document.getElementById("win-com").style.display = "none";

  document.querySelectorAll(".choice-player").forEach((choice) => {
    choice.classList.add("choice-hover");
    choice.style.cursor = "pointer";
  });

  document.querySelectorAll(".figure").forEach((figure) => {
    figure.classList.remove("chosen");
  });
};
