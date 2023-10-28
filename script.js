let currentPlayer = 'X';
let board = ['','','','','','','','','',''];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(cell) {
    if (board[cell] === '' && !isGameOver()) {
        board[cell] = currentPlayer;
        document.getElementById('board').children[cell].innerHTML = currentPlayer;
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';

        if (isGameOver()) {
            document.getElementById('winner').innerHTML = "Player " + (currentPlayer === 'X' ? 'O' : 'X') + " wins!";
        }
    }
}

function isGameOver() {
    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    if (!board.includes('')) {
        document.getElementById('winner').innerHTML = "It's a draw!";
        return true;
    }
    return false;
}