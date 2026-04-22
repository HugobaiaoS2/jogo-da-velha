const btnTheme = document.getElementById("btnTheme");
const theme = localStorage.getItem("them");

btnTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btnTheme.textContent = "☀️";

    localStorage.setItem("theme", "dark");
  } else {
    btnTheme.textContent = "🌙";

    localStorage.setItem("theme", "light");
  }
});

// const player1 = "X";
// const player2 = "O";

// let currentPlayer = player1;

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

let score = 1;

const cells = document.querySelectorAll(".cell");

// function changePlayer () {
//     currentPlayer = currentPlayer === "X" ? "O" : "X";
// }

// cells.forEach(cell => {
//     cell.addEventListener("click", () => {
//         if (cell.textContent === "") {
//             cell.textContent = currentPlayer;

//             changePlayer()
//         }
//     })
// });

let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const reset = () => {
  board.fill("");

  cells.forEach((cell) => {
    cell.textContent = "";
  });

  player = "X";
};

// const winner = () =>
//     win.some(([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c]);

cells.forEach((cell, i) => {
  cell.onclick = () => {
    if (board[i]) return;

    board[i] = player;
    cell.textContent = player;

    if (win.some((combo) => combo.every((i) => board[i] === player))) {
      alert(player + "Win 🏆");

      if (player === "X") {
        p1.textContent = "Player 1: " + score++;
      }

      if (player === "O") {
        p2.textContent = "Player 2: " + score++;
      }

      reset();
      return;
    }

    if (board.every((c) => c)) {
      alert("Draw 🤝");

      reset();
      return;
    }

    player = player === "X" ? "O" : "X";
  };
});
