// ==========================
// Controle de Tema (Dark/Light)
// ==========================

// Botão de alternância de tema
const btnTheme = document.getElementById("btnTheme");

// Recupera o tema salvo no navegador
const theme = localStorage.getItem("them"); // ⚠️ Possível erro: deveria ser "theme"

// Evento de clique para alternar o tema
btnTheme.addEventListener("click", () => {
  // Alterna a classe 'dark' no body
  document.body.classList.toggle("dark");

  // Verifica qual tema está ativo e atualiza botão + localStorage
  if (document.body.classList.contains("dark")) {
    btnTheme.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    btnTheme.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});


// ==========================
// Elementos de Pontuação
// ==========================

let p1 = document.getElementById("p1"); // Exibição do score do jogador X
let p2 = document.getElementById("p2"); // Exibição do score do jogador O

let scoreX = 1; // Pontuação inicial do jogador X
let scoreO = 1; // Pontuação inicial do jogador O


// ==========================
// Estado do Jogo
// ==========================

// Todas as células do tabuleiro
const cells = document.querySelectorAll(".cell");

// Representação lógica do tabuleiro
let board = ["", "", "", "", "", "", "", "", ""];

// Jogador atual
let player = "X";

// Combinações possíveis de vitória
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


// ==========================
// Função de Reset do Jogo
// ==========================

const reset = () => {
  // Limpa o estado do tabuleiro
  board.fill("");

  // Limpa o conteúdo visual das células
  cells.forEach((cell) => {
    cell.textContent = "";
  });

  // Reinicia o jogador para X
  player = "X";
};


// ==========================
// Lógica Principal do Jogo
// ==========================

// Adiciona evento de clique para cada célula
cells.forEach((cell, i) => {
  cell.onclick = () => {

    // Impede jogada em célula já preenchida
    if (board[i]) return;

    // Atualiza o estado e interface com a jogada atual
    board[i] = player;
    cell.textContent = player;

    // Verifica se houve vitória
    if (win.some((combo) => combo.every((i) => board[i] === player))) {
      alert(player + " Win 🏆");

      // Atualiza pontuação do jogador vencedor
      if (player === "X") {
        p1.textContent = "Player 1: " + scoreX++;
      }

      if (player === "O") {
        p2.textContent = "Player 2: " + scoreO++;
      }

      // Reinicia o jogo após vitória
      reset();
      return;
    }

    // Verifica empate (todas as células preenchidas)
    if (board.every((c) => c)) {
      alert("Draw 🤝");

      // Reinicia o jogo após empate
      reset();
      return;
    }

    // Alterna o jogador
    player = player === "X" ? "O" : "X";
  };
});